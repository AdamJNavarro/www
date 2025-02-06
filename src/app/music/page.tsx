import routes from "~/app/config/routes";
import { DataAttribution } from "~/components/common/Attribution";
import SpotifyContent from "./spotify";

export const { metadata } = routes.music;

export default async function MusicPage() {
	return (
		<div>
			<h1 className="page-h1 text-lgeft tablet:text-center">Music</h1>

			<SpotifyContent />
			<div className="mt-24">
				<DataAttribution sources={["spotify"]} />
			</div>
		</div>
	);
}
