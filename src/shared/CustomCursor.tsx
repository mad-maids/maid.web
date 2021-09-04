import { useEffect, useState, FunctionComponent } from "react";
import { motion } from "framer-motion";
import styled from "@emotion/styled";

import { useStoreState } from "../store/hooks";

const CustomCursor: FunctionComponent = () => {
  const cursorType = useStoreState((state) => state.cursorType);
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const onMouseMove = (event): void => {
    const { clientX: x, clientY: y } = event;
    setMousePosition({ x, y });
  };

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);
    return (): void => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <Cursor
      animate={{
        left: `${mousePosition.x}px`,
        top: `${mousePosition.y}px`,
        transition: {
          duration: 0.12,
        },
      }}
      className={`${cursorType ? "hovered" : ""} ${cursorType}
		`}
    />
  );
};

export default CustomCursor;

const Cursor = styled(motion.div)`
  position: fixed;
  top: 400px;
  left: 400px;
  height: 12px;
  width: 12px;
  background: ${(props): string => props.theme.tietary};
  border-radius: 100%;
  transform: translate(-50%, -50%);
  transition: all 0.2s ease-out;
  transition-property: width, height, border;
  will-change: width, height, transform, border;
  pointer-events: none;
  z-index: 9999;

  @media screen and (max-width: 1024px) {
    opacity: 0;
  }

  &.hovered {
    width: 56px;
    height: 56px;
    background: transparent !important;
    border: 4px solid ${(props): string => props.theme.tietary};
  }
  &.pointer {
    border: none;
    width: 26px;
    height: 26px;
    background: ${(props): string => props.theme.tietary} !important;
  }

  &.hide {
    display: none;
  }
  &.b-button {
    border: 4px solid ${(props): string => props.theme.tietary} !important;
  }
  &.w-button {
    border: 4px solid ${(props): string => props.theme.secondary} !important;
  }
`;
