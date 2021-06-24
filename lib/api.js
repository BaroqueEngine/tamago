import fs from "fs";
import { join } from "path";

const postsDirectory = join(process.cwd(), "_posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug) {
  const realSlug = slug.replace(/\.json$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.json`);
  let json = JSON.parse(fs.readFileSync(fullPath, "utf8"));
  json.slug = realSlug;

  return json;
}

export function getAllPosts() {
  const slugs = getPostSlugs();
  const posts = slugs.map((slug) => getPostBySlug(slug));
  posts.sort((post1, post2) => -post1.weight - -post2.weight);
  return posts;
}
