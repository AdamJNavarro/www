import {
	allServiceStack,
	entireStack,
	frameworkStack,
	languageStack,
	serviceStack,
	toolStack,
} from "~/app/data/stack";
import type {
	Resume,
	ResumeContact,
	ResumeExperience,
	ResumeProject,
} from "./resume.types";

const personalWebsiteURL = "https://adamjnavarro.com/";

const resumeName = "Adam Navarro";
const resumeSlogan = "Full Stack Developer";

const resumeObjective =
	"A position with a company that can offer some level of mentorship to help me grow.  As well, in-person time is extremely desirable. Some company characteristics that are important to me include a higher degree of team/co-worker interaction, effective and empathetic communication and efficient workflows.";

const resumeContacts: ResumeContact[] = [
	{
		label: "(414) 640-6400",
	},
	{
		label: "adamjnav@gmail.com",
		href: "mailto:adamjnav@gmail.com",
	},
	{
		label: "Milwaukee, WI",
	},
];

const softSkills = [
	"Empathy",
	"Open-mindedness",
	"Communication",
	"Collaboration",
	"Accountability",
	"Resourcefulness",
	"Adaptability",
	"Problem Solving",
	"Critical Thinking",
	"Approachability",
];

const conceptualSkills = [
	"CI/CD",
	"Data Structures",
	"Relational Databases",
	"API",
	"REST",
	"CRUD",
	"SOLID",
	"UI",
	"Unit Testing",
	"Responsive Design",
	"Object-Oriented Programming",
	"MVC",
];

const volunteerExperiences: ResumeExperience[] = [
	{
		company: "Holistic Health & Hospice",
		role: "Patient Visitor",
		start: "January 2025",
		end: "Present",
		details: [
			"Travel to facilities to spend time with hospice patients where I will play guitar or piano, play games or simply spend time having conversation.",
		],
	},
];

const resumeExperiences: ResumeExperience[] = [
	{
		company: "Freelance and Personal",
		role: "Developer",
		start: "December 2023",
		end: "Present",
		details: [
			"Learned C#, ASP.NET Core, Entity Framework and the Microsoft stack which empowered me to build and deploy my Cog Log project.",
			`Built and deployed Linkli - a CLI that automatically detects a codebase's tech stack and allow users to open documentation without leaving the terminal.`,
			`Audited Stella Mahaga's website (marlamhs.com) and performed configuration improvements that lead to a decrease in storage and service costs, an increase in potential patient inquiries and stronger site security. Implemented a re-design to improve readibility and information consumption for a better user experience.`,
		],
	},
	{
		company: "Expo",
		href: "/",
		role: "Developer / Technical Relations Manager",
		start: "February 2018",
		end: "June 2022",
		details: [
			"Created and maintained code examples, sample applications to increase user knowledge and adoption.",
			"Maintained and made continuous improvements to Expo documentation with a focus on user experience and information consumption.",
			"Contributed quality-of-life improvements to the Expo command line interface.",
			"Developed and iterated Expo support systems and flows using platforms such as Github, Slack, Discourse and Canny.",
			"Identified, designated and empowered resourceful and engaged users which increased external contributions and reduced internal support burden and cost.",
			"Served as the direct contact and conduit for Expo partners, professionals and high-value users.",
		],
	},
];

const resumeProjects: ResumeProject[] = [
	{
		id: 1,
		name: "AdamJNavarro",
		href: personalWebsiteURL,
		repo: "https://github.com/AdamJNavarro/www#stack",
		summary:
			"My website built with Next.js that serves as both a place to get to know me and as a playground for me to develop and sharpen my coding skills. Uses APIs such as Spotify, Strava, GitHub, Trakt, TMDB to populate data.",
	},
	{
		id: 2,
		name: "Cog Log",
		href: "https://adamjnav-coglog.azurewebsites.net/",
		repo: "https://github.com/AdamJNavarro/coglog#stack",
		summary:
			"A personal cognitive log built with ASP.NET Core that reinforces learning and boosts information retention.",
	},
	{
		id: 3,
		name: "Pet Tracker",
		href: "https://navarro-pet-tracker.netlify.app/",
		repo: "https://github.com/AdamJNavarro/pet-tracker#stack",
		summary:
			"A dog tracking app built with Svelte that reduced redundant communication and improved pet health and care.",
	},
];

const resume: Resume = {
	name: resumeName,
	slogan: resumeSlogan,
	objective: resumeObjective,
	contacts: resumeContacts,
	tech: {
		title: "Tech Stack",
		stacks: {
			languages: {
				label: "Languages",
				items: languageStack,
			},
			tools: {
				label: "Tools",
				items: toolStack,
			},
			frameworks: {
				label: "Frameworks",
				items: frameworkStack,
			},
			services: {
				label: "Services",
				items: allServiceStack,
			},
		},
	},
	experience: {
		title: "Work Experience",
		items: resumeExperiences,
	},
	projects: {
		title: "Projects",
		items: resumeProjects,
	},
	skills: {
		title: "Skills",
		tech: [
			{
				label: "Languages",
				stack: languageStack,
			},
			{
				label: "Frameworks",
				stack: frameworkStack,
			},
			{
				label: "Services",
				stack: serviceStack,
			},
			{
				label: "Tools",
				stack: toolStack,
			},
		],
		concepts: conceptualSkills.sort((a, b) => a.localeCompare(b)).join(", "),
		soft: softSkills.sort((a, b) => a.localeCompare(b)).join(", "),
	},
	volunteering: {
		title: "Volunteering",
		items: volunteerExperiences,
	},
};

export { resume };
