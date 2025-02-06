import fs from "node:fs";
import path from "node:path";

type Metadata = {
	title: string;
	publishedAt: string;
	summary: string;
	image?: string;
};

type ContentDir = (string & "prompts") | "blog";

function parseFrontmatter(fileContent: string) {
	const frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
	const match = frontmatterRegex.exec(fileContent);
	const metadata: Partial<Metadata> = {};
	const content = fileContent.replace(frontmatterRegex, "").trim();
	const frontMatterBlock = match?.[1];

	if (frontMatterBlock) {
		const frontMatterLines = frontMatterBlock.trim().split("\n");

		for (let i = 0; i < frontMatterLines.length; i++) {
			const line = frontMatterLines[i];
			const [key, ...valueArr] = line.split(": ");
			let value = valueArr.join(": ").trim();
			value = value.replace(/^['"](.*)['"]$/, "$1"); // Remove quotes
			metadata[key.trim() as keyof Metadata] = value;
		}
	}

	return { metadata: metadata as Metadata, content };
}

function getMDXFiles(dir) {
	return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function readMDXFile(filePath) {
	const rawContent = fs.readFileSync(filePath, "utf-8");
	return parseFrontmatter(rawContent);
}

function getMDXData(dir) {
	const mdxFiles = getMDXFiles(dir);
	return mdxFiles.map((file) => {
		const { metadata, content } = readMDXFile(path.join(dir, file));
		const slug = path.basename(file, path.extname(file));
		return {
			metadata,
			slug,
			content,
		};
	});
}

export function getMDXContent(dir: ContentDir) {
	return getMDXData(path.join(process.cwd(), `content/${dir}`));
}
