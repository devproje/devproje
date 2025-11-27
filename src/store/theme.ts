import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type Theme = "dark" | "light" | "system"

interface ThemeProps {
	default: Theme;
	setTheme(theme: Theme): void;
}

const useTheme = create<ThemeProps>()(persist(
    (set) => ({
        default: "system",
        setTheme: (theme) => set({ default: theme })
    }),
    {
        name: "theme",
        storage: createJSONStorage(() => localStorage),
    }
));

export default useTheme;
