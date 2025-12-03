import { BrowserRouter, Route, Routes } from "react-router";
import GeneralView from "@/components/layout/general-view";
import Contact from "@/page/contact";
import Home from "@/page/home";
import "./App.scss";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<GeneralView />}>
					<Route path="/" index element={<Home />} />
					<Route path="/contact" element={<Contact />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
