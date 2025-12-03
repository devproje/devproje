import { Link, useLocation } from "react-router";
import logo from "@/assets/goggle.png";
import ThemeToggler from "../ui/theme-toggler";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";

interface CurrentProps {
	href: string;
	title: string;
}

function Logo() {
	return (
		<a className="logo" href="#">
			<img src={logo} alt="" />
		</a>
	);
}

function Current(props: CurrentProps) {
	const location = useLocation();

	return (
		<Link to={props.href}>
			{location.pathname === props.href ? (<b>{props.title}</b>) : props.title}
		</Link>
	);
}

function HeaderItems() {
	return (
		<div className="header-items">
			<div className="nav-items">
				<Current href="/" title="Home" />
				<Current href="/contact" title="Contact" />
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<button className="header-services">Service</button>
					</DropdownMenuTrigger>
					<DropdownMenuContent className="w-48" align="center">
						<DropdownMenuGroup>
							<DropdownMenuItem asChild>
								<a href="https://blog.wh64.net" target="_blank" rel="noopener noreferrer">
									Blog
								</a>
							</DropdownMenuItem>
							<DropdownMenuItem asChild>
								<a href="https://mirror.tpr.kr" target="_blank" rel="noopener noreferrer">
									TPR Mirror
								</a>
							</DropdownMenuItem>
							<DropdownMenuItem asChild>
								<a href="https://git.wh64.net" target="_blank" rel="noopener noreferrer">
									WSERVER Git
								</a>
							</DropdownMenuItem>
							<DropdownMenuItem asChild>
								<a href="https://sso.wh64.net" target="_blank" rel="noopener noreferrer">
									WSERVER SSO
								</a>
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
