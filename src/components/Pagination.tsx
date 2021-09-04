import { useState, FunctionComponent } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { css } from "@emotion/css";
import styled from "@emotion/styled";

import useCursor from "../hooks/useCursor";

interface ArrowProps {
	hoveredPosition: boolean;
	style?: {};
}

interface LabelProps {
	position: string;
}

interface PaginationProps {
	previous?: string;
	next?: string;
	pathPrefix: string;
}

const Arrow: FunctionComponent<ArrowProps> = ({ hoveredPosition }) => (
	<span className="arrow" style={{ top: 10 }}>
		<motion.svg
			animate={{ x: hoveredPosition ? 48 : 0 }}
			transition={{
				duration: 0.6,
				ease: [0.6, 0.05, -0.01, 0.9],
			}}
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 101 57"
		>
			<path
				d="M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z"
				fill="#000"
				fillRule="evenodd"
			/>
		</motion.svg>
	</span>
);

const Label: FunctionComponent<LabelProps> = ({ position }) => (
	<span className="label">
		<h1>{position}</h1>
	</span>
);

const PrevPosition: FunctionComponent<PaginationProps> = ({ previous, pathPrefix }) => {
	const [hoveredLeft, setHoveredLeft] = useState(false);
	const { onCursor } = useCursor();

	return (
		<div style={{ display: "flex", justifyContent: "flex-start" }}>
			<PageLink
				onMouseEnter={(): void => onCursor("pointer")}
				onMouseLeave={(): void => onCursor()}
				onHoverStart={(): void => setHoveredLeft(!hoveredLeft)}
				onHoverEnd={(): void => setHoveredLeft(!hoveredLeft)}
				left
			>
				<div style={{ maxWidth: "192px" }}>
					<Link href={`${pathPrefix}${previous}`} scroll={false}>
						<a>
							<Label position="Prev" />
							<Arrow hoveredPosition={hoveredLeft} style={{ top: 10 }} />
						</a>
					</Link>
				</div>
			</PageLink>
		</div>
	);
};

const NextPosition: FunctionComponent<PaginationProps> = ({ next, pathPrefix }) => {
	const [hoveredRight, setHoveredRight] = useState(false);
	const { onCursor } = useCursor();

	return (
		<div style={{ display: "flex", justifyContent: "flex-end" }}>
			<PageLink
				onHoverStart={(): void => setHoveredRight(!hoveredRight)}
				onHoverEnd={(): void => setHoveredRight(!hoveredRight)}
				onMouseEnter={(): void => onCursor("pointer")}
				onMouseLeave={(): void => onCursor()}
			>
				<Link href={`${pathPrefix}${next}`}>
					<a>
						<Label position="Next" />
						<Arrow hoveredPosition={hoveredRight} />
					</a>
				</Link>
			</PageLink>
		</div>
	);
};

const Pagination = {
	PrevPosition,
	NextPosition,
};

export default Pagination;

const PageLink = styled(motion.div)<{ left?: boolean }>`
	display: flex;
	align-items: center;
	justify-content: center;
	text-transform: uppercase;
	border-radius: 4px;

	transition: 150ms all ease-in;
	&:hover {
		transition: 150ms all ease-in;
	}

	.label {
		h1 {
			font-size: 4rem;
			width: fit-content;
			-webkit-text-fill-color: transparent;
			-webkit-text-stroke-width: 1px;
			-webkit-text-stroke-color: ${({ theme }): string => theme.tietary};
			text-transform: uppercase;
		}
	}
	.arrow {
		width: 119.58px;
		height: 80px;
		display: block;
		position: relative;
		overflow: hidden;
		display: flex;
		margin-left: auto;
		${({ left }: any): any =>
			left &&
			css`
				transform: rotate(180deg);
			`}

		svg {
			position: absolute;
			top: 16px;
			left: -49px;
			width: 108px;
			path {
				fill: transparent;
				stroke: ${({ theme }): string => theme.tietary};
			}
		}
	}
`;
