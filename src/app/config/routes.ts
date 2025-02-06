import {
	IconBooks,
	IconCode,
	IconDeviceTvOld,
	IconHeartbeat,
	IconHome2,
	IconMoodHappy,
	IconMovie,
	IconMusic,
	IconShoe,
	IconSocial,
	IconStack2,
	IconTypography,
	IconWriting,
} from "@tabler/icons-react";
import type { Metadata } from "next";

type RouteConfig = {
	[key: string]: {
		icon: any;
		label: string;
		href: string;
		metadata: Metadata;
	};
};

const routes: RouteConfig = {
	blog: {
		icon: IconWriting,
		label: "Blog",
		href: "/blog",
		metadata: {
			title: "My Blog",
			description: "A collection of my thoughts and musings.",
		},
	},
	books: {
		icon: IconBooks,
		label: "Books",
		href: "/books",
		metadata: {
			title: "Books",
			description: "A look into my literary world.",
		},
	},
	coding: {
		icon: IconCode,
		label: "Coding",
		href: "/coding",
		metadata: {
			title: "Coding",
			description: "All things coding-related.",
		},
	},
	dance: {
		icon: IconShoe,
		label: "Dance",
		href: "/dance",
		metadata: {
			title: "Dance",
			description: "Some of my dance performances.",
		},
	},
	fitness: {
		icon: IconHeartbeat,
		label: "Fitness",
		href: "/fitness",
		metadata: {
			title: "Fitness",
			description: "What I do to keep my body healthy.",
		},
	},
	home: {
		icon: IconHome2,
		label: "Home",
		href: "/",
		metadata: {
			description: "The home of everything Adam Navarro.",
		},
	},
	interests: {
		icon: IconMoodHappy,
		label: "Interests",
		href: "/#interests",
		metadata: {
			title: "Interests",
			description: "See what I enjoy in life.",
		},
	},
	movies: {
		icon: IconMovie,
		label: "Movies",
		href: "/movies",
		metadata: {
			title: "Movies",
			description: "A look into my cinematic tastes.",
		},
	},
	music: {
		icon: IconMusic,
		label: "Music",
		href: "/music",
		metadata: {
			title: "Music",
			description: "A peek into my taste in music and podcasts.",
		},
	},
	prompts: {
		icon: IconWriting,
		label: "Prompts",
		href: "/prompts",
		metadata: {
			title: "Some thought-provokers.",
			description: "A collection of things to get the mind working.",
		},
	},
	social: {
		icon: IconSocial,
		label: "Social",
		href: "/social",
		metadata: {
			title: "Social",
			description: "Where you can find me online.",
		},
	},
	tv: {
		icon: IconDeviceTvOld,
		label: "TV",
		href: "/tv",
		metadata: {
			title: "TV",
			description: "A look into my tastes in television.",
		},
	},
	uses: {
		icon: IconStack2,
		label: "Uses",
		href: "/uses",
		metadata: {
			title: "Uses",
			description: "A collection of products I use.",
		},
	},
	words: {
		icon: IconTypography,
		label: "Words",
		href: "/words",
		metadata: {
			title: "Words",
			description: "A collection of words I have learned.",
		},
	},
	resume: {
		icon: IconTypography,
		label: "Resume",
		href: "/resume",
		metadata: {
			title: "Resume",
			description: "Resume.",
		},
	},
};

export const navbarRoutes = [routes.home, routes.uses, routes.social];

export default routes;
