import { useEffect, FunctionComponent } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import { animated as a } from "react-spring";
import styled from "@emotion/styled";

import { media } from "../styles/styles-utils";

interface TextReelProps {
	text: string;
	x: any;
}
const TextReel: FunctionComponent<TextReelProps> = ({ text, x }) => {
	const n = 15;
	const [ref, inView] = useInView({
		threshold: 0,
		triggerOnce: true,
		rootMargin: "-200px",
	});

	const animation = useAnimation();

	useEffect(() => {
		if (inView) {
			animation.start("visible");
		}
	}, [inView, animation]);

	return (
		<TextReelWrapper
			ref={ref}
			id="trig"
			animate={animation}
			initial="hidden"
			variants={{
				visible: {
					y: 0,
					opacity: 1,
					skewY: 0,
					transition: {
						delay: 0.2,
						duration: 0.8,
						ease: [0.6, 0.05, -0.02, 0.9],
						staggerChildren: 0.5,
					},
				},
				hidden: {
					opacity: 0,
					skewY: 2,
					y: 83,
				},
			}}
		>
			<a.div
				className="textReel"
				style={{
					transform: x.interpolate((xVal) => `translate3d(${-xVal}px,0, 0) `),
				}}
			>
				{[...Array(n)].map((_e, i) => (
					<h1 key={i}>{text}</h1>
				))}
			</a.div>

			<a.div
				className="textReel2"
				style={{
					transform: x.interpolate((xVal) => `translate3d(${xVal}px,0, 0)`),
				}}
			>
				{[...Array(n)].map((_e, i) => (
					<h1 key={i}>{text}</h1>
				))}
			</a.div>
		</TextReelWrapper>
	);
};

export default TextReel;

const TextReelWrapper = styled(motion.div)`
	overflow: hidden;

	.textReel {
		width: 100%;
		display: flex;
		margin-left: -260px;
	}
	.textReel2 {
		width: 100%;
		display: flex;
		position: relative;
		left: -2060px;
		top: -58px;
		${media.thone`top: -18px;`}
	}

	h1 {
		font-size: 144px;
		${media.tablet`font-size: 92px;`}
		${media.thone`font-size: 62px;`}
    &:nth-of-type(2),
    :nth-of-type(4),
    :nth-of-type(6) {
			-webkit-text-fill-color: transparent;
			-webkit-text-stroke-width: 1px;
			-webkit-text-stroke-color: ${(props): string => props.theme.tietary};
		}
		text-transform: uppercase;
	}
`;
