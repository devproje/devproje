import { Mail, Rss } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faDiscord, faInstagram } from "@fortawesome/free-brands-svg-icons";

interface IconProps {
	href: string;
	children: React.ReactNode;
}

function SocialIcon(props: IconProps) {
	return (
		<a className="flex justify-center items-center text-foreground fill-foreground w-6 h-6" href={props.href} target="_blank" rel="noopener noreferrer">
			{props.children}
		</a>
	);
}

export function SocialRow() {
	return (
		<div className="inline-flex gap-4 w-fit">
			<SocialIcon href="mailto:me@projecttl.net">
				<Mail size={24} />
			</SocialIcon>
			<SocialIcon href="https://github.com/devproje">
				<FontAwesomeIcon icon={faGithub} />
			</SocialIcon>
			<SocialIcon href="https://discord.com/users/1017410607147913328">
				<FontAwesomeIcon icon={faDiscord} />
			</SocialIcon>
			<SocialIcon href="https://instagram.com/devproje_">
				<FontAwesomeIcon icon={faInstagram} />
			</SocialIcon>
			<SocialIcon href="https://projecttl.net/blog">
				<Rss size={24} />
			</SocialIcon>
		</div>
	);
}
