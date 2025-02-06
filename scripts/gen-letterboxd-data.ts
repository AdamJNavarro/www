import fs from "node:fs/promises";
import { loadEnvConfig } from "@next/env";
import csvToJson from "convert-csv-to-json";
import ky from "ky";

loadEnvConfig(process.cwd());
const tmdbApiKey = process.env.TMDB_KEY;
const tmdbApiBase = "https://api.themoviedb.org/3/search/movie?query=";
const tmdbApiParam = `&api_key=${tmdbApiKey}`;
const numOfFilms = 6;

const watchlistPath =
	"/Users/adamjnavarro/Downloads/letterboxd-data/watched.csv";
const allFilms = csvToJson.fieldDelimiter(",").getJsonFromCsv(watchlistPath);
const selectedFilms = allFilms.slice(-numOfFilms).reverse();

async function genLetterboxdData() {
	const finalFilms: any[] = [];

	for await (const film of selectedFilms) {
		const nameParam = film.Name.toLowerCase().replaceAll(" ", "+");
		const url = `${tmdbApiBase}${nameParam}&year=${film.Year}${tmdbApiParam}`;
		const data: any = await ky.get(url, {}).json();
		if (data.results) {
			finalFilms.push({
				name: film.Name,
				dateAdded: film.Date,
				year: film.Year,
				url: film.LetterboxdURI,
				posterPath: data.results[0].poster_path,
			});
		}
	}

	const updatedData = JSON.stringify(
		{ updatedAt: new Date(), watched: finalFilms },
		null,
		2,
	);

	await fs.writeFile(
		"./src/app/data/letterboxd/data.json",
		updatedData,
		"utf-8",
	);
}

genLetterboxdData();
