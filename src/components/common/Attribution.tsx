import Image from "next/image";
import ThemeImage from "./ThemeImage";

type DataSources = "trakt" | "letterboxd" | "spotify" | "strava";

type DataAttributionProps = {
	label?: string;
	sources: DataSources[];
};

export function DataAttribution({
	label = "Data provided by",
	sources,
}: DataAttributionProps) {
	return (
		<div className="flex items-center">
			<div className="flex flex-col text-center mx-auto py-3">
				<div className="text-sm font-medium text-surface-secondary mb-3">
					{label}
				</div>
				<div className="flex space-x-3">
					{sources.includes("letterboxd") && (
						<a
							href="https://letterboxd.com/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<ThemeImage
								srcDark="/img/logos/letterboxd-attr-dark.svg"
								srcLight="/img/logos/letterboxd-attr-light.svg"
								width={500}
								height={110}
								alt={"letterboxd brand icon"}
								className="h-6 w-24"
							/>
						</a>
					)}
					{sources.includes("trakt") && (
						<a
							href="https://trakt.tv/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<ThemeImage
								srcDark="/img/logos/trakt-attr-dark.svg"
								srcLight="/img/logos/trakt-attr-light.svg"
								width={288}
								height={98}
								alt={"trakt brand icon"}
								className="h-6 w-24"
							/>
						</a>
					)}
					{sources.includes("spotify") && (
						<a
							href="https://open.spotify.com/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Image
								src="/img/logos/spotify-attr.png"
								width={2362}
								height={709}
								alt={"spotify brand icon"}
								className="h-6 w-24"
							/>
						</a>
					)}
					{sources.includes("strava") && (
						<a
							href="https://www.strava.com/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Image
								src="/img/logos/strava-attr.svg"
								width={432}
								height={91}
								alt={"spotify brand icon"}
								className="h-6 w-24 ml-2"
							/>
						</a>
					)}
				</div>
			</div>
		</div>
	);
}
