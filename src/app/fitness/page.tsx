import { Suspense } from "react";
import { DataAttribution } from "~/components/common/Attribution";
import routes from "../config/routes";
import { StravaHeatmap } from "./StravaHeatmap";

export const { metadata } = routes.fitness;

export default async function FitnessPage() {
	return (
		<div>
			<h1 className="page-h1 text-center">Fitness</h1>

			<div className="prose mb-24">
				<p>
					For as long as I can remember, fitness has been a major part of my
					life. Growing up I played baseball, basketball, football and most of
					my free time was spent either playing neighborhood games (think Kick
					the Can, Ghost in the Graveyard, etc.) or jumping on a trampoline.
					When I got to highschool, I became enamored with the weight room and
					shortly thereafter found my way onto the wrestling team. Four years of
					wrestling and the accompanying team gym sessions instilled a love for
					lifting weights that has been going strong for a decade plus.
				</p>
			</div>
			<StravaHeatmap.Container>
				<Suspense fallback={<StravaHeatmap.Loading />}>
					<StravaHeatmap.Tiles />
				</Suspense>
			</StravaHeatmap.Container>
			<div className="mt-24">
				<DataAttribution sources={["strava"]} />
			</div>
		</div>
	);
}
