import Header from "./header";
import Footer from "./footer";
import { Outlet } from "react-router";

function GeneralView() {
	return (
		<div className="container flex flex-col bg-background text-foreground md:w-3xl lg:w-4xl">
			<Header />
			<Outlet />
			<Footer />
		</div>
	);
}

export default GeneralView;
