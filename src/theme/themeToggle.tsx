import { useTheme } from "./themeContext";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      className={`flex items-center gap-2 px-2 py-2 rounded-full transition-colors duration-300
        ${
          isDark ? "bg-gray-800 text-yellow-400" : "bg-gray-200 text-gray-800"
        }`}
    >
      {isDark ? <Moon size={20} /> : <Sun size={20} />}
    </button>
  );
};

export default ThemeToggle;
