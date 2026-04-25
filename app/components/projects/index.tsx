import { Book, Lock } from "lucide-react";

interface ProjectProps {
	project: ProjectData;
}

interface ProjectsProps {
	projects?: ProjectData[];
}

export interface ProjectData {
	private?: boolean;
	title: string;
	description: string;
	project_href?: string | undefined;
	tags?: string[];
}

function Project(props: ProjectProps) {
	const tags = !props.project.tags ? <></> : (
		<div className="flex flex-row gap-x-1.5 my-2 text-sm cursor-default">
			{props.project.tags.map((tag, index) => index === 0 ? (
				<span className="bg-blue-500 px-3 rounded-full text-foreground" key={index}>
					{tag}
				</span>
			) : (
				<span className="bg-neutral-500 px-3 rounded-full text-foreground" key={index}>
					{tag}
				</span>
			))}
		</div>
	);

	const icon = props.project.private ? <Lock size={20} /> : <Book size={20} />;

	return (
		<div className="flex flex-row w-full justify-between">
			<div className="flex flex-col">
				{!props.project.project_href ? (
					<div className="cursor-default flex w-fit flex-row justify-start items-center text-foreground font-bold text-xl gap-x-1">
						{icon}
						{props.project.title}
					</div>
				) : (
					<a className="cursor-pointer flex w-fit flex-row justify-start items-center text-foreground font-bold text-xl gap-x-1"
						href={props.project.project_href}
					>
						{icon}
						{props.project.title}
					</a>
				)}
				<span>{props.project.description}</span>
				{tags}
			</div>
		</div>
	);
}

export default function Projects(props: ProjectsProps) {
	if (!props.projects)
		return <></>;

	const data = props.projects.map((data, index) => <Project project={data} key={index} />);
	return (
		<div className="flex flex-col gap-y-4 w-full">
			{data}
		</div>
	);
}
