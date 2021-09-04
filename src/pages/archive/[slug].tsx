import { useRouter } from "next/router";
import { FunctionComponent } from "react";

import SEO from "../../components/SEO";
import BlogArchiveList from "../../components/Blog/ArchiveList";
import siteConfig from "../../../site.config";
import { getAllPosts } from "../../lib/posts";
import { Posts } from "../../models";
import useCursor from "../../hooks/useCursor";

interface BlogPageProps {
	posts: Posts[];
}

const BlogPage: FunctionComponent<BlogPageProps> = ({ posts }) => {
	const { query } = useRouter();
	const { onCursor } = useCursor();

	return (
		<>
			<SEO title="Archive" description="Just a list of all blog posts." />
			<BlogArchiveList page={query.slug} data={posts} onCursor={onCursor} />
		</>
	);
};

export async function getStaticProps(): Promise<{ props: { posts: FrontMatter[] } }> {
	const allPosts = getAllPosts();
	const filteredPosts = allPosts
		.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))
		.filter((frontMatter) => frontMatter.published === true);

	return {
		props: {
			posts: filteredPosts,
		},
	};
}

export default BlogPage;

export async function getStaticPaths(): Promise<{ paths: string[]; fallback: boolean }> {
	const allPosts = getAllPosts();
	const { pageData } = siteConfig;
	const filteredPosts = allPosts
		.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))
		.filter((frontMatter) => frontMatter.published === true);

	const totalResults = filteredPosts.length;
	const itemsPerPage = pageData.postsPerPage;

	const pageCount = Math.ceil(totalResults / itemsPerPage);

	const paths = Array.from(Array(pageCount)).map((_, index) => `/archive/${index + 1}`);
	return {
		paths,
		fallback: false,
	};
}
