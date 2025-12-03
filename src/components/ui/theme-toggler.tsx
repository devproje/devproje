import useTheme from "@/store/theme";
import { Toggle } from "@/components/ui/toggle";
import type { MouseEvent } from "react";
import { Moon, Sun, SunMoon } from "lucide-react";

function ThemeToggler() {
	const theme = useTheme();
	const click = (ev: MouseEvent): void => {
		ev.preventDefault();
		theme.setTheme(theme.theme === "dark" ? "light" : "dark");
	};

	return (
		<>
			<Toggle variant={"outline"} onClick={click}>
				{theme.theme === "system" ? <SunMoon /> : theme.theme === "dark" ? <Sun /> : <Moon />}
			</Toggle>
		</>
	);
}

export default ThemeToggler;
