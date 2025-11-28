import logo from "@/assets/goggle.png";
import ThemeToggler from "../custom/theme-toggler";

function Logo() {
	return (
		<a className="logo" href="#">
			<img src={logo} alt="" />
		</a>
	);
}

function LeftItems() {
	return (
		<div className="left-items">
			<Logo />
			<div className="nav-items">
			</div>
		</div>
	);
}

function Header() {
	return (
		<nav className="flex flex-row navbar bg-background text-foreground">
			<LeftItems />
			<ThemeToggler />
		</nav>
	);
}

export default Header;
