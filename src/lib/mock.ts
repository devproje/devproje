import type { ProjectData } from "@/types/project";
import type { Timeline } from "@/types/timeline";

export const projects: ProjectData[] = [
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

export const timeline: Timeline[] = [
	{
		label: "2025",
		entries: [
			{
				title: "AngelHack HackSeoul",
				date: "Nov 8, Sat",
				category: "hackathon",
			},
			{
				title: "Google I/O Extended 2025 Incheon",
				date: "Jul 26, Sat",
				category: "conference",
			},
		],
	},
	{
		label: "2024",
		entries: [
			{
				title: "DDD Seoul",
				date: "Dec 07, Sat",
				category: "conference",
			},
			{
				title: "동양미래대학교 교내 스마트앱프로젝트 대회",
				date: "Dec 06, Fri",
				category: "hackathon",
			},
			{
				title: "AngelHack HackSeoul",
				date: "Aug 24, Sat",
				category: "hackathon",
			},
			{
				title: "UbuCon Korea 2024",
				date: "Aug 10, Sat",
				category: "conference",
			},
			{
				title: "Google I/O Extended 2024 Incheon",
				date: "Jul 27, Sat",
				category: "conference",
			},
		],
	},
	{
		label: "2023",
		entries: [
			{
				title: "동양미래대학교 진학",
				date: "Mar 02, Tue",
				category: "education",
			},
			{
				title: "세명컴퓨터고등학교 졸업",
				date: "Jan 03, Tue",
				category: "education",
			},
		],
	},
	{
		label: "2022",
		entries: [
			{
				title: "전자기기기능사 취득",
				date: "Jul 22, Fri",
				category: "certification",
			}
		],
	}
];
