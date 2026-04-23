import Image from "next/image";
import logo from "@/public/logo.png";
import { SocialRow } from "./social-row";

export default function Header() {
	return (
		<header className="flex flex-col">
			<div className="flex items-center">
				<Image className="mr-2.5" src={logo} width={40} height={40} alt="" loading="eager" />
				<span className="email-addr h-10 content-center">
					<a className="font-bold text-3xl" href="mailto:me@projecttl.net">
						me@projecttl.net
					</a>
				</span>
			</div>
			<span className="text-lg pb-3">Founder & DevOps Engineer of WSERVER</span>
			<SocialRow />
		</header>
	);
}
