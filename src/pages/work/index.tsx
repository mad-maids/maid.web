import { FunctionComponent } from "react";
import { motion } from "framer-motion";

import WorkListing from "../../components/WorkListing";
import SEO from "../../components/SEO";
import { getAllWorks } from "../../lib/works";
import { Works } from "../../models";
import useCursor from "../../hooks/useCursor";

interface WorkPageProps {
	works: Works[];
}

const Index: FunctionComponent<WorkPageProps> = ({ works }) => {
	const { onCursor } = useCursor();

	return (
		<motion.div exit={{ opacity: 0 }}>
			<SEO title="Work" description="This is where my current work lives." />
			<WorkListing data={works} onCursor={onCursor} />;
		</motion.div>
	);
};

export default Index;

export async function getStaticProps(): Promise<{ props: { works: FrontMatter[] } }> {
	const allWorks = getAllWorks();
	const filteredWorks = allWorks
		.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))
		.filter((frontMatter) => frontMatter.published === true);

	return {
		props: {
			works: filteredWorks,
		},
	};
}
