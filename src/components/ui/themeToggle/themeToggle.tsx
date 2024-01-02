import { Button } from "@nextui-org/react";
import MoonIcon from "@src/components/ui/icons/moon";
import SunIcon from "@src/components/ui/icons/sun";
import { useTheme } from "next-themes";
import { FC, useEffect, useState } from "react";

export interface IThemeToggleProps {}

const ThemeToggle: FC<IThemeToggleProps> = () => {
    const [isMounted, setIsMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return (
        <Button
            onClick={() => {
                setTheme(theme === "light" ? "dark" : "light");
            }}
            isIconOnly
            aria-label="toggle-theme"
            className="bg-transparent text-sm"
        >
            {theme === "light" ? (
                <SunIcon className="w-5 h-5" />
            ) : (
                <MoonIcon className="w-5 h-5" />
            )}
        </Button>
    );
};

export default ThemeToggle;
