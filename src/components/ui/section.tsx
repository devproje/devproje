import type React from "react";

interface SectionProps {
	id: string;
	title?: string;
	children: React.ReactNode;
}

function Section(props: SectionProps) {
	return (
		<div id={props.id} className="section">
			{!props.title ? <></> : (
				<>
					<h1 className="section-title text-2xl">
						<b>{props.title}</b>
					</h1>
				</>
			)}
			<hr />

			<div className="section-view">
				{props.children}
			</div>
		</div>
	);
}

export default Section;
