import { Suspense } from "react";
import { auth } from "~/app/auth";
import routes from "~/app/config/routes";
import { getPaginatedWords } from "~/app/data/db/queries";
import { LoadingSpinner } from "~/components/common/pure-html";
import WordForm from "./WordForm";
import WordsList from "./WordsList";

export const { metadata } = routes.words;

export default async function WordsPage() {
	return (
		<div>
			<h1 className="page-h1 text-center">Words</h1>

			{/* An ever-growing list of words I encountered and did not know. I began
          logging mid-2018. */}

			<Suspense fallback={<LoadingSpinner />}>
				<WordBank />
			</Suspense>
		</div>
	);
}

async function WordBank() {
	const session = await auth();
	const { data, error } = await getPaginatedWords({ offset: 0, limit: 20 });

	if (error) return null;

	return (
		<div>
			{session && session?.user?.email === "adamjnav@gmail.com" && (
				<div className="my-24">
					<WordForm />
				</div>
			)}
			<WordsList initialWords={data} />
		</div>
	);
}
