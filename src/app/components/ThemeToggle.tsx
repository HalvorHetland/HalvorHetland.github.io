import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";

interface ThemeToggleProps {
  theme: "dark" | "light";
  onToggle: () => void;
}

export function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  return (
    <Button
      variant="ghost"
      size="icon"
      className="w-9 h-9 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
      onClick={onToggle}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="w-4 h-4" />
      ) : (
        <Moon className="w-4 h-4" />
      )}
    </Button>
  );
}
