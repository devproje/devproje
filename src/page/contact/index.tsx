import { Github, Mail } from "lucide-react";
import discord from "@/assets/discord.svg";
import type { JSX } from "react";

function IconLink({ href, icon, name }: { href: string; icon: JSX.Element; name?: string; }) {
	return (
		<a href={href} className="flex flex-col items-center">
			{icon}
			{!name ? <></> : (
				<p className="text-xl">
					<b>{name}</b>
				</p>
			)}
		</a>
	);
}

function Contact() {
	return (
		<div className="flex flex-col items-center main-section">
			<h2 className="text-4xl mb-2">
				<b>Contact</b>
			</h2>
			<p className="mb-4">아래의 아이콘을 클릭하여 저와 연락을 해보세요!</p>
			<div className="mt-8 flex w-full justify-evenly">
				<IconLink href="mailto://me@projecttl.net" icon={<Mail size={64} />} name="Email" />
				<IconLink href="https://github.com/devproje/devproje" icon={<Github size={64} />} name="Github" />
				<IconLink href="https://discord.gg/dd24sXm4R6" icon={<img src={discord} width={64} height={64} />} name="Discord" />
			</div>
		</div>
	);
}

export default Contact;
