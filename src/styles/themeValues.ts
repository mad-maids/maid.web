import * as pallete from "../utils/variables";

const dark = {
	text: `${pallete.DARK_TIETARY_COLOR}`,
	primary: `${pallete.DARK_PRIMARY_COLOR}`,
	secondary: `${pallete.DARK_SECONDARY_COLOR}`,
	tietary: `${pallete.DARK_TIETARY_COLOR}`,
	accent: `${pallete.CORAL}`,
	snippetBackground: `${pallete.GRAY_700}`,
	snippetBorder: `${pallete.GRAY_400}`,
};

const light = {
	text: `${pallete.LIGHT_TIETARY_COLOR}`,
	primary: `${pallete.LIGHT_PRIMARY_COLOR}`,
	secondary: `${pallete.LIGHT_SECONDARY_COLOR}`,
	tietary: `${pallete.LIGHT_TIETARY_COLOR}`,
	accent: `${pallete.CORAL}`,
	snippetBackground: `${pallete.GRAY_200}`,
	snippetBorder: `${pallete.GRAY_300}`,
};

export default {
	dark: {
		...dark,
	},
	light: {
		...light,
	},
};
