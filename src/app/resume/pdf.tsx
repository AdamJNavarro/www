import {
	Document,
	Font,
	Link,
	Page,
	StyleSheet,
	Text,
	View,
} from "@react-pdf/renderer";
import type React from "react";
import { resume } from "./data";
import { combineSharedNamespaces } from "./utils";

const hyphenationCallback = (word: string) => {
	// don't hyphenate
	return [word];
};

const fontFamilies = {
	regular: "EB Garamond",
	medium: "EB Garamond Medium",
	semiBold: "EB Garamond Semibold",
	bold: "EB Garamond Bold",
};

Font.register({
	family: fontFamilies.regular,
	fontStyle: "normal",
	src: "https://fonts.gstatic.com/s/ebgaramond/v30/SlGDmQSNjdsmc35JDF1K5E55YMjF_7DPuGi-6_RUAw.ttf",
});

Font.register({
	family: fontFamilies.medium,
	fontStyle: "normal",
	src: "https://fonts.gstatic.com/s/ebgaramond/v30/SlGDmQSNjdsmc35JDF1K5E55YMjF_7DPuGi-2fRUAw.ttf",
});

Font.register({
	family: fontFamilies.semiBold,
	fontStyle: "normal",
	src: "https://fonts.gstatic.com/s/ebgaramond/v30/SlGDmQSNjdsmc35JDF1K5E55YMjF_7DPuGi-NfNUAw.ttf",
});

Font.register({
	family: fontFamilies.bold,
	fontStyle: "normal",
	src: "https://fonts.gstatic.com/s/ebgaramond/v30/SlGDmQSNjdsmc35JDF1K5E55YMjF_7DPuGi-DPNUAw.ttf",
});

Font.registerHyphenationCallback(hyphenationCallback);

const colors = {
	neutral: {
		primary: "#020617",
		secondary: "#1e293b",
		tertiary: "#475569",
	},
	accent: {
		primary: "#5b21b6",
		secondary: "#6d28d9",
	},
};

const fontSizes = {
	base: 12,
	md: 12.5,
	lg: 13,
	xl: 14,
};

const spacing = {
	px: "1px",
	1: "4px",
	2: "8px",
	3: "12px",
	4: "16px",
	5: "20px",
	6: "24px",
	8: "32px",
	9: "36px",
	12: "48px",
};

const styles = StyleSheet.create({
	page: {
		backgroundColor: "#fff",
		display: "flex",
		fontFamily: fontFamilies.regular,
		justifyContent: "flex-start",
		fontSize: fontSizes.base,
		color: colors.neutral.primary,
		padding: spacing[12], // maybe "1in"
		gap: spacing[5],
	},
	header: {
		display: "flex",
		flexDirection: "column",
	},
	headerTitle: {
		fontSize: 32,
		fontFamily: fontFamilies.semiBold,
		color: colors.neutral.primary,
		alignSelf: "center",
	},
	headerSubtitle: {
		fontSize: fontSizes.md,
		color: colors.neutral.secondary,
		alignSelf: "center",
	},
	headerContact: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-evenly",
		paddingTop: spacing[2],
		color: colors.neutral.secondary,
	},
	section: {
		display: "flex",
		flexDirection: "column",
	},
	sectionTitle: {
		fontSize: fontSizes.lg,
		fontFamily: fontFamilies.medium,
		color: colors.neutral.primary,
		textTransform: "uppercase",
	},
	sectionLine: {
		height: "0.5px",
		width: "100%",
		backgroundColor: colors.neutral.secondary,
	},
	sectionContent: {
		display: "flex",
		flexDirection: "column",
		paddingVertical: spacing[3],
	},
	sectionCategoryLabel: {
		fontSize: fontSizes.md,
		fontFamily: fontFamilies.semiBold,
		color: colors.neutral.secondary,
		paddingBottom: spacing[1],
	},
	sectionCategoryBody: {
		fontSize: fontSizes.base,
	},
	link: {
		textDecoration: "none",
		color: colors.accent.primary,
	},
});

export function ResumePdf() {
	const year = new Date().getFullYear();
	const { name, slogan, contacts } = resume;

	return (
		<Document author={name} title={`Résume for ${name}, ${year}`}>
			<Page size="LETTER" style={styles.page}>
				<View style={styles.header}>
					<Text style={styles.headerTitle}>{name}</Text>
					<Text style={styles.headerSubtitle}>{slogan}</Text>
					<View style={styles.headerContact}>
						{contacts.map((entry) => (
							<Text key={entry.label}>{entry.label}</Text>
						))}
					</View>
				</View>
				<Experiences />
				<Projects />
				<Skills />
				<Volunteering />
			</Page>
		</Document>
	);
}

function Section({
	title,
	contentSpacing = spacing[6],
	children,
}: {
	title: string;
	contentSpacing?: string;
	children: React.ReactNode;
}) {
	return (
		<View style={styles.section}>
			<Text style={styles.sectionTitle}>{title}</Text>
			<View style={styles.sectionLine} />
			<View style={[styles.sectionContent, { gap: contentSpacing }]}>
				{children}
			</View>
		</View>
	);
}

