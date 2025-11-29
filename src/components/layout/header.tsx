import logo from "@/assets/goggle.png";
import ThemeToggler from "../custom/theme-toggler";
import { Link, useNavigate } from "react-router";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";

function Logo() {
	return (
		<a className="logo" href="#">
			<img src={logo} alt="" />
		</a>
	);
}

function HeaderItems() {
	const nav = useNavigate();

	return (
		<div className="header-items">
			<div className="nav-items">
				<Link to={"/"}>Home</Link>
				<Link to={"/contact"}>Contact</Link>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<div className="header-services">Services</div>
					</DropdownMenuTrigger>
					<DropdownMenuContent className="w-48" align="center">
						<DropdownMenuLabel>Public Service</DropdownMenuLabel>
						<DropdownMenuGroup>
							<DropdownMenuItem onClick={ev => {
								ev.preventDefault();
								nav("https://blog.wh64.net");
							}}>
								Personal Blog
							</DropdownMenuItem>
							<DropdownMenuItem onClick={ev => {
								ev.preventDefault();
								nav("https://git.wh64.net");
							}}>
								WSERVER Forgejo
							</DropdownMenuItem>
							<DropdownMenuItem onClick={ev => {
								ev.preventDefault();
								nav("https://sso.wh64.net");
							}}>
								WSERVER SSO
							</DropdownMenuItem>
						</DropdownMenuGroup>
						<DropdownMenuSeparator />
						<DropdownMenuLabel>Private Service</DropdownMenuLabel>
						<DropdownMenuGroup>
							<DropdownMenuItem onClick={ev => {
								ev.preventDefault();
								nav("https://ci.wh64.net");
							}}>
								TeamCity CI/CD
							</DropdownMenuItem>
							<DropdownMenuItem onClick={ev => {
								ev.preventDefault();
								nav("https://dash.wh64.net");
							}}>
								Grafana Panel
							</DropdownMenuItem>
							<DropdownMenuItem onClick={ev => {
								ev.preventDefault();
								nav("https://panel.wh64.net");
							}}>
								PufferPanel
							</DropdownMenuItem>
							<DropdownMenuItem onClick={ev => {
								ev.preventDefault();
								nav("https://repo.wh64.net");
							}}>
								WSERVER Nexus Repo
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
