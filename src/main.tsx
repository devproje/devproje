import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/index.css";
import App from "@/App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import NotFound from "./notfound";

const router = (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<App />} index />
			<Route path="*" element={<NotFound />} />
		</Routes>
	</BrowserRouter>
);

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		{router}
	</StrictMode>,
);
