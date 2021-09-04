/* eslint-disable react/no-danger */
import Document, { Head, Main, NextScript, Html } from "next/document";
import { extractCritical } from "@emotion/server";

export default class MyDocument extends Document {
	static async getInitialProps(
		ctx: any
	): Promise<{
		styles: JSX.Element;
		html: string;
		head?: JSX.Element[];
	}> {
		const initialProps = await Document.getInitialProps(ctx);
		const styles = extractCritical(initialProps.html);
		return {
			...initialProps,
			styles: (
				<>
					{initialProps.styles}
					<style data-emotion-css={styles.ids.join(" ")} dangerouslySetInnerHTML={{ __html: styles.css }} />
					<link
						href="https://fonts.googleapis.com/css2?family=Contrail+One&family=DM+Mono:ital@0;1&display=swap"
						rel="stylesheet"
					/>
					<link href="https://use.fontawesome.com/releases/v5.12.1/css/svg-with-js.css" rel="stylesheet" />
					<link
						href="https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap"
						rel="stylesheet"
					/>
					<link href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap" rel="stylesheet" />

					<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&display=swap" rel="stylesheet" />
				</>
			),
		};
	}

	render(): JSX.Element {
		return (
			<Html lang="en">
				<Head />
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
