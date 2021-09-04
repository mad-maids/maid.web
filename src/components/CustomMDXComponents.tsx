/* eslint-disable @typescript-eslint/ban-ts-ignore */
import styled from "@emotion/styled";
import { FunctionComponent } from "react";
import { TwitterTweetEmbed } from "react-twitter-embed";
import YouTube from "react-youtube-embed";
import Image from "next/image";

import { media } from "../styles/styles-utils";

import WorkImage from "./Work/Image";
import { ImportedCode, CodeSkeleton } from "./Code";

type ImageGridProps = {
	columns: string;
	rows: string;
	gap: string;
};

type ImageProps = {
	path: string;
};

const BlogImage: FunctionComponent<ImageProps> = ({ path }) => {
	const image = `/assets/blog/${path}`;
	return (
		<ImageWrapper>
			<Image src={image} unsized />
		</ImageWrapper>
	);
};

const ImageWrapper = styled.div`
	img {
		width: 100%;
		border-radius: 4px;
		margin: 0 auto;
	}
`;

const ImageGrid: FunctionComponent<ImageGridProps> = ({ children, columns, rows, gap }) => (
	<ImageGridContainer columns={columns} rows={rows} gap={gap}>
		{children}
	</ImageGridContainer>
);

const Tweet = ({ id }): JSX.Element => (
	<TwitterTweetEmbed tweetId={id} placeholder={<CodeSkeleton />} options={{ theme: "dark" }} />
);

const YouTubeVid = ({ id }): JSX.Element => <YouTube id={id} />;

const ImageGridContainer = styled.div<{ rows: string; columns: string; gap: string }>`
	display: grid;
	grid-template-columns: ${({ columns }): string => columns};
  grid-auto-rows: ${({ rows }): string => (rows ? rows : "auto")};
  grid-gap: ${({ gap }): string => gap};
  ${media.bigDesktop` grid-gap: 80px;`}
  ${media.tablet` grid-gap: 100px;`}
  ${media.thone`grid-template-columns: 1fr; grid-gap: 20px;`}
`;

export const CustomComponets = {
	ImageGrid,
	WorkImage,
	BlogImage,
	ImportedCode,
	Tweet,
	YouTubeVid,
};
