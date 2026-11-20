"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";

type Theme = "light" | "dark" | "system";
type ResolvedTheme = "light" | "dark";

interface ThemeContextValue {
  resolvedTheme: ResolvedTheme;
  setTheme: Dispatch<SetStateAction<Theme>>;
}

interface ThemeProviderProps {
  children: ReactNode;
  defaultTheme?: Theme;
  enableSystem?: boolean;
  disableTransitionOnChange?: boolean;
  storageKey?: string;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

function getSystemTheme(): ResolvedTheme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function ThemeProvider({
  children,
  defaultTheme = "light",
  enableSystem = true,
  disableTransitionOnChange = false,
  storageKey = "theme",
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme);
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>(
    defaultTheme === "dark" ? "dark" : "light",
  );
  const [initialized, setInitialized] = useState(false);
  const themeRef = useRef(theme);

  const updateTheme = useCallback<Dispatch<SetStateAction<Theme>>>(
    (nextTheme) => {
      const selectedTheme =
        typeof nextTheme === "function" ? nextTheme(themeRef.current) : nextTheme;
      themeRef.current = selectedTheme;
      setTheme(selectedTheme);

      try {
        localStorage.setItem(storageKey, selectedTheme);
      } catch (error) {
        console.error("Unable to save the selected theme to local storage.", error);
      }
    },
    [storageKey],
  );

  const applyTheme = useCallback(
    (selectedTheme: Theme) => {
      const resolved =
        selectedTheme === "system" && enableSystem
          ? getSystemTheme()
          : selectedTheme === "dark"
            ? "dark"
            : "light";
      const root = document.documentElement;

      root.classList.remove("light", "dark");
      root.classList.add(resolved);
      root.style.colorScheme = resolved;
      setResolvedTheme(resolved);

      if (disableTransitionOnChange) {
        const style = document.createElement("style");
        style.appendChild(
          document.createTextNode(
            "*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}",
          ),
        );
        document.head.appendChild(style);
        window.getComputedStyle(document.body);
        window.setTimeout(() => document.head.removeChild(style), 1);
      }
    },
    [disableTransitionOnChange, enableSystem],
  );

  useEffect(() => {
    let initialTheme = defaultTheme;

    try {
      const storedTheme = localStorage.getItem(storageKey);
      if (
        storedTheme === "light" ||
        storedTheme === "dark" ||
        (enableSystem && storedTheme === "system")
      ) {
        initialTheme = storedTheme;
      }
    } catch (error) {
      console.error("Unable to read the saved theme from local storage.", error);
    }

    themeRef.current = initialTheme;
    setTheme(initialTheme);
    setInitialized(true);
  }, [defaultTheme, enableSystem, storageKey]);

  useEffect(() => {
    if (!initialized) return;

    applyTheme(theme);

    if (theme !== "system" || !enableSystem) return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => applyTheme("system");
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [applyTheme, enableSystem, initialized, theme]);

  return (
    <ThemeContext.Provider value={{ resolvedTheme, setTheme: updateTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
