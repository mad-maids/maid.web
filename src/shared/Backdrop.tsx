import { motion, useAnimation } from "framer-motion";
import { FunctionComponent, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import styled from "@emotion/styled";

interface Props {
  height: string;
}

const Backdrop: FunctionComponent<Props> = ({ ...props }) => {
  const { height } = props;
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
    rootMargin: "-100px",
  });

  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start("visible");
    }
  }, [inView, animation]);

  // const container = {
  // 	hidden: { height: 0 },
  // 	visible: {
  // 		height: "100%",
  // 		transition: {
  // 			staggerChildren: 0.5,
  // 		},
  // 	},
  // };

  const item = {
    visible: {
      height: "100%",
      transition: {
        delay: 0.2,
        duration: 1,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
    hidden: {
      height: 0,
    },
  };

  return (
    <div
      ref={ref}
      style={{
        position: "absolute",
        width: "100%",
        marginTop: "-100px",
        zIndex: -1,
      }}
    >
      <BackdropContainer initial="hidden" animate={animation} height={height}>
        <BackdropItem variants={item} />
        <BackdropItem variants={item} />
        <BackdropItem variants={item} />
        <BackdropItem variants={item} />
        <BackdropItem variants={item} />
        <BackdropItem variants={item} />
        <BackdropItem variants={item} />
      </BackdropContainer>
    </div>
  );
};

export default Backdrop;

const BackdropContainer = styled(motion.div)<{ height: string }>`
  display: flex;
  justify-content: space-between;
  height: ${({ height }): string => height};
`;

const BackdropItem = styled(motion.div)`
  height: 200px;
  width: 1px;
  background-color: ${(props): string => props.theme.secondary};
`;
