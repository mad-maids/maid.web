/* eslint-disable import/no-unresolved, import/extensions */
import Link from "next/link";
import { FunctionComponent } from "react";
import { motion } from "framer-motion";

import Latest from "../components/Blog/Latest";
import SEO from "../components/SEO";
import Footer from "../components/Footer";
import Featured from "../components/Blog/Featured";
import CTA, { CTAButton } from "../shared/CTA";
import { getAllPosts } from "../lib/posts";
import { Posts } from "../models";
import useCursor from "../hooks/useCursor";

interface BlogProps {
  allPosts: Posts[];
}

const Blog: FunctionComponent<BlogProps> = ({ allPosts }) => {
  const path = `/archive`;

  const { onCursor } = useCursor();

  const filters = {
    published: (frontMatter): boolean => frontMatter.published === true,
    featured: (frontMatter): boolean => frontMatter.featured === true,
    latest: (frontMatter): boolean => frontMatter.featured !== true,
  };

  const { published, latest, featured } = filters;

  const filteredPosts = allPosts
    .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))
    .filter(published);

  const featuredPost = filteredPosts.filter(featured);
  const latestPosts = filteredPosts.filter(latest);

  const copyText = `If you like what I am putting out I encourage you to view more,
  either on the site or my social media below.`;

  const headingText = "Creating Content Daily is a must";

  const body = (
    <Link href={path} passHref scroll={false}>
      <a>
        <CTAButton
          onMouseEnter={(): void => onCursor("pointer")}
          onMouseLeave={(): void => onCursor()}
        >
          <p>view more</p>
        </CTAButton>
      </a>
    </Link>
  );

  return (
    <motion.div exit={{ opacity: 0 }}>
      <SEO
        title="Blog"
        description="This is where my blog lives, enjoy your stay."
      />
      <Featured featuredPost={featuredPost} />
      <Latest latestPosts={latestPosts} />
      <CTA copyText={copyText} body={body} headingText={headingText} />

      <Footer />
    </motion.div>
  );
};

export default Blog;

export async function getStaticProps(): Promise<{
  props: { allPosts: { [key: string]: any }[] };
}> {
  const allPosts = getAllPosts();

  return {
    props: { allPosts },
  };
}
