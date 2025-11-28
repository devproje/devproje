import { useNavigate } from "react-router";
import profile from "@/assets/profile.webp";
import { Button } from "@/components/ui/button";
import { Contact, GitBranch, PanelsTopLeft, Server, Terminal, Workflow } from "lucide-react";
import Project from "@/components/custom/project";
import Section from "@/components/custom/section";
import type { ProjectData } from "@/types/project";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

function HeroSection() {
	const nav = useNavigate();

	return (
		<div className="section hero">
			<img className="hero-profile" src={profile} alt="" />
			<div>
				<h1 className="hero-title text-5xl"><b>Project_IO</b></h1>
				<p className="hero-subtitle text-xl">
					Full-stack Dev & DevOps Engineer
				</p>

				<p className="hero-extra text-sm">항상 꼼꼼하게 확인하고 원인을 분석하는 DevOps를 하는 <b>Project_IO(프로젝트)</b> 입니다.</p>
				<div className="hero-actions">
					<Button className="btn-gap" onClick={ev => {
						ev.preventDefault();
						nav("https://github.com/devproje");
					}}>
						<GitBranch size={24} /> Go to Github
					</Button>
					<Button variant={"secondary"} onClick={ev => {
						ev.preventDefault();
						window.location.href = "#contact";
					}}>
						<Contact size={24} /> Contact with me
					</Button>
				</div>
			</div>
		</div>
	);
}

function Projects() {
	const projects: ProjectData[] = [
		{
			name: "Naru Bot",
			description: "LLM이 탑재된 대화형 디스코드 봇",
			private: true,
			tags: [
				{ name: "TypeScript" },
				{ name: "Discord.js", library: true }
			]
		},
		{
			name: "InventoryGUI",
			description: "코틀린 전용 마인크래프트 인벤토리 UI 시스템",
			private: false,
			href: "https://github.com/project-official/InventoryGUI",
			tags: [
				{ name: "Kotlin" },
				{ name: "PaperMC", library: true }
			]
		},
		{
			name: "Commando",
			description: "Go 전용 간이 CLI 명령어 파서 & 실행기",
			private: false,
			href: "https://github.com/devproje/commando",
			tags: [
				{ name: "Go" }
			]
		}
	];
	const isMobile = window.matchMedia("(min-width: 240px) and (max-width: 864px)").matches;

	return (
		<Section id="projects" title="🚧 Projects">
			<br />
			<Carousel opts={{ align: "start" }}>
				<CarouselContent>
					{projects.map((p, i) => (
						<CarouselItem key={i} className="md:basis-1/3">
							<Project data={p} last={i === projects.length - 1} />
						</CarouselItem>
					))}
				</CarouselContent>
				{projects.length > 2 && !isMobile ? (
					<>
						<CarouselPrevious />
						<CarouselNext />
					</>
				) : <></>}
			</Carousel>
		</Section>
	);
}

function Stacks() {
	return (
		<Section id="stacks" title="🔧 Skill & Stack">
			<p className="mb-5">아래에 있는 내용들은 실제로 사용하거나 사용할줄 아는 기술 입니다.</p>
			<div className="stack mb-4">
				<h2 className="flex flex-row mb-2 items-center text-xl">
					<Terminal className="mr-1" size={24} />
					<b>Languages</b>
				</h2>
				<p className="text-sm text-muted-foreground">C, Go, Rust, Java, Kotlin, TypeScript, Python</p>
			</div>

			<div className="stack mb-4">
				<h2 className="flex flex-row mb-2 items-center text-xl">
					<PanelsTopLeft className="mr-1" size={24} />
					<b>Frontend</b>
				</h2>
				<p className="text-sm text-muted-foreground">React, Vite, Android Jetpack Compose, Tauri App</p>
			</div>

			<div className="stack mb-4">
				<h2 className="flex flex-row mb-2 items-center text-xl">
					<Server className="mr-1" size={24} />
					<b>Backend</b>
				</h2>
				<p className="text-sm text-muted-foreground">Gin, Ktor, Axum, Actix, Hono</p>
			</div>

			<div className="stack mb-4">
				<h2 className="flex flex-row mb-2 items-center text-xl">
					<Workflow className="mr-1" size={24} />
					<b>DevOps</b>
				</h2>
				<p className="text-sm text-muted-foreground">Bash, Nginx, Docker, TeamCity, Linux (Fedora), Proxmox VE, MariaDB, PostgreSQL</p>
			</div>

			<p className="text-lg mb-2">여담</p>
			<ul className="stacks-tmi">
				<li className="text-sm">대부분 vscode를 사용하는 편이며, JVM 할때는 JetBrains 계열의 IDE를 사용 합니다.</li>
				<li className="text-sm">서버에서 작업 할때나 C언어를 다룰때는 neovim을 사용 합니다.</li>
				<li className="text-sm">Rust, TypeScript를 주력으로 사용하고 있으며, 가끔씩 Kotlin이나 Go도 사용하는 편입니다.</li>
				<li className="text-sm">파이썬은 스크립팅 또는 필요한 상황이 아니라면 자주 사용하지 않습니다.</li>
			</ul>
		</Section>
	);
}

function Timeline() {
	return (
		<Section id="timeline" title="📜 Timeline">
			<p>asdf</p>
		</Section>
	);
}

function Contacts() {
	return (
		<Section id="contact" title="☎️ Contact">
			<p>asdf</p>
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
			<Contacts />
		</>
	);
}

export default Home;
