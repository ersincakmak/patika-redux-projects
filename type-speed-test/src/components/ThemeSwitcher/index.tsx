import "./index.scss";
import { RiMoonClearLine, RiSunLine } from "react-icons/ri";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { toggleTheme } from "../../redux/themeSlice";
import { useEffect } from "react";

const ThemeSwitcher = () => {
  const { theme } = useAppSelector((state) => state.theme);

  const dispatch = useAppDispatch();

  const ThemeIcon = () => {
    if (theme === "light") {
      return (
        <RiMoonClearLine
          style={{
            color: "white",
          }}
        />
      );
    } else {
      return <RiSunLine />;
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <label className="swithcer">
      <input
        type="checkbox"
        className="swithcer__input"
        checked={theme === "dark"}
        onChange={() => {
          dispatch(toggleTheme());
        }}
      />
      <div className="swithcer__icon">
        <ThemeIcon />
      </div>
    </label>
  );
};

export default ThemeSwitcher;
