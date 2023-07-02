import { useTheme } from "@/entities/ThemeProvider";
import { Link, Outlet } from "react-router-dom";

export const Layout = () => {
  const { toggleTheme } = useTheme();

  return (
    <div>
      <header>
        <Link to="/">Главная</Link>
        <Link to="/about">О нас</Link>
      </header>
      <main>
        <Outlet />

        <button onClick={() => toggleTheme()}>toggle theme</button>
      </main>
    </div>
  );
};
