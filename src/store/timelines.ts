import { create } from "zustand";

export type TimelineType = "education" | "hackathon" | "conference" | "certificate";

export interface TimelineData {
	title: string;
	content?: string;
	date: string;
	type: TimelineType;
}

interface ProjectStore {
	data: TimelineData[];
	load(): void;
}

const useTimelines = create<ProjectStore>((set) => ({
	data: [],
	load() {
		try {
			fetch("/api/timelines", {
				"method": "GET",
				"mode": "same-origin",
				headers: {
					"Content-Type": "application/json"
				}
			})
			.then((res) => res.json())
			.then((json: TimelineData[]) => set(() => ({ data: json })))
			.catch(() => {
				console.error("server is not responding");
			});
		} catch {
			console.error("failed fetch");
		}
	}
}));

export default useTimelines;
