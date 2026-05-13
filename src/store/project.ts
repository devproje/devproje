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
	load(): void;
}

const useProjects = create<ProjectStore>((set) => ({
	data: [],
	load() {
		fetch("/api/projects", {
			"method": "GET",
			"mode": "same-origin",
			headers: {
				"Content-Type": "application/json"
			}
		})
		.then((res) => res.json())
		.then((json: ProjectData[]) => set(() => ({ data: json })))
		.catch(() => console.error("fetch api failed"));
	}
}));

export default useProjects;
