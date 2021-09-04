import { useRouter } from "next/router";
import { FunctionComponent } from "react";
import { motion } from "framer-motion";

import WorkListing from "../../components/Work/Listing";
import siteConfig from "../../../site.config";
import { getAllWorks } from "../../lib/works";
import { Works } from "../../models";
import useCursor from "../../hooks/useCursor";

interface WorkPageProps {
  works: Works[];
}

const WorkPage: FunctionComponent<WorkPageProps> = ({ works }) => {
  const { query } = useRouter();

  const { onCursor } = useCursor();

  return (
    <motion.div exit={{ opacity: 0 }}>
      <WorkListing page={query.slug} data={works} onCursor={onCursor} />
    </motion.div>
  );
};

export async function getStaticProps(): Promise<{
  props: { works: FrontMatter[] };
}> {
  const allWorks = getAllWorks();
  const filteredWorks = allWorks.filter(
    (frontMatter) => frontMatter.published === true
  );

  return {
    props: {
      works: filteredWorks,
    },
  };
}

export default WorkPage;

export async function getStaticPaths(): Promise<{
  paths: string[];
  fallback: boolean;
}> {
  const allWorks = getAllWorks();
  const { pageData } = siteConfig;
  const filteredWorks = allWorks.filter(
    (frontMatter) => frontMatter.published === true
  );

  const totalResults = filteredWorks.length;
  const itemsPerPage = pageData.worksPerPage;

  const pageCount = Math.ceil(totalResults / itemsPerPage);

  const paths = Array.from(Array(pageCount)).map(
    (_, index) => `/work/${index + 1}`
  );
  return {
    paths,
    fallback: false,
  };
}
