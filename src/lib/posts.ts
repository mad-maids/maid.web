import fs from "fs";
import { join } from "path";

import matter from "gray-matter";

const postsDirectory = join(process.cwd(), "src", "pages", "blog");

export const getPostSlugs = (): string[] => fs.readdirSync(postsDirectory).filter((slug) => !slug.startsWith("."));

export const getPostBySlug = (slug, fields = []): any => {
	const pathToPost = join(postsDirectory, slug);
	const files = fs.readdirSync(pathToPost);
	const indexFile = files.find((file) => file.substr(0, file.lastIndexOf(".")) === "index");

	const fullPath = join(pathToPost, indexFile);
	const fileContents = fs.readFileSync(fullPath, "utf8");
	const { data /* content */ } = matter(fileContents);

	data.slug = slug;

	return data;
};

export const getAllPosts = (fields = []): any => {
	const slugs = getPostSlugs();
	const posts = slugs
		.map((slug) => getPostBySlug(slug, fields))
		// sort posts by date in descending order
		.sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
	return posts;
};
