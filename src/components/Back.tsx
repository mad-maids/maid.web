import { FunctionComponent } from "react";
import Router from "next/router";
import { motion } from "framer-motion";
import styled from "@emotion/styled";

import useCursor from "../hooks/useCursor";

interface BackProps {
	label: string;
}

const Back: FunctionComponent<BackProps> = ({ label }) => {
	const { onCursor } = useCursor();

	const variants = {
		onEnter: {
			y: 3,
			skewX: 4,
			transition: { duration: 0, ease: [0.6, 0.05, -0.01, 0.9] },
		},
		onLeave: {
			y: -3,
			skewX: 0,
			transition: { duration: 0, ease: [0.6, 0.05, -0.01, 0.9] },
		},
	};

	return (
		<BackContainer>
			<BackText
				onClick={(): void => Router.back()}
				onMouseEnter={(): void => onCursor("pointer")}
				onMouseLeave={(): void => onCursor()}
				variants={variants}
				initial="onLeave"
				whileHover="onEnter"
			>
				<span data-text={label}>{label}</span>
			</BackText>
		</BackContainer>
	);
};

export default Back;

const BackContainer = styled(motion.div)`
	margin-top: 80px;
	margin-bottom: 180px;
	display: flex;
	justify-content: center;
`;

const BackText = styled(motion.h1)`
	-webkit-text-fill-color: transparent;
	-webkit-text-stroke-width: 0.4px;
	-webkit-text-stroke-color: ${(props): string => props.theme.tietary};
	text-transform: uppercase;
	transition: all 0.4s ease;
	display: flex;
	overflow: hidden;
	line-height: 80px;
	white-space: nowrap;
	font-weight: initial;
	font-size: 84px;
	text-transform: uppercase;

	span {
		position: relative;
		&:before {
			width: 0;
			color: ${(props): string => props.theme.tietary};
			-webkit-text-fill-color: ${(props): string => props.theme.tietary};
			overflow: hidden;
			position: absolute;
			content: attr(data-text);
			transition: all 1s cubic-bezier(0.84, 0, 0.08, 0.99);
			white-space: nowrap;
		}
		&:hover {
			&:before {
				width: 100%;
			}
		}
	}
`;
