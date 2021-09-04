/* eslint-disable @typescript-eslint/ban-ts-ignore */
import { css, Global, withTheme } from "@emotion/react";
import styled from "@emotion/styled";

import * as pallete from "../utils/variables";

import { media } from "./styles-utils";

// type styledProps = {
// 	width: string;
// 	padding: string;
// };

const makeGlobalStyles = (theme): any => css`
	* {
		margin: 0;
		padding: 0;
		border: 0;
		outline: 0;
		font-size: 100%;
		vertical-align: baseline;
		box-sizing: border-box;
		cursor: none;
		::-webkit-scrollbar {
			width: 0px;
			background: transparent;
		}

		@media screen and (max-width: 1024px) {
			cursor: default;
		}
	}

	body {
		background: ${theme.primary};
		display: block;
	}

	.scroll-container {
		position: fixed;
		will-change: transform;
		right: 0;
		left: 0;
	}

	button {
		background: none;
		padding-left: 1.7rem;
		padding-right: 1.7rem;
		border-radius: 0.25rem;
		height: 2.5rem;
		min-width: 2.5rem;
		padding: 0;
		&:focus {
			box-shadow: 0 0 0 1px rgba(256, 256, 256, 0.6);
		}
	}

	ul {
		list-style: none;
	}

	a {
		text-transform: uppercase;
		text-decoration: none !important;
		transition: all 0.3s ease 0s;
		color: ${theme.tietary};
		&:hover {
			transition: 0.3s all ease;
		}
		/* &:focus {
			box-shadow: 0 0 0 1px rgba(256, 256, 256, 0.6);
		} */
	}

	nav span {
		font-family: ${pallete.SECONDARY_FONT};
	}

	ul {
		list-style: none;
	}

	em {
		margin-top: -32px;
		display: flex;
		justify-content: center;
		text-align: center;
		font-size: 70%;
		padding-bottom: 20px;
		font-family: ${pallete.SECONDARY_FONT};
	}

	h1,
	h2 {
		color: ${theme.tietary};
		font-family: ${pallete.PRIMARY_FONT};
	}

	h3,
	h4,
	h5 {
		color: ${theme.tietary};
		font-family: ${pallete.SECONDARY_FONT};
	}

	h1 {
		font-size: calc(2.875rem + ((1vw - 4.8px) * 2.5));
		${media.tablet`font-size:calc(2.4rem + ((1vw - 4.8px) * 2.5));`};
		font-weight: normal;
	}

	h2 {
		font-size: calc(1.625rem + ((1vw - 6.76px) * 2.4116));
		font-weight: normal;
	}

	h3 {
		font-size: 32px;
		font-weight: 200;
	}

	h4 {
		font-weight: 200;
		font-size: calc(0.75rem + ((1vw - 4.8px) * 0.1389));
	}

	h5 {
		font-weight: 200;
		font-size: 12px;
	}

	p {
		font-family: ${pallete.SECONDARY_FONT}, monospace;
		font-size: 18px;
		color: ${theme.tietary};

		text-transform: initial;
		${media.tablet`font-size: 13.8px;`}
	}

	code {
		white-space: pre;
	}
	code[class*="language-"],
	pre[class*="language-"] {
		color: gray;
		background: none;
		font-family: ${theme.fonts.mono};
		font-size: 1rem;
		text-align: left;
		word-spacing: normal;
		word-break: normal;
		word-wrap: normal;
		line-height: 1.8;
		-moz-tab-size: 4;
		-o-tab-size: 4;
		tab-size: 4;
		-webkit-hyphens: none;
		-moz-hyphens: none;
		-ms-hyphens: none;
		hyphens: none;
		width: 100%;
	}
	/* Code blocks */
	pre[class*="language-"] {
		padding-top: 1rem;
		padding-bottom: 1rem;
		padding-left: 1rem;
		padding-right: 1rem;
		margin: 1.5rem 0;
		overflow: auto;
		min-width: 100%;
		font-size: 0.9rem;
		white-space: nowrap;
	}
	:not(pre) > code[class*="language-"],
	pre[class*="language-"] {
		background: ${theme.snippetBackground};
		border: 1px solid ${theme.snippetBorder};
		border-radius: 0.5rem;
	}
`;
// @ts-ignore
export const GlobalStyles = withTheme(({ theme }) => <Global styles={makeGlobalStyles(theme)} />);

export const PaginationStyles = styled.div`
	a[disabled] {
		/* opacity: 0.5;
    pointer-events: none;
    text-decoration: line-through; */
		display: none;
	}
`;

export const PagePaginationContainer = styled.div`
	padding: 0 14%;
	margin: 2% 0;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
`;

// export const PostPaginationContainer = styled.div`
// 	max-width: ${(props: styledProps): string => props.width};
// 	padding: ${(props: styledProps): string => props.padding};
// 	margin: 4% auto 10% auto;
// 	display: grid;
// 	grid-template-columns: repeat(2, 1fr);
// `;

export const Container = styled.div`
	width: 1140px;
`;

export const Flex = styled.div<{ spaceBetween: any; flexEnd: any; alignTop: any; noHeight: any }>`
	position: relative;
	display: flex;
	align-items: center;
	${(props) =>
		props.spaceBetween &&
		css`
			justify-content: space-between;
		`};
	${(props) =>
		props.flexEnd &&
		css`
			justify-content: flex-end;
		`};
	${(props) =>
		props.alignTop &&
		css`
			align-items: flex-start;
		`};
	${(props) =>
		props.noHeight &&
		css`
			height: 0;
		`};
`;
