import { useEffect, FunctionComponent, useState } from "react";
import { useInView } from "react-intersection-observer";
import gsap from "gsap";
import styled from "@emotion/styled";

import { media } from "../styles/styles-utils";
import Backdrop from "../shared/Backdrop";

const AboutHeadingCopy = (): JSX.Element => {
	const [ref, inView] = useInView({
		threshold: 0,
		triggerOnce: true,
		rootMargin: "-100px",
	});

	const [tl] = useState(gsap.timeline({ delay: 0.2 }));
	useEffect(() => {
		if (inView) {
			gsap.set(".headingCopy", { css: { visibility: "visible" } });
			tl.from(".line div", 1.8, {
				y: 270,
				ease: "power4.out",
				delay: 0.2,
				skewY: 10,
				stagger: {
					amount: 0.4,
				},
			});
		}
	}, [inView, tl]);
	return (
		<h1 ref={ref} className="headingCopy">
			<Text className="line">
				<div>
					We are <span className="white">Mad Maids</span>
				</div>
			</Text>
			<Text className="line">
				<div> Senior Developers </div>
			</Text>
			<Text className="line">
				<div> Solving real problems</div>
			</Text>
		</h1>
	);
};

const AboutBodyCopy = (): JSX.Element => {
	const [ref, inView] = useInView({
		threshold: 0,
		triggerOnce: true,
		rootMargin: "-200px",
	});

	const [tl] = useState(gsap.timeline({ delay: 0.2 }));
	useEffect(() => {
		if (inView) {
			gsap.set([".bodyCopy", ".bodyCopy h2"], { css: { visibility: "visible" } });
			tl.from(".line p", 1.8, {
				y: 270,
				ease: "power4.out",
				delay: 0.2,
				skewY: 10,
				stagger: {
					amount: 0.4,
				},
			});
		}
	}, [inView, tl]);
	return (
		<Copy ref={ref} className="bodyCopy">
			<Text className="line" style={{ height: 60 }}>
				<p className="subtitle">More About us</p>
			</Text>
			<div className="body">
				<Text className="line">
					<p>An IT Club based on +70 WIUT</p>
				</Text>
				<Text className="line">
					<p>which manages the BIS direction</p>
				</Text>
				<Text className="line">
					<p>& tries to solve student problems</p>
				</Text>
				<Text className="line">
					<p>via modern technology & platforms</p>
				</Text>
				<br />
				<br />
				<Text className="line">
					<p>Our current focus right now is </p>
				</Text>
				<Text className="line">
					<p>to build upon our dev team but </p>
				</Text>
				<Text className="line">
					<p>not stray away from project </p>
				</Text>
				<Text className="line">
					<p>side of things.</p>
				</Text>
			</div>
		</Copy>
	);
};

const HomepageAbout: FunctionComponent = () => (
	<TextContainer>
		<div className="wrapper">
			<Backdrop height="3800px" />
			<AboutHeadingCopy />
			<AboutBodyCopy />
		</div>
	</TextContainer>
);

export default HomepageAbout;

const Text = styled.div`
	overflow: hidden;
	padding: 0;
`;

const TextContainer = styled.div`
	padding: 0px 14%;
	margin-bottom: 200px;
	${media.desktop`padding:100px 10%;`};

	.bodyCopy {
		visibility: hidden;
	}

	.wrapper {
		position: relative;

		${media.tablet` margin: 60% 0;`};
		${media.thone`margin: 10% 0;`};
		.white {
			-webkit-text-stroke-color: transparent;
			-webkit-text-fill-color: ${(props): string => props.theme.tietary};
		}
		h1 {
			visibility: hidden;
			width: 100%;
			max-width: 1600px;
			font-size: 120px;
			text-transform: uppercase;
			transition: ease 0.4s;
			${media.bigDesktop`font-size: 68px;`};
			${media.desktop`font-size: 62px;`};
			${media.tablet`font-size: 48px;`};
			${media.thone`font-size: 48px;`};
			${media.phone`font-size: 42px;`};

			-webkit-text-fill-color: transparent;
			-webkit-text-stroke-width: 1px;
			-webkit-text-stroke-color: ${(props): string => props.theme.tietary};
			margin-bottom: 160px;
		}
		p {
			font-size: 2rem;
			${media.bigDesktop`font-size:1.4rem;`}
			${media.desktop`font-size:1.2rem;`}
		}
		.subtitle {
			font-family: Contrail One, sans-serif;
			font-size: 3rem;
			text-transform: uppercase;
			-webkit-text-fill-color: transparent;
			-webkit-text-stroke-width: 0.6px;
			-webkit-text-stroke-color: ${(props): string => props.theme.tietary};
			margin-left: 240px;
			${media.bigDesktop`font-size:2rem;`}
			${media.desktop`	margin-left: 60px;`}
			@media screen and (max-width: 1724px) {
				margin-left: 0;
			}

			/* @media screen and (max-width: 800px) {
				margin-left: 60px;
			} */
		}
	}
`;

const Copy = styled.div`
	display: flex;
	justify-content: space-between;
	${media.desktop`flex-direction: column;`};

	${media.tablet`
		.body {
			margin-left: 148px;
			padding-top: 20px;
		}
	`};
	${media.thone`
		.body {
			margin-left: 68px;
			padding-top: 20px;
		}
	`};
`;
