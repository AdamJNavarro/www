import fs from "fs"
import matter from "gray-matter"
import path from "path"

const contentDirectory = path.join(process.cwd(), "./src/data/projects")

export default function getAllProjects() {
  const allProjects = fs.readdirSync(contentDirectory)

  return allProjects.map((fileName) => {
    const slug = fileName.replace(".md", "")
    const fileContents = fs.readFileSync(
      path.join(contentDirectory, fileName),
      "utf8"
    )
    const { data, content } = matter(fileContents)

    return {
      data,
      content,
      slug,
    }
  })
}