function Experiences() {
	const { title, items } = resume.experience;
	return (
		<Section title={title} contentSpacing={spacing[5]}>
			{items.map((item) => {
				const { company, href, role, start, end, details } = item;
				return (
					<View
						key={`${company}-${role}`}
						style={{
							display: "flex",
							flexDirection: "column",
							gap: spacing[2],
						}}
					>
						<View
							style={{
								display: "flex",
								flexDirection: "row",
								justifyContent: "space-between",
							}}
						>
							<View
								style={{
									display: "flex",
									flexDirection: "row",
									alignItems: "center",
									gap: spacing[2],
								}}
							>
								<Text
									style={{
										fontSize: fontSizes.lg,
										fontFamily: fontFamilies.medium,
									}}
								>
									{company}
								</Text>
								<Text
									style={{
										fontSize: fontSizes.md,
									}}
								>
									({role})
								</Text>
							</View>
							<Text
								style={{
									color: colors.neutral.tertiary,
								}}
							>
								{start} &mdash; {end}
							</Text>
						</View>

						<View
							style={{
								display: "flex",
								flexDirection: "column",
								gap: spacing[1],
							}}
						>
							{details.map((detail) => (
								<Text key={detail}>• &nbsp;{detail}</Text>
							))}
						</View>
					</View>
				);
			})}
		</Section>
	);
}

function Projects() {
	const { title, items } = resume.projects;

	return (
		<Section title={title} contentSpacing={spacing[3]}>
			{items.map((project) => {
				const { name, href, repo, summary } = project;
				return (
					<View
						key={name}
						style={{
							display: "flex",
							flexDirection: "column",
							gap: spacing[1],
						}}
					>
						<View
							style={{
								display: "flex",
								flexDirection: "row",
								alignItems: "center",
								gap: spacing[2],
							}}
						>
							<Link
								src={href}
								style={[
									styles.link,
									{
										fontSize: fontSizes.md,
										fontFamily: fontFamilies.medium,
									},
								]}
							>
								{name}
							</Link>
							<Text style={{ color: colors.neutral.tertiary }}>
								(
								<Link href={repo} style={{ color: colors.neutral.tertiary }}>
									repo
								</Link>
								)
							</Text>
						</View>
						<Text style={{ color: colors.neutral.primary }}>{summary}</Text>
					</View>
				);
			})}
		</Section>
	);
}

function Skills() {
	const { title, soft, concepts, tech } = resume.skills;

	return (
		<Section title={title} contentSpacing={spacing[2]}>
			{tech.map((entry) => {
				const activeItems = entry.stack.filter((item) => item.activelyUsing);
				const activeNames = combineSharedNamespaces(activeItems);

				return (
					<Text key={entry.label} style={{ fontFamily: fontFamilies.medium }}>
						{entry.label}:{"  "}
						<Text style={{ fontFamily: fontFamilies.regular }}>
							{activeNames}
						</Text>
					</Text>
				);
			})}

			<Text style={{ fontFamily: fontFamilies.medium }}>
				Concepts:{"  "}
				<Text style={{ fontFamily: fontFamilies.regular }}>{concepts}</Text>
			</Text>

			<Text style={{ fontFamily: fontFamilies.medium }}>
				Soft:{"  "}
				<Text style={{ fontFamily: fontFamilies.regular }}>{soft}</Text>
			</Text>
		</Section>
	);
}

function Volunteering() {
	const { title, items } = resume.volunteering;
	return (
		<Section title={title} contentSpacing={spacing[5]}>
			{items.map((item) => {
				const { company, href, role, start, end, details } = item;
				return (
					<View
						key={`${company}-${role}`}
						style={{
							display: "flex",
							flexDirection: "column",
							gap: spacing[2],
						}}
					>
						<View
							style={{
								display: "flex",
								flexDirection: "row",
								justifyContent: "space-between",
							}}
						>
							<View
								style={{
									display: "flex",
									flexDirection: "row",
									alignItems: "center",
									gap: spacing[2],
								}}
							>
								<Text
									style={{
										fontSize: fontSizes.lg,
										fontFamily: fontFamilies.medium,
									}}
								>
									{company}
								</Text>
								<Text
									style={{
										fontSize: fontSizes.md,
									}}
								>
									({role})
								</Text>
							</View>
							<Text
								style={{
									color: colors.neutral.tertiary,
								}}
							>
								{start} &mdash; {end}
							</Text>
						</View>

						<View
							style={{
								display: "flex",
								flexDirection: "column",
								gap: spacing[1],
							}}
						>
							{details.map((detail) => (
								<Text key={detail}>• &nbsp;{detail}</Text>
							))}
						</View>
					</View>
				);
			})}
		</Section>
	);
}
