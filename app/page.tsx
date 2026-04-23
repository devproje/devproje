import Header from "./components/header";
import Section from "./components/section";
import Projects, { ProjectData } from "./components/projects";
import Timelines, { TimelineData } from "./components/timelines";
import Footer from "./components/footer";

export default async function Home() {
	const url = process.env.BACKEND_URL;
	const pend = process.env.PROJECT_ENDPOINT;
	const time = process.env.TIMELINE_ENDPOINT;

	const loadProjects = async (): Promise<ProjectData[]> => {
		if (!url || !pend)
			return [];

		try {
			const data = await fetch(`${url}${pend}`, {
				method: "GET",
			});

			return await data.json();
		} catch (err) {
			console.error(err);
		}

		return [];
	};

	const loadTimelines = async (): Promise<TimelineData[]> => {
		if (!url || !time)
			return [];

		try {
			const data = await fetch(`${url}${time}`, {
				method: "GET",
			});

			const timelines: TimelineData[] = await data.json();
			return timelines.map((d: TimelineData) => ({
				...d,
				date: new Date(d.date)
			}));
		} catch (err) {
			console.error(err);
		}

		return [];
	};

	const projects = await loadProjects();
	const timelines = await loadTimelines();

	return (
		<div className="flex flex-col flex-1 items-center justify-center font-sans">
			<main className="flex flex-1 w-full max-w-4xl flex-col items-center py-16 px-4 sm:items-start">
				<Header />
				<Section title="">
					<p>저는 서비스 아키텍쳐 설계와 서비스 배포 자동화에 관심이 많은 DevOps 엔지니어 <b className="text-foreground">프로젝트</b>라고 합니다.</p>

					<p className="pt-3">
						2015년부터 C언어로 프로그래밍을 입문하였으며,
						현재는 Go나 Rust, TypeScript로 만든 서비스를 Docker를 이용하여 어떻게 배포 자동화를 시키고 운영할지에 대해 집중하고 있습니다.
					</p>

					<p className="pt-3">
						또한 지금까지의 경험을 바탕으로 2026년 초부터 <b className="text-foreground">WSERVER</b>라는 사업체를 만들고 있으며 오픈소스 CI/CD 툴인 <b className="text-foreground">nanokuma</b>를 열심히 개발하고 있습니다.
					</p>
				</Section>

				<Section title="Latest Projects">
					<Projects projects={projects} />
				</Section>

				<Section title="Timelines">
					<Timelines timelines={timelines} />
				</Section>
			</main>
			<Footer />
		</div>
	);
}
