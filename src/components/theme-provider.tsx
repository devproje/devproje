import useTheme from "@/store/theme";
import { useEffect, type ReactNode } from "react";

function ThemeProvider({ children }: { children: ReactNode }) {
	const theme = useTheme();

	useEffect(() => {
		const root = window.document.documentElement;
		root.classList.remove("light", "dark");

		if (theme.theme === "system") {
			const system = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
			root.classList.add(system);
			theme.setTheme(system);

			return;
		}

		root.classList.add(theme.theme);
	}, [theme]);

	return (
		<>
			{children}
		</>
	);
}

export default ThemeProvider;

