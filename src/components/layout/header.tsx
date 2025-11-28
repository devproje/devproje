import logo from "@/assets/goggle.png";
import ThemeToggler from "../custom/theme-toggler";
import { Link } from "react-router";

function Logo() {
	return (
		<a className="logo" href="#">
			<img src={logo} alt="" />
		</a>
	);
}

function HeaderItems() {
	return (
		<div className="header-items">
			<div className="nav-items">
				<Link to={"/"}>Home</Link>
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
