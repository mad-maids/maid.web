import { motion } from "framer-motion";
import { FunctionComponent, useState } from "react";
import styled from "@emotion/styled";

import useCursor from "../hooks/useCursor";
import { AccordionDetails, CVDataProps } from "../models/cvModel";
import { useStoreActions, useStoreState } from "../store/hooks";
import * as pallete from "../utils/variables";

interface AccordionProps {
	details: AccordionDetails;
}

const useCVData = (): CVDataProps => {
	const cvData = useStoreState((state) => state.cvData);
	const { experiences, experties, tools } = cvData;

	return {
		experiences: {
			id: 0,
			title: "Experience",
			data: experiences,
		},
		experties: {
			id: 1,
			title: "What We Do",
			data: experties,
		},
		tools: {
			id: 2,
			title: "Tools We Use",
			data: tools,
		},
	};
};

const Accordion: FunctionComponent<AccordionProps> = ({ details }) => {
	const { experties, tools } = useCVData();
	const { onCursor } = useCursor();
	const expanded = useStoreState((state) => state.expanded);
	const currentTheme = useStoreState((state) => state.currentTheme);
	const setExpanded = useStoreActions((state) => state.setExpanded);
	const [hovered, setHovered] = useState(false);

	const isExpanded = details.id === expanded;

	if (details.data === experties.data || details.data === tools.data) {
		return (
			<div>
				<AccordionHeader
					initial={false}
					onClick={(): void => setExpanded(isExpanded ? false : details.id)}
					// whileHover={{
					// 	color: !isExpanded && currentTheme === "dark" ? "#ffffff" : "#000000",
					// }}
					onHoverStart={(): void => setHovered(!hovered)}
					onHoverEnd={(): void => setHovered(!hovered)}
					onMouseEnter={(): void => onCursor("pointer")}
					onMouseLeave={(): void => onCursor()}
				>
					<AccordionIcon>
						<motion.span
							animate={{ rotate: isExpanded || hovered ? 0 : 45, x: 3 }}
							transition={{ duration: 0.2, ease: [0.6, 0.05, -0.01, 0.9] }}
						/>
						<motion.span
							animate={{ rotate: isExpanded || hovered ? 0 : -45, x: -3 }}
							transition={{ duration: 0.2, ease: [0.6, 0.05, -0.01, 0.9] }}
						/>
					</AccordionIcon>

					{details.title}
				</AccordionHeader>
				<AccordionContent
					key="content"
					animate={{ height: isExpanded ? "100%" : 0 }}
					transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
				>
					{details.data.map((detail, i) => (
						<span key={i} style={{ width: "100%" }}>
							{detail.name}
						</span>
					))}
				</AccordionContent>
			</div>
		);
	}

	return (
		<div style={{ width: 500 }}>
			<AccordionHeader
				initial={false}
				onClick={(): void => setExpanded(isExpanded ? false : details.id)}
				// whileHover={{
				// 	color: !isExpanded && currentTheme === "dark" ? "#ffffff" : "#000000",
				// }}
				onHoverStart={(): void => setHovered(!hovered)}
				onHoverEnd={(): void => setHovered(!hovered)}
				onMouseEnter={(): void => onCursor("pointer")}
				onMouseLeave={(): void => onCursor()}
			>
				<AccordionIcon>
					<motion.span
						animate={{ rotate: isExpanded || hovered ? 0 : 45, x: 3 }}
						transition={{ duration: 0.2, ease: [0.6, 0.05, -0.01, 0.9] }}
					/>
					<motion.span
						animate={{ rotate: isExpanded || hovered ? 0 : -45, x: -3 }}
						transition={{ duration: 0.2, ease: [0.6, 0.05, -0.01, 0.9] }}
					/>
				</AccordionIcon>
				{details.title}
			</AccordionHeader>
			<AccordionContent
				key="content"
				animate={{ height: isExpanded ? "100%" : 0 }}
				transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
			>
				{/* @ts-ignore */}
				{details.data.map((detail, i) => (
					<span key={i} style={{ width: "90%" }}>
						{detail.year} {detail.position}
					</span>
				))}
			</AccordionContent>
		</div>
	);
};

const CVAccordion: FunctionComponent = () => {
	const { experiences, experties, tools } = useCVData();

	return (
		<AccordionContainer>
			<Accordion details={experiences} />
			<div>
				<Accordion details={experties} />
				<Accordion details={tools} />
			</div>
		</AccordionContainer>
	);
};

export default CVAccordion;

const AccordionContainer = styled.div`
	padding: 0 14%;
	display: flex;
	justify-content: flex-end;
	height: 400px;
`;

const AccordionHeader = styled(motion.div)`
	width: 100%;
	color: ${(props): string => props.theme.tietary};
	height: 32px;
	display: flex;
	align-items: center;
	font-weight: 600;
	font-family: ${pallete.PRIMARY_FONT};
	text-transform: uppercase;
	font-size: 2rem;
	margin: 8px 0;
`;
const AccordionContent = styled(motion.div)`
	overflow: hidden;
	padding-left: 40px;
	span {
		margin: 8px 0;
		font-size: 0.8rem;
		font-family: ${pallete.SECONDARY_FONT};
		color: ${(props): string => props.theme.tietary};
		display: block;
		font-weight: 300;
	}
`;
const AccordionIcon = styled.div`
	display: flex;
	align-items: center;
	height: 100%;
	margin-right: 8px;
	span {
		width: 16px;
		height: 4px;
		background: ${(props): string => props.theme.tietary};
		transition: all 0.1s ease-in-out;
	}
`;
