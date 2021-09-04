interface ExperiencesModel {
	year: string;
	position: string;
}

interface ExpertiesModel {
	name: string;
}

interface ToolsModel {
	name: string;
}

export interface CvDataModel {
	experiences: ExperiencesModel[];
	experties: ExpertiesModel[];
	tools: ToolsModel[];
}

export interface CVDataProps {
	experiences: { data: ExperiencesModel[]; title: string; id: number };
	experties: { data: ExpertiesModel[]; title: string; id: number };
	tools: { data: ToolsModel[]; title: string; id: number };
}

export type AccordionDetails = {
	data: ExperiencesModel[] | ExpertiesModel[] | ToolsModel[];
	title: string;
	id: number;
};
