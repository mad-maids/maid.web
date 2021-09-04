import { useEffect, FunctionComponent, useState } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import gsap from "gsap";
import styled from "@emotion/styled";

import useGetWindow from "../hooks/getWindow";
import { copy } from "../animations/cta-anim";
import { media } from "../styles/styles-utils";
import * as pallete from "../utils/variables";

interface CTAProps {
	headingText: string;
	body: any;
	copyText: string;
}

const CTA: FunctionComponent<CTAProps> = ({ headingText, body, copyText }) => {
	const { dimensions } = useGetWindow();

	const [ref, inView] = useInView({
		threshold: 0,
		triggerOnce: true,
		rootMargin: dimensions.width > 900 ? "-200px" : "-180px",
	});
	const animation = useAnimation();

	const [t1] = useState(gsap.timeline({ delay: 0.2 }));

	useEffect(() => {
		if (inView) {
			animation.start("visible");
			gsap.set([".heading1", ".heading2"], { css: { visibility: "visible" } });
			t1.from([".heading1 h1", ".heading2 h1"], 1.8, {
				y: 470,
				ease: "power4.out",
				delay: 0.2,
				skewY: 10,
				stagger: {
					amount: 0.1,
				},
			});
		}
	}, [inView, animation, t1]);

	return (
		<CTAContainer ref={ref}>
			<div style={{ width: 1100 }}>
				<CTAHeading>
					<div className="heading1">
						<h1>{headingText}</h1>
					</div>
					<div className="heading2">
						<h1>{headingText}</h1>
					</div>
				</CTAHeading>
				<CTAInfoBox animate={animation} initial="hidden" variants={copy}>
					<CTACopy>
						<p>{copyText}</p>
					</CTACopy>
					{body}
				</CTAInfoBox>
			</div>
		</CTAContainer>
	);
};

export default CTA;

const CTAContainer = styled(motion.div)`
	padding: 220px 14%;
	display: flex;
	justify-content: center;
	${media.tablet`padding: 120px 14%;`}
`;

const CTAInfoBox = styled(motion.div)`
	display: flex;
	margin-left: 38%;
	${media.bigDesktop`margin-left: 0;`}
	${media.tablet`padding-left: 0; flex-direction: column;`}
`;

const CTACopy = styled(motion.div)`
	margin-right: 96px;

	p {
		width: 395px;
		font-size: 14px;
		padding-bottom: 27px;
		${media.thone`width: 290px;`}
	}
`;

export const CTAButton = styled(motion.div)`
	border-radius: 0.25rem;
	background: ${pallete.GRAY_800};
	border: 1px solid ${pallete.GRAY_400};
	padding: 12px 20px;
	width: 100%;
	text-align: center;
	transition: all 0.4s ease;
	${media.tablet`height: 30px;max-width: 115px; padding: 7px 20px;`}

	p {
		color: ${(props): string => props.theme.tietary};
		font-size: 14px;
		text-transform: uppercase;
	}

	&:hover {
		transition: all 0.4s ease;
		filter: brightness(0.6);
	}
`;

const CTAHeading = styled(motion.div)`
	position: relative;

	.heading1 {
		overflow: hidden;
		width: fit-content;
		visibility: hidden;
		h1 {
			font-size: 100px;
			${media.desktop`font-size: 64px; max-width: 611px;`}
			${media.tablet`font-size: 48px;max-width: 411px; padding-bottom: 36px;`}
			text-transform: uppercase;
			width: 100%;
			max-width: 811px;
			padding-bottom: 96px;
		}
	}

	.heading2 {
		overflow: hidden;
		width: fit-content;
		visibility: hidden;
		max-width: 811px;
		margin-top: -320px;
		margin-bottom: 96px;
		${media.desktop` margin-top: -240px; `};
		${media.tablet` margin-top: -138px; `};
		h1 {
			font-size: 100px;
			${media.desktop`font-size: 64px; max-width: 611px;`}
			${media.tablet`font-size: 48px;max-width: 411px; padding-bottom: 36px;`}
			text-transform: uppercase;
			width: 100%;
			-webkit-text-fill-color: transparent;
			-webkit-text-stroke-width: 0.6px;
			-webkit-text-stroke-color: ${(props): string => props.theme.tietary};
		}
	}
`;
