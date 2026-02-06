import { BrowserRouter, Route, Routes } from "react-router";
import GeneralView from "@/components/layout/general-view";
import BioLink from "@/page/link";
import Home from "@/page/home";
import "./App.scss";
import WSERVER from "./page/wserver";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<GeneralView />}>
					<Route path="/" index element={<Home />} />
					<Route path="/wserver" element={<WSERVER />} />
				</Route>
				<Route path="/link" element={<BioLink />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
