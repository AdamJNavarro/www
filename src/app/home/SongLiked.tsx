import Dashboard from "./Dashboard";

export default function SongLiked({ data }) {
	const song = data[0];
	return (
		<Dashboard.Card
			label="Song Liked"
			href={song.url}
			darkLogo="/img/logos/spotify.svg"
			lightLogo="/img/logos/spotify.svg"
		>
			<Dashboard.Title>{song.name}</Dashboard.Title>
			<Dashboard.Details>{song.artist}</Dashboard.Details>
		</Dashboard.Card>
	);
}
