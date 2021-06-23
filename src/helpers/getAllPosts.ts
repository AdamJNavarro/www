import fs from "fs";
import matter from "gray-matter";
import path from "path";

const contentDirectory = path.join(process.cwd(), "./src/data/posts");

export default function getAllPosts() {
  const allPosts = fs.readdirSync(contentDirectory);

  return allPosts.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const fileContents = fs.readFileSync(
      path.join(contentDirectory, fileName),
      "utf8"
    );
    const { data, content } = matter(fileContents);

    return {
      content,
      data,
      slug,
    };
  });
}
