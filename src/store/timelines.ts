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
	load(): Promise<void>;
}

const useTimelines = create<ProjectStore>((set) => ({
	data: [],
	async load() {
		const res = await fetch("/api/timelines", {
			"method": "GET",
			"mode": "same-origin",
			headers: {
				"Content-Type": "application/json"
			}
		});
		const data: TimelineData[] = await res.json();

		set(() => ({ data }));
	}
}));

export default useTimelines;
