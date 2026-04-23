interface SectionProps {
	title?: string;
	children: React.ReactNode;
}

export default function Section(props: SectionProps) {
	return (
		<section className="w-full h-fit py-8">
			{props.title ? <h2 className="text-2xl font-bold">{props.title}</h2> : <div></div>}
			<span className="text-neutral-400 w-full py-4 flex flex-col">
				{props.children}
			</span>
		</section>
	);
}
