export type TimelineCategory = "certification" | "education" | "conference" | "hackathon";

export interface TimelineItem {
    title: string;
    date: string;
    category: TimelineCategory;
}

export interface Timeline {
    label: string;
    entries: TimelineItem[];
}
