import { Switch } from "./switch";
import useTheme from "@/store/theme";

function ThemeToggler() {
	const theme = useTheme();

	return (
		<>
			<Switch defaultChecked={theme.theme === "system" ? theme.getSystem() === "dark" : theme.theme === "dark"} onCheckedChange={() => {
				theme.setTheme(theme.theme === "dark" ? "light" : "dark");
			}} />
			{/* {theme.theme === "system" ? <SunMoon /> : theme.theme === "dark" ? <Sun /> : <Moon />}
			</Switch> */}
		</>
	);
}

export default ThemeToggler;
