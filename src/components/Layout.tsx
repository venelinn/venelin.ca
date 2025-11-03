import React, { useEffect, useState, type ReactNode } from "react";
import Helmet from "react-helmet";
import {
  getLocalStorageTheme,
  setLocalStorageTheme,
  scrollAfterThemeChange,
} from "../utils/theme";

import "../styles/style.scss";

interface ThemeClassOnBodyProps {
  theme: string;
}

const ThemeClassOnBody: React.FC<ThemeClassOnBodyProps> = ({ theme }) => (
  <Helmet>
    <body data-theme={theme} className={`page page--${theme}`} />
  </Helmet>
);

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const [theme, setTheme] = useState<string>(getLocalStorageTheme() || "light");

  useEffect(() => {
    const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (!getLocalStorageTheme()) {
      setTheme(defaultDark ? "dark" : "light");
    }
  }, []);

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    setLocalStorageTheme(newTheme);
    scrollAfterThemeChange(newTheme === "light" ? "up" : "down");
  };

  return (
    <>
      <ThemeClassOnBody theme={theme} />
      <button
        onClick={switchTheme}
        title={`Switch to ${theme === "light" ? "dark" : "light"} Theme`}
        className={`theme-toggle theme-toggle--${theme}`}
      >
        <span className="sr-only" aria-hidden="true">
          Switch to {theme === "light" ? "dark" : "light"} Theme
        </span>
      </button>
      {children}
    </>
  );
};

export default Layout;
