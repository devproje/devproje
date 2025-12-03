import { Link } from "react-router";
import logo from "@/assets/goggle.png";
import ThemeToggler from "../ui/theme-toggler";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";

interface CurrentProps {
	current: string;
	href: string;
	t: string;
}

function Logo() {
	return (
		<a className="logo" href="#">
			<img src={logo} alt="" />
		</a>
	);
}

function Current(props: CurrentProps) {
	console.log(props.current);

	return (
		<Link to={props.href}>
			{props.current === props.href ? (<b>{props.t}</b>) : props.t}
		</Link>
	);
}

function HeaderItems() {
	const current = location.pathname;

	return (
		<div className="header-items">
			<div className="nav-items">
				<Current current={current} href="/" t="Home" />
				<Current current={current} href="/contact" t="Contact" />
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<div className="header-services">Service</div>
					</DropdownMenuTrigger>
					<DropdownMenuContent className="w-48" align="center">
						<DropdownMenuGroup>
							<DropdownMenuItem onClick={() => window.open("https://blog.wh64.net", "_blank")}>
								Blog
							</DropdownMenuItem>
							<DropdownMenuItem onClick={() => window.open("https://mirror.tpr.kr", "_blank")}>
								TPR Mirror
							</DropdownMenuItem>
							<DropdownMenuItem onClick={() => window.open("https://git.wh64.net", "_blank")}>
								WSERVER Git
							</DropdownMenuItem>
							<DropdownMenuItem onClick={() => window.open("https://sso.wh64.net", "_blank")}>
								WSERVER SSO
							</DropdownMenuItem>
						</DropdownMenuGroup>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>

			<ThemeToggler />
		</div>
	);
}

function Header() {
	return (
		<nav className="flex flex-row navbar bg-background text-foreground">
			<Logo />
			<HeaderItems />
		</nav>
	);
}

export default Header;
