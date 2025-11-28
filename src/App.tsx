import { BrowserRouter, Route, Routes } from "react-router";
import GeneralView from "@/components/layout/general-view";
import Home from "@/components/page/home";
import "./App.scss";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<GeneralView />}>
					<Route path="/" index element={<Home />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
