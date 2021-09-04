import React, { FunctionComponent } from "react";
import { motion } from "framer-motion";
import useDimensions from "react-cool-dimensions";
import Image from "next/image";
import styled from "@emotion/styled";

import { media } from "../../styles/styles-utils";

interface IntroProps {
  image: string;
  title: string;
  desc: string;
  role: string;
  categories: string[];
  date: string;
}

const Intro: FunctionComponent<IntroProps> = ({
  image,
  title,
  desc,
  date,
  role,
  categories,
}) => {
  const introImage = `/assets/work/${image}`;

  const { ref, width }: any = useDimensions();
  const imageWidth = width;

  return (
    <IntroContainer ref={ref}>
      <IntroImage>
        <div style={{ width: imageWidth }}>
          <Image src={introImage} unsized />
        </div>
      </IntroImage>

      <Content>
        <IntroTitle>
          <h1>{title}</h1>
          <h1>{title}</h1>
        </IntroTitle>
        <IntroInfoBox>
          <IntroProjectInfo>
            <h1>Project Info</h1>
            <p>{date}</p>
            {categories.map((category) => (
              <div key={category}>
                <p>{category}</p>
              </div>
            ))}
            <p>{role}</p>
          </IntroProjectInfo>
          <IntroDescription>
            <p>{desc}</p>
          </IntroDescription>
        </IntroInfoBox>
      </Content>
    </IntroContainer>
  );
};

export default Intro;

const IntroContainer = styled.div`
  padding: 0 14%;
  p {
    font-size: 18px;
    line-height: 32px;
    font-weight: 300;
    text-transform: initial;
    @media screen and (max-width: 767px) {
      font-size: 16px;
    }
  }
  margin-bottom: 248px;
  ${media.desktop` margin-bottom: 124px;`}
`;

const IntroInfoBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-auto-rows: auto;
  h1 {
    font-size: 24px;
    text-transform: uppercase;
    padding-bottom: 10px;
  }

  p {
    ${media.desktop`font-size: 12px;`}
  }
  ${media.desktop` grid-template-columns: 1fr; padding: 0 ;`}
`;
const IntroProjectInfo = styled.div`
  p {
    font-size: 14px;
    text-transform: uppercase;
  }
`;
const IntroDescription = styled.div`
  ${media.desktop`padding-top: 48px;`}
`;
const IntroImage = styled(motion.div)`
  margin-top: 80px;
  overflow: hidden;
  ${media.thone`
    height:320px;`}

  img {
    width: 100%;
  }
`;
const Content = styled.div`
  margin-top: 140px;
  padding: 0 10%;
  ${media.bigDesktop`padding: 0 10%;`}
  ${media.thone`margin-top: 84px;`}
`;

const IntroTitle = styled.div`
  padding: 120px 0 180px;
  grid-column: 2 / span 12;
  ${media.tablet`grid-column: 2 / span 6;`}
  ${media.thone`
    font-size: 42px; padding: 80px 0 100px;`}
h1 {
    font-size: 96px;
    width: 100%;
    max-width: 800px;
    /* ${media.bigDesktop`
    font-size: 64px;`} */
    ${media.tablet`
    font-size: 64px;`}
    ${media.thone`
    font-size: 42px; `}
    ${media.phone`
    font-size: 32px;`}
    text-transform: uppercase;
    &:nth-child(2) {
      margin-top: -210px;

      ${media.tablet` margin-top: -142px; `}
      ${media.thone` margin-top: -90px; `}
      ${media.phone` margin-top: -68px; `}
      /* ${media.phone` display:none; `} */
      -webkit-text-fill-color: transparent;
      -webkit-text-stroke-width: 1px;
      -webkit-text-stroke-color: ${({ theme }): string => theme.tietary};
    }
    transition: ease 0.4s;
  }
`;
