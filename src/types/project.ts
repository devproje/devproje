interface ProjectTagData {
	name: string;
	library?: boolean;
}

export interface ProjectData {
	name: string;
	description: string;
	tags: ProjectTagData[];
	private: boolean;
	href?: string;
}