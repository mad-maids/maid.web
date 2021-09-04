import React, { useEffect, FunctionComponent } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import Image from "next/image";
import styled from "@emotion/styled";

import { media } from "../../styles/styles-utils";

interface FeaturedProps {
  featuredPost: Record<string, any>;
}

interface FeaturedBlogButtonProps {
  path: string;
}

const FeaturedBlogButton: FunctionComponent<FeaturedBlogButtonProps> = ({
  path,
}) => (
  <Link href={path} scroll={false}>
    <a>
      <FeaturedButton>
        <p>View Article</p>
      </FeaturedButton>
    </a>
  </Link>
);

const Featured: FunctionComponent<FeaturedProps> = ({ featuredPost }) => {
  const pathPrefix = `/blog/`;

  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start("visible");
    }
  }, [inView, animation]);

  return (
    <FeaturedWrapper ref={ref}>
      {featuredPost.map((featured: any, i: number) => {
        const { image, title, slug } = featured;
        const featuredImage = `/assets/blog/${image}`;
        return (
          <FeaturedEntry key={i}>
            <FeaturedContent>
              <p>Featured</p>
              <FeaturedDataWrapper>
                <FeaturedTitle>{title}</FeaturedTitle>
                <FeaturedBlogButton path={`${pathPrefix}${slug}`}>
                  <p>View Story</p>
                </FeaturedBlogButton>
              </FeaturedDataWrapper>
            </FeaturedContent>
            <FeaturedImage>
              <Image src={featuredImage} unsized />
            </FeaturedImage>
          </FeaturedEntry>
        );
      })}
    </FeaturedWrapper>
  );
};

export default Featured;

const FeaturedWrapper = styled(motion.div)`
  padding: 80px 0;
  ${media.thone`padding: 100px 0px;`}
`;
const FeaturedEntry = styled.div`
  padding: 0 14%;
  margin: 0 0 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: "overlap";
`;

const FeaturedImage = styled(motion.div)`
  overflow: hidden;
  height: 580px;
  width: 100%;
  img {
    display: block;
    width: 100%;
    height: 580px;
    object-fit: cover;
    filter: brightness(60%);
  }
  grid-area: overlap;
  z-index: -1;
  position: relative;
`;
const FeaturedContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-area: overlap;
  align-items: start;
  padding: 0 4%;
  min-height: 600px;
  margin-top: 120px;
`;

const FeaturedButton = styled(motion.button)`
  width: 185px;
  height: 39px;
  background: ${(props): string => props.theme.tietary};
  margin-top: 160px;
  p {
    font-size: 14px;
    color: ${(props): string => props.theme.primary};
    text-transform: uppercase;
  }
  transition: all 0.4s ease;
  &:hover {
    transition: all 0.4s ease;
    filter: brightness(0.8);
  }
`;

const FeaturedTitle = styled.h1`
  margin-top: 20px;
  max-width: 760px;
  font-size: calc(2.125rem + ((1.2vw - 6.76px) * 2.4116));
  line-height: initial;
  color: ${(props): string => props.theme.tietary};
  text-transform: uppercase;
`;

const FeaturedDataWrapper = styled.div`
  font-family: Inconsolata, monospace;
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

// const FeaturedDate = styled.div`
// 	display: flex;
// 	align-items: center;
// 	margin-right: 20px;
// 	color: white;
// `;

// const FeaturedViews = styled.div`
// 	display: flex;
// 	color: ${(props): string => props.theme.tietary};
// 	align-items: center;
// `;
