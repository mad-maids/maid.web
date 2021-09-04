import { useEffect, FunctionComponent } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import styled from "@emotion/styled";

import { media } from "../../styles/styles-utils";
import useCursor from "../../hooks/useCursor";

import Social from "./Links";

const Footer: FunctionComponent = () => {
	const { onCursor } = useCursor();

	const animation = useAnimation();
	const [footerRef, inView] = useInView({
		triggerOnce: true,
	});
	useEffect(() => {
		if (inView) {
			animation.start("visible");
		}
	}, [animation, inView]);

	return (
		<FooterContainer
			ref={footerRef}
			animate={animation}
			initial="hidden"
			variants={{
				visible: {
					opacity: 1,
					y: 0,
					transition: { duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] },
				},
				hidden: { opacity: 0, y: -72 },
			}}
		>
			<Social onCursor={onCursor} />
			<FooterCopyright>
				<p> Copyright © {new Date().getFullYear()} Mad Maids</p>
				<a href="https://github.com/mad-maids" target="_blank" rel="noopener noreferrer">
					<p
						style={{ textTransform: "initial" }}
						onMouseEnter={(): void => onCursor("pointer")}
						onMouseLeave={(): void => onCursor()}
					>
						Made with <span>❤</span> and a ⌨️ by yours truly.
					</p>
				</a>
			</FooterCopyright>
		</FooterContainer>
	);
};

export default Footer;

const FooterContainer = styled(motion.footer)`
	margin-bottom: 80px;
	margin-top: 80px;
	display: flex;
	justify-content: space-between;
	padding: 0 14%;
	${media.desktop`justify-content:none; flex-direction: column;  margin-top:0`};
`;

const FooterCopyright = styled.div`
	grid-column: 2;
	text-align: right;
	${media.desktop`grid-row: 2; grid-column: 1; text-align: left; padding-top:20px`};

	p {
		font-size: 14px;
		span {
			color: ${({ theme }): string => theme.accent};
		}
	}
`;
