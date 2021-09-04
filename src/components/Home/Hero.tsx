import { useRef, useEffect, useState, FunctionComponent } from "react";
import gsap, { Power3 } from "gsap";
import { motion } from "framer-motion";
import { keyframes } from "@emotion/react";
import Image from "next/image";
import styled from "@emotion/styled";

import { media } from "../../styles/styles-utils";

import ScrollForMore from "./ScrollIndicator";

const Hero: FunctionComponent = () => {
  const [t1] = useState(gsap.timeline({ delay: 0.2 }));
  const n = 15;

  const image = `/assets/misc/hero.png`;

  let imageStack = useRef(null);
  // let headlineFirst = useRef(null);
  // let headlineSecond = useRef(null);
  // let headlineThird = useRef(null);
  let container = useRef(null);
  let heroImage = useRef(null);

  useEffect(() => {
    gsap.set(container, { css: { visibility: "visible" } });

    t1.from(imageStack, 1.2, { y: 1280, ease: Power3.easeOut }, "+=1").from(
      heroImage,
      1,
      {
        scale: 1.6,
        ease: Power3.easeOut,
      },
      "-=1"
    );
    // .from(
    // 	[headlineFirst, headlineSecond, headlineThird],
    // 	0.6,
    // 	{
    // 		y: 280,
    // 		autoAlpha: 0,
    // 		ease: Power3.easeInOut,
    // 		stagger: {
    // 			amount: 0.25,
    // 		},
    // 	},
    // 	"-=.8"
    // );
  }, [t1, imageStack, container]);

  return (
    <>
      <Holder ref={(el: any): void => (container = el)}>
        <HeroContainer>
          <HeroImageWrapper>
            <HeroImg ref={(el: any): void => (imageStack = el)}>
              <HeroBox />
              <div
                ref={(el: any): void => (heroImage = el)}
                style={{
                  gridArea: "overlap",
                }}
              >
                <Image
                  className="hero"
                  src={image}
                  unsized
                  alt="hero"
                  loading="eager"
                />
              </div>
            </HeroImg>
          </HeroImageWrapper>

          {/* <HeroHeading>
						<div style={{ overflow: "hidden" }}>
							<Box
								d="flex"
								borderTop="1px"
								className="heading-reel"
								ref={(el): void => (headlineFirst = el)}
							>
								{[...Array(n)].map((e, i) => (
									<h1 key={i}>HELLO&nbsp; </h1>
								))}
							</Box>
							<Box
								d="flex"
								className="heading-reel"
								borderTop="1px"
								borderBottom="1px"
								ref={(el): void => (headlineSecond = el)}
							>
								{[...Array(n)].map((e, i) => (
									<h1 key={i}>HELLO&nbsp; </h1>
								))}
							</Box>
							<Box
								d="flex"
								borderBottom="1px"
								className="heading-reel"
								ref={(el): void => (headlineThird = el)}
							>
								{[...Array(n)].map((e, i) => (
									<h1 key={i}>HELLO&nbsp; </h1>
								))}
							</Box>
						</div>
					</HeroHeading> */}
        </HeroContainer>
        <ScrollForMore />
      </Holder>
    </>
  );
};
export default Hero;

const spanTextLeft = keyframes`
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(-100%, 0);
  }
`;
const spanTextRight = keyframes`
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(100%, 0);
  }
`;

const Holder = styled.div`
  margin-bottom: 360px;
  visibility: hidden;
  ${media.thone`  margin-bottom: 120px;`}
`;

const HeroImg = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: auto;
  grid-template-areas: "overlap";
  padding-top: 60px;
  img {
    width: 100%;
  }
`;

const HeroHeading = styled.div`
  overflow: hidden !important;
  align-self: center;
  padding-top: 140px;
  ${media.tablet` padding-top: 140px;`}
  position: absolute;

  h1 {
    font-size: 144px;
    letter-spacing: 20px;
    ${media.bigDesktop`font-size: 124px;`}
    ${media.desktop`font-size: 96px;`}
    ${media.tablet` font-size: 80px; width: 300px; `}
  }

  .heading-reel {
    border-color: ${(props): string => props.theme.tietary};
    h1 {
      animation: ${spanTextLeft} 2s linear infinite;
      -webkit-text-fill-color: transparent;
      -webkit-text-stroke-width: 1px;
      -webkit-text-stroke-color: ${(props): string => props.theme.tietary};
    }
    &:nth-of-type(2) {
      margin-left: -400px;
      h1 {
        animation: ${spanTextRight} 2s linear infinite;
      }
    }
  }
`;

const HeroBox = styled.div`
  background: #f1f1f1;
  width: 475px;
  height: 700px;
  grid-area: overlap;
  overflow: hidden;
  ${media.thone`width: 380px;
  height: 569px;`}
`;

const HeroContainer = styled(motion.div)`
  display: flex;
  position: relative;
  justify-content: center;
  margin-bottom: 60px;
  margin-top: 100px;
  ${media.thone` margin-bottom: 40px; margin-top: 60px;`}
`;

const HeroImageWrapper = styled.div`
  overflow: hidden;
  width: 475px;
  position: relative;
  z-index: 2;
  ${media.thone`width: 380px;`}
`;
