import { css } from "@emotion/css";

type Breakpoints = {
	giant: number;
	bigDesktop: number;
	desktop: number;
	tablet: number;
	thone: number;
	phablet: number;
	phone: number;
	tiny: number;
};

const sizes: Breakpoints = {
	giant: 1440,
	bigDesktop: 1200,
	desktop: 1000,
	tablet: 768,
	thone: 600,
	phablet: 480,
	phone: 376,
	tiny: 330,
};

// Type of entry after Object.entries() is used
type BreakpointEntry = [keyof Breakpoints, Breakpoints[keyof Breakpoints]];

type Stringify<T> = { [key in keyof T]?: any };

interface CustomObject extends ObjectConstructor {
	entries<K extends keyof Breakpoints, T>(
		o: { [s in K]: T } | ArrayLike<T>
	): [K, T][];
}
const obj: CustomObject = Object;

// iterate through the sizes and create a media template
export const media = obj
	.entries(sizes)
	.reduce<Stringify<Breakpoints>>((acc, cur: BreakpointEntry) => {
		// use em in breakpoints to work properly cross-browser and support users
		// changing their browsers font-size: https://zellwk.com/blog/media-query-units/
		const [key] = cur;
		const emSize = sizes[key] / 16;
		acc[key] = (literals: TemplateStringsArray, ...args: any[]): any => css`
			@media (max-width: ${emSize}em) {
				${css(literals, ...args)};
			}
		`;
		return acc;
	}, {});

export const truncate = (width: string): string => `
		max-width: ${width};
		width: 100%;
    white-space: nowrap;
    overflow: hidden;
		text-overflow: ellipsis;
  `;
