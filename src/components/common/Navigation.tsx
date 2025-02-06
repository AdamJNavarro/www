import Link from "next/link";

type NavigationTileProps = {
	href: string;
	icon: any;
	label: string;
};

function Tile(props: NavigationTileProps) {
	return (
		<Link
			href={props.href}
			className="rounded-md h-14 bg-surface hover-surface shadow-surface flex items-center"
		>
			<props.icon className="text-violet-500 dark:text-sky-200 h-6 w-6 mx-4" />

			<div className="flex grow">
				<div className="text-surface-primary text-md font-medium">
					{props.label}
				</div>
			</div>
		</Link>
	);
}

const Navigation = {
	Tile,
};

export default Navigation;
