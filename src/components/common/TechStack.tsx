import { getLogoPath } from "~/utils";
import ThemeImage from "./ThemeImage";

export function TechStackGrid({ children }: any) {
	return (
		<div className="grid grid-cols-[repeat(auto-fit,80px)] gap-12 tablet:gap-16">
			{children}
		</div>
	);
}

export function StackItem({ href, name, hasThemeLogos = false }: any) {
	return (
		<a
			key={name}
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			className="w-20 text-surface-secondary text-center font-medium text-sm space-y-2.5 line-clamp-2 tracking-tight hover:text-black dark:hover:text-white"
		>
			<ThemeImage
				srcDark={getLogoPath(name, hasThemeLogos ? "dark" : undefined)}
				srcLight={getLogoPath(name, hasThemeLogos ? "light" : undefined)}
				width={80}
				height={80}
				alt={`${name} tech stack icon`}
				className="h-12 w-12 mx-auto"
			/>
			<div>{name}</div>
		</a>
	);
}
