interface FrontMatter {
	layout?: string;
	title: string;
	slug: string;
	date: string;
	published: boolean;
	image: string;
	seoTitle: string;
	seoDesc: string;
	seoImage: string;
	categories: string[];
	seoKeywords: string[];
	desc: string;
	role?: string;

	__resourcePath: string;
}

declare module "*.mdx" {
	const MDXComponent: (props: any) => JSX.Element;
	export default MDXComponent;
	export const frontMatter: FrontMatter[];
}
