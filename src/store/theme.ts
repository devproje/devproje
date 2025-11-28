import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type Theme = "dark" | "light" | "system";

interface ThemeProps {
	theme: Theme;
	getSystem(): Theme;
	setTheme(theme: Theme): void;
}

const useTheme = create<ThemeProps>()(persist(
	(set) => ({
		theme: "system",
		getSystem: () => {
			const system = window.matchMedia("(prefers-color-scheme: dark)").matches;
			if (!system)
				return "light";

			return "dark";
		},
		setTheme: (theme) => set({ theme: theme })
	}),
	{
		name: "vite-ui-theme",
		storage: createJSONStorage(() => localStorage),
	}
));

export default useTheme;
