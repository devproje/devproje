import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type Theme = "dark" | "light" | "system";

interface ThemeProps {
	theme: Theme;
	setTheme(theme: Theme): void;
}

const useTheme = create<ThemeProps>()(persist(
	(set) => ({
		theme: "system",
		setTheme: (theme) => set({ theme: theme })
	}),
	{
		name: "vite-ui-theme",
		storage: createJSONStorage(() => localStorage),
	}
));

export default useTheme;
