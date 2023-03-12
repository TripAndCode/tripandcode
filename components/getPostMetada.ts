import fs from "fs";
import matter from "gray-matter";
// import { PostMetadata } from "../components/PostMetadata";


const getPostMetadata = () => {
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  // Get gray-matter data from each file.
  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`posts/${fileName}`, "utf8");
    const matterResult = matter(fileContents);
    const draft = matterResult.data.draft
    if (!draft) {
      return {
        title: matterResult.data.title,
        date: matterResult.data.date,
        subtitle: matterResult.data.subtitle,
        tags: matterResult.data.tags,
        slug: fileName.replace(".md", ""),
      };
    }
  }).filter(function (element) {
    return element !== undefined;
  });

  return posts

};

export default getPostMetadata
