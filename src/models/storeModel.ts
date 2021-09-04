import { Action } from "easy-peasy";

import { PlugModel } from "./plugModel";
import { CvDataModel } from "./cvModel";
import { SiteMetaModel } from "./siteMetaModel";

interface InitialStoreState {
	currentTheme: string;
	cursorType: string | null;
	isOpen: boolean;
	cursorStyles: string[];
	expanded: number | false;
}

type theme = InitialStoreState["currentTheme"];
export interface StoreModel extends InitialStoreState {
	plugs: PlugModel[];
	cvData: CvDataModel;
	siteMeta: SiteMetaModel;
	setCursorType: Action<StoreModel, string | null>;
	setOpen: Action<StoreModel, boolean>;
	setCurrentTheme: Action<StoreModel, theme>;
	setExpanded: Action<StoreModel, number | false>;
}
