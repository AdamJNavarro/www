import routes from "~/app/config/routes";

import { DataAttribution } from "~/components/common/Attribution";
import Trakt from "./trakt";

export const { metadata } = routes.tv;

export default async function TvPage() {
	return (
		<div>
			<h1 className="page-h1 text-center">Television</h1>

			<Trakt />
			<div className="mt-24">
				<DataAttribution sources={["trakt"]} />
			</div>
		</div>
	);
}
