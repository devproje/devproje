import type { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

function GeneralView({ children }: { children: ReactNode }) {
	return (
		<div className="flex flex-col bg-background text-foreground w-xl md:w-3xl lg:w-5xl xl:w-7xl">
			<Header />
			{children}
			<Footer />
		</div>
	);
}

export default GeneralView;
