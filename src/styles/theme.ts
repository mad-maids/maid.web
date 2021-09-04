import * as pallete from "../utils/variables";

import themeValues from "./themeValues";

const { dark, light } = themeValues;

const chakra = {
	fonts: {
		body: pallete.SECONDARY_FONT,
		heading: pallete.PRIMARY_FONT,
		mono: "Menlo, monospace",
	},
	fontWeights: {
		normal: 400,
		medium: 600,
		bold: 700,
	},
};

const darkTheme = { ...dark, ...chakra };
const lightTheme = { ...light, ...chakra };

export { darkTheme, lightTheme, chakra };
