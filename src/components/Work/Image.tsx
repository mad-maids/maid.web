import { useRef, useState, useEffect, FunctionComponent } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

import * as pallete from "../../utils/variables";

import Caption from "./Caption";

interface WorkImageProps {
  imgName: string;
  text: string;
  isCaption?: boolean;
}

const WorkImage: FunctionComponent<WorkImageProps> = ({
  imgName,
  text,
  isCaption,
}) => {
  let imgRef = useRef(null);
  let imgHolder = useRef(null);
  let captionHolder = useRef(null);
  let over = useRef(null);

  const [t1] = useState(gsap.timeline({ delay: 0.2 }));

  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
    rootMargin: "-100px",
  });

  const animation = useAnimation();

  const imgholder = {
    visible: {
      visibility: "visible",

      transition: {
        delay: 0.4,
        duration: 0.8,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
    hidden: {
      visibility: "hidden",
    },
  };

  const overlay = {
    visible: {
      width: "0%",

      transition: {
        delay: 0.4,
        duration: 1.8,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
  };

  useEffect(() => {
    if (inView) {
      animation.start("visible");
    }

    if (isCaption === false) {
      ("");
    } else {
      t1.to(captionHolder, 0, { css: { visibility: "visible" }, delay: -0.2 });
    }
  }, [
    imgHolder,
    over,
    imgRef,
    t1,
    inView,
    captionHolder,
    animation,
    isCaption,
  ]);

  return (
    <div ref={ref}>
      {isCaption === false ? (
        <div> </div>
      ) : (
        <CaptionHolder ref={(el): void => (captionHolder = el)}>
          <Caption text={text} />
        </CaptionHolder>
      )}

      <ImageHolder
        animate={animation}
        initial="hidden"
        variants={imgholder}
        ref={(el): void => (imgHolder = el)}
      >
        <ImageOver
          animate={animation}
          variants={overlay}
          ref={(el): void => (over = el)}
        />
        <motion.div ref={(el: any): void => (imgRef = el)}>
          <Image src={`/assets/work/${imgName}`} unsized />
        </motion.div>
      </ImageHolder>
    </div>
  );
};

export default WorkImage;

const ImageHolder = styled(motion.div)`
  position: relative;
  overflow: hidden;

  img {
    visibility: hidden;
    width: 100%;
  }
`;

const ImageOver = styled(motion.div)`
  width: 100%;
  height: 100%;
  background: ${pallete.DARK_PRIMARY_COLOR};
  position: absolute;
  z-index: 2;
`;

const CaptionHolder = styled.div`
  visibility: hidden;
  overflow: hidden;
`;
