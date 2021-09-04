import "@emotion/react";

declare module "@emotion/react" {
	export interface Theme {
		fonts: {
			body: string;
			heading: string;
			mono: string;
		};
		fontWeights: {
			normal: number;
			medium: number;
			bold: number;
		};
		text: string;
		primary: string;
		secondary: string;
		tietary: string;
		accent: string;
		snippetBackground: string;
		snippetBorder: string;
	}
}
