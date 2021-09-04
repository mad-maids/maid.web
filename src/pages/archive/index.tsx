import { FunctionComponent } from "react";
import { motion } from "framer-motion";

import BlogArchiveList from "../../components/Blog/ArchiveList";
import SEO from "../../components/SEO";
import { getAllPosts } from "../../lib/posts";
import { Posts } from "../../models";
import useCursor from "../../hooks/useCursor";

interface Props {
  posts: Posts[];
}

const Index: FunctionComponent<Props> = ({ posts }) => {
  const { onCursor } = useCursor();

  return (
    <motion.div exit={{ opacity: 0 }}>
      <SEO title="Archive" description="Just a list of all blog posts." />
      <BlogArchiveList data={posts} onCursor={onCursor} />
    </motion.div>
  );
};

export default Index;

export async function getStaticProps(): Promise<{
  props: { posts: FrontMatter[] };
}> {
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
