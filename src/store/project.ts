import { create } from "zustand";

export interface ProjectData {
	private?: boolean;
	title: string;
	description: string;
	project_href?: string | undefined;
	tags?: string[];
}

interface ProjectStore {
	data: ProjectData[];
	load(): Promise<void>;
}

const useProjects = create<ProjectStore>((set) => ({
	data: [],
	async load() {
		const res = await fetch("/api/projects", {
			"method": "GET",
			"mode": "same-origin",
			headers: {
				"Content-Type": "application/json"
			}
		});
		const data: ProjectData[] = await res.json();

		set(() => ({ data }));
	}
}));

export default useProjects;
