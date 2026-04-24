import { Calendar } from "lucide-react";

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

function RenderDate({ date }: { date: Date }) {
	let month = "";
	let day = `${date.getDate()}`;
	let d = "";

	switch (date.getMonth()) {
		case 0:
			month = "Jan";
			break;
		case 1:
			month = "Feb";
			break;
		case 2:
			month = "Mar";
			break;
		case 3:
			month = "Apr";
			break;
		case 4:
			month = "May";
			break;
		case 5:
			month = "Jun";
			break;
		case 6:
			month = "Jul";
			break;
		case 7:
			month = "Aug";
			break;
		case 8:
			month = "Sep";
			break;
		case 9:
			month = "Oct";
			break;
		case 10:
			month = "Nov";
			break;
		case 11:
			month = "Dec";
		}

	switch (date.getDay()) {
		case 0:
			d = "Sun";
			break;
		case 1:
			d = "Mon";
			break;
		case 2:
			d = "Tue";
			break;
		case 3:
			d = "Wed";
			break;
		case 4:
			d = "Thu";
			break;
		case 5:
			d = "Fri";
			break;
		case 6:
			d = "Sat";
	}

	if (date.getDate() < 10)
		day = `0${date.getDate()}`;

	return (
		<>
			<Calendar size={20} />

			{month} {day}, {d}
			<b className="font-bold">{date.getFullYear()}</b>
		</>
	);
}

function Timeline(props: TimelineProps) {
	return (
		<div className="flex flex-row justify-between items-center">
			<div className="flex flex-row items-center justify-center gap-1.5 h-5">
				<div className="flex flex-row gap-x-1.5 my-2 text-sm cursor-default">
					<span className="bg-blue-500 px-3 rounded-full text-foreground">
						{props.timeline.type.charAt(0).toUpperCase() + props.timeline.type.substring(1, props.timeline.type.length)}
					</span>
				</div>

				{props.timeline.title}
			</div>

			<div className="flex flex-row items-center gap-1.5 h-5">
				<RenderDate date={props.timeline.date} />
			</div>
		</div>
	);
}

export default function Timelines(props: TimelinesProps) {
	return (
		<div className="flex flex-col-reverse gap-y-2">
			{props.timelines.map((data, index) => <Timeline timeline={data} key={index} />)}
		</div>
	);
}
