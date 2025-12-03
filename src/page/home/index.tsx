import { useNavigate } from "react-router";
import Project from "@/components/ui/project";
import Section from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { projects, timeline } from "@/lib/mock";
import type { Timeline } from "@/types/timeline";
import { Contact, Container, GitBranch, Globe } from "lucide-react";
import TComponent from "@/components/ui/timeline-item";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";

function HeroSection() {
	const nav = useNavigate();

	return (
		<div className="main-section hero">
			<img className="hero-profile" src="/profile.webp" alt="" />
			<div>
				<h1 className="hero-title text-5xl">
					<b>Project_IO</b>
				</h1>
				<p className="hero-subtitle text-xl">
					<b>Full-stack Dev & DevOps Engineer</b>
				</p>
				<div className="flex flex-row mt-1 mb-8 justify-center md:justify-start">
					<Badge className="mr-1">projecttl.net</Badge>
					<Badge className="mr-1" variant="secondary">wh64.net</Badge>
					<Badge className="mr-1" variant="outline">tpr.kr</Badge>
					<Badge variant="outline">naruc.kr</Badge>
				</div>

				<p className="hero-extra text-sm">항상 꼼꼼하게 확인하고 배포 자동화를 하는 DevOps 엔지니어 <b>김원혁(Project_IO)</b> 입니다.</p>
				<div className="hero-actions">
					<Button className="btn-gap" onClick={() => window.open("https://github.com/devproje", "_blank")}>
						<GitBranch size={24} /> Go to Github
					</Button>
					<Button variant={"secondary"} onClick={() => nav("/contact")}>
						<Contact size={24} /> Contact with me
					</Button>
				</div>
			</div>
		</div>
	);
}

function Projects() {
	const [isMobile, setMobile] = useState(window.matchMedia("(max-width: 864px)").matches);
	const [project,] = useState(projects);

	useEffect(() => {
		const query = window.matchMedia("(max-width: 864px)");
		const handler = () => setMobile(query.matches);
		query.addEventListener("change", handler);

		return () => query.removeEventListener("change", handler);
	}, []);

	return (
		<Section id="projects" title="🚧 Projects">
			<br />
			<Carousel opts={{ align: "start" }}>
				<CarouselContent>
					{project.map((p, i) => (
						<CarouselItem key={i} className="md:basis-1/3">
							<Project data={p} last={i === project.length - 1} />
						</CarouselItem>
					))}
				</CarouselContent>
				{project.length > 2 && !isMobile ? (
					<>
						<CarouselPrevious />
						<CarouselNext />
					</>
				) : null}
			</Carousel>
		</Section>
	);
}

function Stacks() {
	return (
		<Section id="stacks" title="🔧 Tech Stack">
			<br />
			<div className="flex flex-col md:grid md:grid-cols-2 gap-6">
				<div className="stack sm:mb-8 md:mb-0">
					<h2 className="flex text-xl items-center mb-2">
						<Container className="mr-1" />
						<b>Core Stack (DevOps)</b>
					</h2>

					<Badge className="stack-badge">Docker</Badge>
					<Badge className="stack-badge">TeamCity</Badge>
					<Badge className="stack-badge">Linux (Proxmox VE, Fedora)</Badge>
					<br className="mb-2" />
					<Badge className="stack-badge" variant="secondary">
						MariaDB
					</Badge>
					<Badge className="stack-badge" variant="secondary">
						PostgreSQL
					</Badge>
					<Badge className="stack-badge" variant="outline">
						Nginx
					</Badge>
					<Badge className="stack-badge" variant="outline">
						Grafana
					</Badge>
				</div>

				<div className="stack sm:mb-8 md:mb-0">
					<h2 className="flex text-xl items-center mb-2">
						<Globe className="mr-1" />
						<b>Full Stack</b>
					</h2>
					<Badge className="stack-badge">React</Badge>
					<Badge className="stack-badge">Vite</Badge>
					<Badge className="stack-badge">Gin</Badge>
					<Badge className="stack-badge" variant="secondary">Next.js</Badge>
					<Badge className="stack-badge" variant="secondary">Ktor</Badge>
					<Badge className="stack-badge" variant="secondary">Hono</Badge>
					<br className="mb-2" />
					<Badge className="stack-badge" variant="outline">Axum</Badge>
					<Badge className="stack-badge" variant="outline">Actix</Badge>
					<Badge className="stack-badge" variant="outline">Tauri App</Badge>
					<Badge className="stack-badge" variant="outline">Kotlin Multiplatform</Badge>
				</div>
			</div>
		</Section>
	);
}

function Timeline() {
	const [tl,] = useState(timeline);

	return (
		<Section id="timeline" title="📜 Timeline">
			{tl.map((data, i) =>
				<TComponent timeline={data} key={i} />)}
		</Section>
	);
}

function SideNote() {
	return (
		<Section id="contact" title="💬 Side Note (여담)">
			<ul className="stacks-tmi list-disc">
				<li className="text-sm">
					<p>WSERVER라는 3대의 Proxmox VE 클러스터와 Fedora 단일 노드가 있으며 총 4대의 노드를 운영 중입니다.</p>
					<ul className="stacks-tmi list-circle">
						<li>
							<b>W01:</b> Intel i5-7600, DDR4 48 GiB, HDD 10 TiB
						</li>
						<li>
							<b>W02:</b> Intel Xeon E5-2680 v4, DDR4 64 GiB, SSD 2 TiB
						</li>
						<li>
							<b>W03:</b> Intel Xeon E5-2683 v4 x2, 32 GiB, SSD 1 TiB (Fedora)
						</li>
						<li>
							<b>W04:</b> Ryzen 5 5600, 16 GiB, SSD 1 TiB
						</li>
					</ul>
				</li>
				<li className="text-sm">Windows가 싫어서 Fedora를 사용하는 청년입니다. <del className="opacity-70">(WSL 안사요)</del></li>
				<li className="text-sm">현재 동양미래대학교 컴퓨터정보공학과 23학번으로 재학중 입니다. <del className="opacity-70">집 보내줘요</del></li>
				<li className="text-sm">Go, TypeScript를 주력으로 사용하고 있으며, 프로젝트에 따라 Kotlin, Rust, Java 등 매칭되는 언어를 사용하는 편입니다.</li>
				<li className="text-sm">평소에는 VSCode를 사용하며, 서버 작업이나 C 코드를 건드릴 때는 Neovim을 선호합니다.</li>
				<li className="text-sm">JVM 프로젝트를 다룰 땐 JetBrains 계열의 IDE를 사용합니다.</li>
			</ul>
		</Section>
	);
}

function Home() {
	return (
		<>
			<HeroSection />
			<Projects />
			<Stacks />
			<Timeline />
			<SideNote />
		</>
	);
}

export default Home;
