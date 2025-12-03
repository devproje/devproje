import type { ProjectData } from "@/types/project";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { SquareArrowOutUpRight } from "lucide-react";

function CreateProject({ data, last }: { data: ProjectData; last?: boolean; }) {
	return (
		<Card className={`project-card ${last ? "last" : ""}`}>
			<CardContent>
				<CardTitle className="flex">
					{data.href ? (
						<>
							<SquareArrowOutUpRight className="mr-1" size={16} />
							{" "}
						</>
					) : <></>}
					{data.name}
				</CardTitle>
				<CardDescription className="project-desc">{data.description}</CardDescription>

				<div className="project-tags flex flex-row">
					{data.tags.map((t, i) => <Badge key={i} variant={!t.library ? "default" : "secondary"}>{t.name}</Badge>)}
				</div>
			</CardContent>
		</Card>
	);
}

function Project({ data, last }: { data: ProjectData, last?: boolean; }) {
	if (!data.href)
		return <CreateProject data={data} last={last} />;

	return (
		<a href={data.href}>
			<CreateProject data={data} last={last} />
		</a>
	);
}

export default Project;
