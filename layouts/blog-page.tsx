import styled from "@emotion/styled";
import { format, parseISO } from "date-fns";
import { motion } from "framer-motion";
import { FunctionComponent } from "react";

import PostHead from "../src/components/PostHeader";
import SEO from "../src/components/SEO";
// import PostFooter from "../src/components/PostFooter";
import Back from "../src/components/Back";
import Footer from "../src/components/Footer";

interface Props {
	frontMatter: any;
	allPosts: any;
}

const BlogTemplate: FunctionComponent<Props> = ({ children, frontMatter }) => {
	const { title, slug, readingTime, date, image, desc } = frontMatter;

	const buildUrl = (url, obj): string => {
		const query = Object.entries(obj)
			.map((pair) => pair.map(encodeURIComponent).join("="))
			.join("&");

		return `${url}${query}`;
	};

	const ogImageUrl = buildUrl("https://og-serverless-git-master.darkristy.vercel.app/og.jpg?", {
		author: "Mad Maids",
		website: "maid.uz",
		title,
		image: "https://genemator.uz/gifs/cm.gif",
		handle: "@genemator",
	});

	console.log(ogImageUrl);

	return (
		<motion.article exit={{ opacity: 0 }}>
			<SEO title={title} description={desc} />
			<PostHead
				image={image}
				date={format(parseISO(date), "MMMM dd, yyyy")}
				readtime={readingTime.text}
				title={title}
				slug={slug}
			/>
			<BlogContentContainer>
				{children}
				{/* <PostFooter slug={slug} /> */}
				<Back label="Back To Posts" />
			</BlogContentContainer>

			<Footer />
		</motion.article>
	);
};

export default BlogTemplate;

const BlogContentContainer = styled.div`
	margin-top: 60px;
	max-width: 1280px;
	padding: 0 10%;
	margin: 0 auto;
	line-height: 40px;
`;
