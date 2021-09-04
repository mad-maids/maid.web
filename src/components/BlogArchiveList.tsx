import { Row, Cell, Provider } from "griding";
import pagination from "pagination";
import _range from "lodash.range";
import { FunctionComponent, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import styled from "@emotion/styled";

import { PaginationStyles, PagePaginationContainer } from "../styles";
import { media, truncate } from "../styles/styles-utils";
import siteConfig from "../../site.config";
import { Posts } from "../models";
import { config } from "../../config";
import * as pallete from "../utils/variables";

import Pill from "./PostCategoryList";
import Pagination from "./Pagination";

interface BlogArchiveListProps {
	data: Posts[];
	page?: any;
	onCursor: (cursorType: string | void) => void;
}

const PostEntry = ({ ...props }: { [x: string]: any }): JSX.Element => {
	const { title, date, categories, desc } = props;
	return (
		<>
			<td className="year">
				<p>{date}</p>
			</td>
			<td>
				<TileTitle>{title}</TileTitle>
			</td>
			<td className="hide-on-mobile">
				<Pill categories={categories} />
			</td>
			<td>
				<p className="description hide-on-mobile">{desc}</p>
			</td>
		</>
	);
};

const BlogArchiveList: FunctionComponent<BlogArchiveListProps> = ({ data, page = 1, onCursor }) => {
	const archiveList = data;
	const { pageData } = siteConfig;

	const pagePrefix = `/archive/`;

	const paginator = new pagination.SearchPaginator({
		prelink: "/",
		current: page,
		rowsPerPage: pageData.postsPerPage,
		totalResult: archiveList.length,
	});

	const { previous, next, fromResult, toResult } = paginator.getPaginationData();

	const results = _range(fromResult - 1, toResult);

	const { NextPosition, PrevPosition } = Pagination;

	const router = useRouter();

	const revealProjects = useRef([]);

	useEffect(() => {
		const ScrollReveal = require("scrollreveal").default;
		revealProjects.current.forEach((ref, index) => ScrollReveal().reveal(ref, config.srConfig(index * 10)));
	}, []);

	return (
		<>
			<div style={{ margin: "0 14%" }}>
				<Feed>
					<thead>
						<tr>
							<th>
								<p>Year</p>
							</th>
							<th>
								<p>Title</p>
							</th>
							<th className="hide-on-mobile">
								<p>Categories</p>
							</th>
							<th className="hide-on-mobile">
								<p>Description</p>
							</th>
						</tr>
					</thead>
					<tbody>
						{archiveList.length > 0 &&
							archiveList
								.filter((_: any, index: number) => results.indexOf(index) > -1)
								.map((frontMatter, i: number) => {
									const { title, categories, slug, date, desc } = frontMatter;

									return (
										<tr
											key={i}
											ref={(el): HTMLTableRowElement => (revealProjects.current[i] = el)}
											onClick={(): Promise<boolean> => router.push(`/blog/${slug}`)}
											onMouseEnter={(): void => onCursor("pointer")}
											onMouseLeave={(): void => onCursor()}
										>
											<PostEntry
												title={title}
												date={new Date(date).getFullYear()}
												categories={categories}
												desc={desc}
											/>
										</tr>
									);
								})}
					</tbody>
				</Feed>
			</div>
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
		</>
	);
};

export default BlogArchiveList;

const Feed = styled.table`
	border-radius: 10px;
	border-collapse: collapse;
	border-spacing: 0 10px;
	border: none;
	margin-top: 100px;
	width: 100%;

	td,
	th {
		padding: 14px;
	}

	tbody tr {
		td {
			&:first-child {
				border-top-left-radius: 0.25rem;
				border-bottom-left-radius: 0.25rem;
			}
			&:last-child {
				border-top-right-radius: 0.25rem;
				border-bottom-right-radius: 0.25rem;
			}
		}
		&:hover,
		&:focus {
			background: ${pallete.GRAY_800};
		}
	}

	th {
		text-align: left;
	}

	.hide-on-mobile {
		${media.giant`
    display: none;
  `};
	}
	.year {
		p {
			color: ${pallete.GRAY_400};
		}
	}
	.description {
		${truncate("630px")}
	}
`;

const TileTitle = styled.p`
	color: ${(props): string => props.theme.tietary};
	${truncate("420px")}
	line-height: normal;
	transition: ease 0.4s;
	${media.giant`${truncate("630px")}`}
	${media.thone`${truncate("220px")}`}
`;
