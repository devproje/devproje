import { Link } from "react-router";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronRightIcon, Mail } from "lucide-react";
import { faHome } from "@fortawesome/free-regular-svg-icons";
import { faLink, faRss } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Item, ItemActions, ItemContent, ItemMedia } from "@/components/ui/item";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { faDiscord, faGithub, faInstagram, type IconDefinition } from "@fortawesome/free-brands-svg-icons";

function LinkIcon({ url, icon, name }: { url: string; icon: IconDefinition; name: string; }) {
	return (
		<Tooltip>
			<TooltipTrigger>
				<a href={url} className="m-2">
					<FontAwesomeIcon icon={icon} size="lg" />
				</a>
			</TooltipTrigger>
			<TooltipContent>{name}</TooltipContent>
		</Tooltip>
	);
}

function ExternalService({ url, icon, content, internal }: { url: string; icon: IconDefinition; content: string; internal?: boolean }) {
	const render = (
		<>
			<ItemMedia>
				<FontAwesomeIcon icon={icon} />
			</ItemMedia>
			<ItemContent>
				{content}
			</ItemContent>
			<ItemActions>
				<ChevronRightIcon className="size-4" />
			</ItemActions>
		</>
	);

	return (
		<Item className="my-1" variant="outline" size="sm" asChild>
			{internal ? (
				<Link className="w-full" to={url}>
					{render}
				</Link>
			) : (
				<a className="w-full" href={url}>
					{render}
				</a>
			)}
		</Item>
	);
}

function BioLink() {
	return (
		<div className="flex flex-col items-center main-section">
			<Card className="w-[370px] flex flex-col px-5">
				<div className="flex flex-col items-center justify-center">
					<img className="rnd mb-2" src="/profile.webp" width={80} height={80} />
					<h4 className="text-lg flex justify-center mb-2"><b>Project_IO</b></h4>
					<div className="flex pb-2">
						<Badge className="mr-2">
							DevOps
						</Badge>
						<Badge variant="secondary">
							Full-stack Dev
						</Badge>
					</div>
					<div className="flex justify-center">
						<Tooltip>
							<TooltipTrigger className="m-2">
								<a href="mailto:me@projecttl.net">
									<Mail size={25} />
								</a>
							</TooltipTrigger>
							<TooltipContent>Email</TooltipContent>
						</Tooltip>
						<LinkIcon name="Github" icon={faGithub} url="https://github.com/devproje" />
						<LinkIcon name="Discord" icon={faDiscord} url="https://discord.com/users/1017410607147913328" />
						<LinkIcon name="Instagram" icon={faInstagram} url="https://instagram.com/wh64_" />
						<LinkIcon name="Blog" icon={faRss} url="https://blog.projecttl.net" />
					</div>
				</div>

				<div className="flex flex-col justify-center items-center">
					<h5 className="mb-1"><b>External Service</b></h5>
					<ExternalService
						icon={faDiscord}
						content="WSERVER PUBLIC 디스코드 서버"
						url="https://discord.gg/dd24sXm4R6" />
					<ExternalService
						icon={faLink}
						content="WSERVER Status 페이지"
						url="https://status.wh64.net/status/wserver" />
					<hr className="w-full my-1" />
					<ExternalService
						internal
						icon={faHome}
						content="웹사이트로 돌아가기"
						url="/" />
				</div>

				<footer className="pt-4 flex justify-center text-sm text-muted-foreground">
					&copy; 2022-2025 WSERVER. All rights reserved.
				</footer>
			</Card>
		</div>
	);
}

export default BioLink;
