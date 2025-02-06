import routes from "../config/routes";

import SocialStack from "./SocialStack";

export const { metadata } = routes.social;

export default async function SocialPage() {
	return (
		<div>
			<h1 className="page-h1 text-center tablet:text-lgeft">Social Presence</h1>

			<div className="mb-24">
				<SocialStack />
			</div>
		</div>
	);
}
