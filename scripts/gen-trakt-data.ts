import fs from "node:fs/promises";
import { loadEnvConfig } from "@next/env";
import ky from "ky";

loadEnvConfig(process.cwd());
const token = process.env.TRAKT_ACCESS_TOKEN;
const client_id = process.env.TRAKT_CLIENT_ID;

const TRAKT_USERNAME = "adamjnavarro";
const BASE_URL = `https://api.trakt.tv/users/${TRAKT_USERNAME}`;

const urls = {
	stats: `${BASE_URL}/stats`,
	history: `${BASE_URL}/history/shows`,
	watched: `${BASE_URL}/watched/shows?extended=noseasons`,
	watching: `${BASE_URL}/lists/currently-watching/items/show,season`,
	watchlist: `${BASE_URL}/watchlist/shows`,
	favorites: `${BASE_URL}/lists/favorite-tv/items/show`,
};

export async function traktFetch(url: string): Promise<any> {
	return ky
		.get(url, {
			headers: {
				Authorization: `Bearer ${token}`,
				"Content-Type": "application/json",
				"trakt-api-key": client_id,
				"trakt-api-version": "2",
			},
		})
		.json();
}

function flattenTraktShowData(data: any[]) {
	return data.map((item: any) => {
		const { id, listed_at: dateAdded, rank, type } = item;
		const { ids: showIds, title, year, overview, status, genres } = item.show;
		if (type === "season") {
			return {
				id,
				type,
				rank,
				dateAdded,
				showIds,
				url: `https://trakt.tv/shows/${showIds.slug}`,
				title,
				year,
				overview,
				status,
				genres,
				seasonIds: item.season.ids,
				seasonNumber: item.season.number,
				seasonTitle: item.season.title,
			};
		}

		return {
			id,
			type,
			rank,
			dateAdded,
			showIds,
			url: `https://trakt.tv/shows/${showIds.slug}`,
			title,
			year,
			overview,
			status,
			genres,
		};
	});
}

function generateGenresData(shows) {
	const genresObj = {};
	// biome-ignore lint/complexity/noForEach: <explanation>
	shows.forEach((item) => {
		const { genres } = item;
		// biome-ignore lint/complexity/noForEach: <explanation>
		genres.forEach((str) => {
			if (genresObj[str]) {
				genresObj[str]++;
			} else {
				genresObj[str] = 1;
			}
		});
	});

	const data = Object.keys(genresObj)
		.map((key) => ({
			genre: key.replaceAll("-", " "),
			total: genresObj[key],
		}))
		.sort((a, b) => b.total - a.total);
	return data;
}

async function generateTraktData() {
	const statsData = await traktFetch(urls.stats);
	const stats = {
		shows: statsData.shows.watched,
		episodes: statsData.episodes.watched,
		minutes: statsData.episodes.minutes,
	};

	const favoritesData = await traktFetch(`${urls.favorites}?extended=full`);
	const favorites = flattenTraktShowData(favoritesData);

	const watchingData = await traktFetch(`${urls.watching}?extended=full`);
	const watching = flattenTraktShowData(watchingData);

	// const watchlistData = await traktFetch(`${urls.watchlist}?extended=full`);
	// const watchlist = flattenTraktShowData(watchlistData);

	const watchedData = await traktFetch(`${urls.watched}&extended=full`);
	const watched = watchedData.map((item: any) => {
		const { ids, title, year, overview, status, genres } = item.show;
		return {
			id: ids.trakt,
			type: "show",
			dateAdded: item.last_watched_at,
			showIds: ids,
			url: `https://trakt.tv/shows/${ids.slug}`,
			title,
			year,
			overview,
			status,
			genres,
		};
	});

	const genres = generateGenresData(watched);
	const completeData = JSON.stringify(
		{
			updatedAt: new Date(),
			stats,
			watching,
			//watchlist,
			watched,
			favorites,
			genres,
		},
		null,
		2,
	);
	await fs.writeFile("./src/app/data/trakt/data.json", completeData, "utf-8");
}

generateTraktData();
