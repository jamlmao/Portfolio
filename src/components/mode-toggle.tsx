"use client";

import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      type="button"
      size="icon"
      className="w-full h-full rounded-full hover:bg-gray-800 dark:hover:bg-white/90"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <SunIcon className="h-[1.2rem] w-[1.2rem]  dark:hidden text-white dark:text-black" />
      <MoonIcon className="hidden h-[1.2rem] w-[1.2rem]  dark:block text-neutral-800 " />
    </Button>
  );
}