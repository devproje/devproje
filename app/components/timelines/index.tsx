export type TimelineType = "education" | "hackathon" | "conference" | "certificate";

export interface TimelineData {
	title: string;
	content?: string;
	date: Date;
	type: TimelineType;
}

interface TimelineProps {
	timeline: TimelineData;
}

interface TimelinesProps {
	timelines: TimelineData[];
}

function Timeline(props: TimelineProps) {
	return (
		<div className="flex flex-col items-start gap-1 sm:flex-row sm:justify-between sm:items-center">
			<div className="flex flex-row items-center justify-center gap-1.5 h-5 w-fit">
				<span className="text-sm text-foreground">[{props.timeline.date.getFullYear()}]</span>
				<span className="text-sm items-center">{props.timeline.title}</span>
			</div>

			<div className="flex flex-row items-center gap-1.5 sm:h-5">
				<div className="flex flex-row gap-x-1.5 my-2 cursor-default">
					<span className="bg-blue-500 px-3 rounded-full text-foreground text-sm">
						{props.timeline.type.charAt(0).toUpperCase() + props.timeline.type.substring(1, props.timeline.type.length)}
					</span>
				</div>
			</div>
		</div>
	);
}

export default function Timelines(props: TimelinesProps) {
	return (
		<div className="flex flex-col-reverse gap-y-4">
			{props.timelines.map((data, index) => <Timeline timeline={data} key={index} />)}
		</div>
	);
}
