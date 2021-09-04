import { action, createStore } from "easy-peasy";

import { StoreModel } from "../models";

import { data } from "./hardcodedStore";

const currentTheme = (): string => {
	if (typeof window !== "undefined") {
		return window.localStorage.getItem("theme") == null
			? "dark"
			: window.localStorage.getItem("theme");
	}
};

const store: StoreModel = {
	currentTheme: currentTheme(),
	cursorType: null,
	isOpen: false,
	expanded: 0,
	cursorStyles: ["pointer", "hovered", "locked", "toggle", "hide", "w-button"],
	cvData: data.cvdata,
	siteMeta: data.siteMeta,
	plugs: data.plugs,

	setCursorType: action((state, payload) => {
		state.cursorType = payload;
	}),
	setOpen: action((state, payload) => {
		state.isOpen = payload;
	}),
	setCurrentTheme: action((state, payload) => {
		state.currentTheme = payload;
	}),
	setExpanded: action((state, payload) => {
		state.expanded = payload;
	}),
};

export default createStore(store);
