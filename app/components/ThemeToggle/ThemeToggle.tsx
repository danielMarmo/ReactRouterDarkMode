import { useDarkMode } from "../../hooks/useDarkMode";
import { Sun, Moon, Monitor } from "lucide-react"; // Importamos los iconos

export default function ThemeToggle() {
  const { theme, toggleTheme } = useDarkMode();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 bg-primary-light dark:bg-primary-dark text-body-bg-light dark:text-body-bg-dark rounded-lg flex items-center gap-2"
    >
      {theme === "light" ? (
        <>
          <Sun className="w-15 h-5" />
        </>
      ) : theme === "dark" ? (
        <>
          <Moon className="w-15 h-5" />
        </>
      ) : (
        <>
          <Monitor className="w-15 h-5" />
        </>
      )}
    </button>
  );
}
