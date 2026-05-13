import { create } from "zustand";

export type TimelineType = "education" | "hackathon" | "conference" | "certificate";

export interface TimelineData {
	title: string;
	content?: string;
	date: Date;
	type: TimelineType;
}

interface ProjectStore {
	data: TimelineData[];
	load(): void;
}

const useTimelines = create<ProjectStore>((set) => ({
	data: [],
	load() {
		fetch("/api/timelines", {
			"method": "GET",
			"mode": "same-origin",
			headers: {
				"Content-Type": "application/json"
			}
		})
		.then((res) => res.json())
		.then((json: TimelineData[]) => set(() => ({ data: json })))
		.catch(() => console.error("fetch api failed"));
	}
}));

export default useTimelines;
