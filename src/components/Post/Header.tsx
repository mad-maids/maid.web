import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faBook } from "@fortawesome/free-solid-svg-icons";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { FunctionComponent } from "react";
import Image from "next/image";

import { media } from "../../styles/styles-utils";


interface PostHeadProps {
  image: string;
  readtime: string;
  date: string;
  title: string;
  slug: string;
}

const theStyle = {
  marginRight: "10px",
};

const PostHead: FunctionComponent<PostHeadProps> = ({
  image,
  readtime,
  date,
  title,
  slug,
}) => {
  const headerImage = `/assets/blog/${image}`;
  return (
    <PostHeader>
      <PostHeadWrapper>
        <PostTitle>{title}</PostTitle>
        <PostDataWrapper>
          <PostDate>
            <FontAwesomeIcon icon={faClock} style={theStyle} />
            {date}
          </PostDate>
          <PostReadTime>
            <FontAwesomeIcon icon={faBook} style={theStyle} />
            {readtime}
          </PostReadTime>
        </PostDataWrapper>
      </PostHeadWrapper>
      <PostHero>
        <Image src={headerImage} unsized />
      </PostHero>
    </PostHeader>
  );
};
export default PostHead;

const PostTitle = styled.h1`
  margin-top: 20px;
  max-width: 890px;
  margin-bottom: 20px;

  font-size: calc(2.125rem + ((1.4vw - 6.76px) * 2.4116));

  color: white;

  @media screen and (max-width: 767px) {
    margin-bottom: 40px;
  }
  text-transform: uppercase;
`;
const PostHeader = styled(motion.div)`
  padding: 0 14%;
  margin-top: 100px;
  margin: 100px 0 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: "overlap";
  ${media.bigDesktop`padding: 0`}
`;
const PostHero = styled.div`
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
const PostHeadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-area: overlap;
  align-items: start;
  padding: 0 10%;
  min-height: 600px;
  margin-top: 120px;
`;
const PostDataWrapper = styled.div`
  margin-bottom: 100px;
  font-family: Inconsolata, monospace;
  font-size: 16px;
  display: flex;
`;
const PostDate = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
  color: white;
`;
const PostReadTime = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
  color: white;
`;
