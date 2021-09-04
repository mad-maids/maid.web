import fs from "fs";
import { join } from "path";

import matter from "gray-matter";

const worksDirectory = join(process.cwd(), "src", "pages", "works");

export const getWorkSlugs = (): string[] =>
	fs.readdirSync(worksDirectory).filter((slug) => !slug.startsWith("."));

export const getWorkBySlug = (slug, fields = []): any => {
	const pathToWork = join(worksDirectory, slug);
	const files = fs.readdirSync(pathToWork);
	const indexFile = files.find(
		(file) => file.substr(0, file.lastIndexOf(".")) === "index"
	);

	const fullPath = join(pathToWork, indexFile);
	const fileContents = fs.readFileSync(fullPath, "utf8");
	const { data /* content */ } = matter(fileContents);

	data.slug = slug;

	return data;
};

export const getAllWorks = (fields = []): any => {
	const slugs = getWorkSlugs();
	const works = slugs
		.map((slug) => getWorkBySlug(slug, fields))
		// sort works by date in descending order
		.sort((work1, work2) => (work1.date > work2.date ? -1 : 1));
	return works;
};
