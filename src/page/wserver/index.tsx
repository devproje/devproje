import { Server } from "lucide-react";
// import { useNavigate } from "react-router";
// import { Button } from "@/components/ui/button";

function HeroSection() {
	// const nav = useNavigate();

	return (
		<div className="main-section hero">
			<Server className="hero-profile-no-border" size={300} />
			<div>
				<h1 className="hero-title text-5xl">
					<b>WSERVER</b>
				</h1>
				<p className="hero-subtitle text-xl">
					<b>Proxmox VE Cluster Server with WH64</b>
				</p>

				<p className="hero-extra text-sm">개인 이용목적으로 만들어진 Proxmox Cluster 서버 입니다.</p>
				<div className="hero-actions">
					{/* <Button className="btn-gap" onClick={() => window.open("https://github.com/devproje", "_blank")}>
						<GitBranch size={24} /> Go to Github
					</Button>
					<Button variant={"secondary"} onClick={() => nav("/contact")}>
						<Contact size={24} /> Contact with me
					</Button> */}
				</div>
			</div>
		</div>
	);
}

function WSERVER() {
	return (
		<>
			<HeroSection />
			<div className="flex flex-row justify-center">
				<h1 className="sm:text-sm md:text-2xl"><b>현재 공사중인 페이지예요! 나중에 추가될 예정이니 기다려주세요!</b></h1>
			</div>
		</>
	);
}

export default WSERVER;
