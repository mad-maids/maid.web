import { useEffect, FunctionComponent } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styled from "@emotion/styled";

import { media } from "../../styles/styles-utils";
import { header } from "../../animations/blog-latest-anim";
import { Posts } from "../../models";
import useCursor from "../../hooks/useCursor";

import LatestEntries from "./Entry";

interface LatestProps {
  latestPosts: Posts[];
}

const Latest: FunctionComponent<LatestProps> = ({ latestPosts }) => {
  const { onCursor } = useCursor();

  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
    rootMargin: "-200px",
  });

  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start("visible").then();
    }
  }, [inView, animation]);

  return (
    <div ref={ref}>
      <LastestHeading animate={animation} initial="hidden" variants={header}>
        <h2>Latest Blog Posts</h2>
        <h2>Latest Blog Posts</h2>
      </LastestHeading>

      <LatestWrapper>
        {latestPosts.slice(0, 4).map((frontMatter, index) => {
          const { title, date, slug, desc } = frontMatter;
          return (
            <LatestEntries
              key={index}
              slug={slug}
              title={title}
              date={date}
              onCursor={onCursor}
              desc={desc}
            />
          );
        })}
      </LatestWrapper>
    </div>
  );
};

export default Latest;

const LastestHeading = styled(motion.div)`
  padding-top: 100px;
  padding-bottom: 80px;
  h2 {
    padding: 0 15%;
    font-size: 64px;
    transition: ease 0.4s;
    text-transform: uppercase;
    ${media.tablet`font-size: 56px; `}

    &:nth-child(2) {
      margin-top: -62px;
      ${media.tablet` margin-top: -48px; `}
      -webkit-text-fill-color: transparent;
      -webkit-text-stroke-width: 0.6px;
      -webkit-text-stroke-color: ${(props): string => props.theme.tietary};
    }
  }
`;

const LatestWrapper = styled.div`
  padding: 50px 14%;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-auto-rows: 248px;
  width: 100%;
  grid-row-gap: 121px;
  grid-column-gap: 80px;
  ${media.bigDesktop` grid-column-gap: 80px;`}
  ${media.tablet` grid-column-gap: 0px;`}
`;
