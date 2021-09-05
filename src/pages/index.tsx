/* eslint-disable @typescript-eslint/ban-ts-ignore */
import { FunctionComponent, useEffect } from "react";
import { motion } from "framer-motion";
import { useSpring } from "react-spring";
import { useScroll } from "react-use-gesture";

import HomepageHero from "../components/Home/Hero";
import SEO from "../components/SEO";
import MainFooter from "../components/Footer";
import TextReel from "../components/Home/HeadingReel";
import HomepageSlider from "../components/Home/Slider";
import HomepageAbout from "../components/Home/About";
import CTA, { CTAButton } from "../shared/CTA";
import { getAllWorks } from "../lib/works";
import { Works } from "../models";
import useCursor from "../hooks/useCursor";
import CVAccordion from "../components/CVAccordian";

interface HomeProps {
  allWorks: Works[];
}

const Home: FunctionComponent<HomeProps> = ({ allWorks }) => {
  const filteredWorks = allWorks
    .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))
    .filter((frontMatter) => frontMatter.published === true);

  const limitedWorks = filteredWorks.filter((_val, i) => i < 3);

  const { onCursor } = useCursor();

  const link = `https://t.me/madmaids`;
  const copyText = `If you like what we are putting out we encourage you to view more,
  but if you have something in mind. Dont be shy, say hello.`;

  const headingText = "Like what we are doing, get in touch.";

  const element = (
    <a href={link}>
      <CTAButton
        onMouseEnter={(): void => onCursor("w-button")}
        onMouseLeave={(): void => onCursor()}
      >
        <p>say hello</p>
      </CTAButton>
    </a>
  );

  const scrollIntertia = 70;
  const [{ x }, set] = useSpring(() => ({
    x: [0],
    config: {
      mass: 1,
      tension: 200,
      friction: scrollIntertia,
      precision: 0.00001,
      velocity: 0,
      clamp: true,
    },
  }));

  const scroll: any = useScroll(
    (event) => {
      if (event.scrolling === true) {
        set({
          // @ts-ignore
          x: [[window.pageYOffset] / 2],
        });
      }
      console.log("wheeling", event.scrolling);
    },
    { domTarget: typeof window !== "undefined" ? window : null }
  );

  useEffect(scroll, [scroll]);

  // test

  const body = (
    <motion.div exit={{ opacity: 0 }}>
      <SEO title="Home" description="Mad Maids" />
      <HomepageHero />
      <HomepageAbout />
      <CVAccordion />
      <TextReel text="madmaids" x={x} />
      {/*<HomepageSlider data={limitedWorks} onCursor={onCursor} />*/}

      <CTA copyText={copyText} headingText={headingText} body={element} />
      <MainFooter />
    </motion.div>
  );

  return body;
};

export default Home;

export async function getStaticProps(): Promise<{
  props: {
    allWorks: Works[];
  };
}> {
  const allWorks = getAllWorks();
  return {
    props: { allWorks },
  };
}
