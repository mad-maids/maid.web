import { Row, Cell, Provider } from "griding";
import pagination from "pagination";
import _range from "lodash.range";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState, FunctionComponent } from "react";
import Link from "next/link";
import Image from "next/image";
import styled from "@emotion/styled";

import { media } from "../styles/styles-utils";
import { PaginationStyles, PagePaginationContainer } from "../styles";
import siteConfig from "../../site.config";
import { Works } from "../models";

import Pagination from "./Pagination";

interface WorkListingProps {
	data: Works[];
	page?: any;
	onCursor: (cursorType: string | false | void) => void;
}

const WorkListing: FunctionComponent<WorkListingProps> = ({ data, page = 1, onCursor }) => {
	const worksList = data;

	const { pageData } = siteConfig;

	const pathPrefix = `/works/`;
	const pagePrefix = `/work/`;
	const paginator = new pagination.SearchPaginator({
		prelink: "/",
		current: page,
		rowsPerPage: pageData.worksPerPage,
		totalResult: worksList.length,
	});

	const { previous, next, fromResult, toResult } = paginator.getPaginationData();
	const results = _range(fromResult - 1, toResult);

	const { PrevPosition, NextPosition } = Pagination;

	const [revealImage, setRevealImage] = useState({
		show: false,
		image: "/assets/work/Web19206.png",
		key: 0,
	});

	return (
		<>
			<Con>
				<LabSub>
					Personally, I want this website to be a respresentation of creativity and experimentation. No rules,
					no parameters, nothing but full freedom. The design world shows no mercy, so upgrading my skills is
					a priority.
				</LabSub>
			</Con>
			<WorkFeed>
				<ImageWrapper>
					<motion.div
						animate={{
							width: revealImage.show ? "0%" : "100%",
						}}
						transition={{ duration: 0.9, ease: [0.6, 0.05, -0.01, 0.9] }}
						className="reveal"
					/>
					<motion.div className="image">
						<AnimatePresence initial={false} exitBeforeEnter>
							<motion.div
								key={revealImage.key}
								initial={{ opacity: 0 }}
								exit={{ opacity: 0 }}
								animate={{
									opacity: 1,
								}}
								transition={{ duration: 0.2, ease: "easeInOut" }}
							>
								<Image src={revealImage.image} unsized loading="eager" />
							</motion.div>
						</AnimatePresence>
					</motion.div>
				</ImageWrapper>

				<WorkWrapper className="section">
					{worksList
						.filter((_, index) => results.indexOf(index) > -1)
						.map((frontMatter, index) => {
							const { title, image, slug } = frontMatter;
							const introImage = `/assets/work/${image}`;
							return (
								<Link href={`${pathPrefix}${slug}`} scroll={false} passHref key={index}>
									<a>
										<WorkTitle>
											<motion.span
												data-text={title}
												onHoverStart={(): void =>
													setRevealImage({
														show: true,
														image: introImage,
														key: index,
													})
												}
												onHoverEnd={(): void =>
													setRevealImage({
														show: false,
														image: introImage,
														key: index,
													})
												}
												onMouseEnter={(): void => onCursor("pointer")}
												onMouseLeave={(): void => onCursor()}
											>
												{title}
											</motion.span>
										</WorkTitle>
									</a>
								</Link>
							);
						})}
				</WorkWrapper>
				<PaginationStyles>
					<PagePaginationContainer>
						<Provider>
							<Row>
								{previous && (
									<Cell xs={12}>
										<PrevPosition pathPrefix={pagePrefix} previous={previous} />
									</Cell>
								)}
							</Row>
							{next && <NextPosition pathPrefix={pagePrefix} next={next} />}
						</Provider>
					</PagePaginationContainer>
				</PaginationStyles>
			</WorkFeed>
		</>
	);
};
export default WorkListing;

const Con = styled.div`
	padding: 0 14%;
	padding-top: 100px;
`;

const LabSub = styled.h5`
	padding-top: 20px;
	line-height: 28px;
	max-width: 580px;
	font-size: calc(10px + (36 - 14) * ((100vw - 600px) / (4000 - 300)));
	&::before {
		display: block;
		content: "";
		width: 26px;
		height: 1px;
		background-color: black;
		margin-bottom: 10px;
	}
`;

const WorkFeed = styled(motion.div)`
	padding: 0 14%;
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 1fr;
	grid-template-areas: "overlap";
`;

const WorkWrapper = styled.div`
	padding: 40px 0;
	margin: 60px 0;
	grid-area: overlap;
`;

export const ImageWrapper = styled.div`
	position: relative;
	grid-area: overlap;
	z-index: -1;
	width: 100%;

	.reveal {
		width: 100%;
		background: ${({ theme }): string => theme.primary};
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
	}

	.image {
		background: ${({ theme }): string => theme.primary};
		position: relative;
		margin: 0;
		z-index: -1;
	}
	img {
		width: 80%;
		object-fit: contain;
		display: block;
		margin-left: auto;
		filter: brightness(60%) grayscale(100%);
		${media.giant`width: 80%;`}
	}
`;

const WorkTitle = styled.h1`
	display: flex;
	overflow: hidden;
	line-height: 88px;
	transition: all 0.4s ease;
	font-size: 56px;
	text-transform: uppercase;
	-webkit-text-fill-color: transparent;
	-webkit-text-stroke-width: 0.4px;
	-webkit-text-stroke-color: ${({ theme }): string => theme.tietary};
	${media.thone`font-size: 62px;  white-space: normal;`}

	@media screen and (max-width: 1024px) {
		font-size: 84px;
		white-space: normal;
		color: ${(props): string => props.theme.tietary};
		-webkit-text-fill-color: ${(props): string => props.theme.tietary};
	}

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
				${media.thone`width: 0;`}
			}
		}
	}
`;
