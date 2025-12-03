import type { Timeline, TimelineCategory, TimelineItem } from "@/types/timeline";
import { Calendar, GraduationCap, IdCard, PcCase, Rss } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

interface TimelineItemProps {
	item: TimelineItem;
}

interface TimelineProps {
	timeline: Timeline;
}

function TagType({ category }: { category: TimelineCategory }) {
	switch (category) {
	case "certification":
		return <IdCard size={20} />;
	case "conference":
		return <Rss size={20} />;
	case "hackathon":
		return <PcCase size={20} />;
	case "education":
		return <GraduationCap size={20} />;
	}
}

function TagIcon({ category }: { category: TimelineCategory }) {
	let desc = "";
	switch (category) {
	case "certification":
		desc = "Certificate";
		break;
	case "conference":
		desc = "Conference";
		break;
	case "hackathon":
		desc = "Hackathon";
		break;
	case "education":
		desc = "Education";
		break;
	}

	return (
		<Tooltip>
			<TooltipTrigger>
				<TagType category={category} />
			</TooltipTrigger>
			<TooltipContent>
				<p>{desc}</p>
			</TooltipContent>
		</Tooltip>
	);
}

function TItem(props: TimelineItemProps) {
	return (
		<div className="flex flex-row items-center justify-between mb-1">
			<div className="flex flex-row items-center">
				<TagIcon category={props.item.category} />
				<p className="ml-2">{props.item.title}</p>
			</div>
			<div className="flex text-sm items-center text-muted-foreground">
				<Calendar size={14} className="mr-1" />
				{props.item.date}
			</div>
		</div>
	);
}

function TComponent(props: TimelineProps) {
	return (
		<div className="mt-1 mb-4">
			<h2 className="timeline-title text-2xl mb-2">
				<b>{props.timeline.label}</b>
			</h2>

			<div>
				{props.timeline.entries.map((item, i) =>
					<TItem item={item} key={i} />)}
			</div>
		</div>
	);
}

export default TComponent;
