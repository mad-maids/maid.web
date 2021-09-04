import { useEffect, FunctionComponent } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { parseISO, format } from "date-fns";
// import useSWR from "swr";
import styled from "@emotion/styled";

import { media } from "../styles/styles-utils";
import * as pallete from "../utils/variables";
import useGetWindow from "../hooks/getWindow";
import { line, number, heading, description, link } from "../animations/blog-latest-anim";
import fetcher from "../lib/fetcher";

interface LatestEntriesProps {
	slug: string;
	title: string;
	date: string;
	desc: string;
	onCursor: (cursorType: string | void) => void;
}

const LatestEntries: FunctionComponent<LatestEntriesProps> = ({ onCursor, slug, desc, title, date }) => {
	const pathPrefix = `/blog/`;

	const { dimensions } = useGetWindow();

	const [ref, inView] = useInView({
		threshold: 0,
		triggerOnce: true,
		rootMargin: dimensions.width > 900 ? "-200px" : "-180px",
	});
	const animation = useAnimation();

	useEffect(() => {
		if (inView) {
			animation.start("visible");
		}
	}, [inView, animation]);

	// const { data } = useSWR(`/api/page-views?id=${slug}`, fetcher);
	const views = 200;

	return (
		<Entry ref={ref}>
			<EntryInfoContainer>
				<Line animate={animation} initial="hidden" variants={line} />
				<EntryNumber animate={animation} initial="hidden" variants={number}>
					<p>{format(parseISO(date), "MMM dd, yyyy")}</p>
					<p>{views ? views : "–––"} views</p>
				</EntryNumber>
				<EntryTitle animate={animation} initial="hidden" variants={heading}>
					<h3>{title}</h3>
				</EntryTitle>
				<EntryExcerpt animate={animation} initial="hidden" variants={description}>
					<p>{desc}</p>
				</EntryExcerpt>
				<Link href={`${pathPrefix}${slug}`} passHref>
					<a style={{ gridColumnStart: "span 2" }}>
						<EntryButton
							onMouseEnter={(): void => onCursor("pointer")}
							onMouseLeave={(): void => onCursor()}
							animate={animation}
							initial="hidden"
							variants={link}
						>
							<p>View Story</p>
						</EntryButton>
					</a>
				</Link>
			</EntryInfoContainer>
		</Entry>
	);
};

export default LatestEntries;

const Entry = styled.div`
	grid-column-start: span 4;
	${media.tablet` grid-column-start: span 8;`}
`;

const EntryInfoContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
`;

const Line = styled(motion.div)`
	grid-column-start: span 4;
	background: ${(props): string => props.theme.tietary};
	width: 100%;
	height: 1px;
`;
const EntryNumber = styled(motion.div)`
	display: flex;
	grid-column-start: span 4;
	justify-content: space-between;
	padding: 20px 0;
	p {
		color: ${(props): string => props.theme.tietary};
		font-size: 14px;
	}
`;

const EntryTitle = styled(motion.div)`
	grid-column-start: span 4;
	h3 {
		font-family: ${pallete.PRIMARY_FONT};
		font-size: 32px;
		text-transform: uppercase;
		${media.desktop`font-size: 28px;`}
	}
`;
const EntryExcerpt = styled(motion.div)`
	grid-column-start: span 4;
	padding-top: 20px;
	padding-bottom: 47px;
	p {
		font-size: 16px;
	}
`;

const EntryButton = styled(motion.div)`
	grid-column-start: span 2;
	padding: 12px 0;
	width: 70%;
	border-radius: 0.25rem;
	background: ${pallete.GRAY_800};
	border: 1px solid ${pallete.GRAY_400};
	p {
		text-transform: uppercase;
		font-size: 14px;
		text-align: center;
		color: ${(props): string => props.theme.tietary};
	}
	transition: all 0.4s ease;
	&:hover {
		transition: all 0.4s ease;
		filter: brightness(0.6);
	}
`;
