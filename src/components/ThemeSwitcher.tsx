import React, { useState } from "react";
import { Theme } from "@shared/types/theme";

export const ThemeSwitcher: React.FC = () => {
  const [theme, setTheme] = useState<Theme>("light");
  const isChecked = theme === "dark";

  const handleCheckboxChange = () => {
    setTheme(isChecked ? "light" : "dark");
    document.body.classList.toggle("dark");
  };

  return (
    <label className="autoSaverSwitch relative inline-flex cursor-pointer select-none items-center">
      <input
        type="checkbox"
        name="autoSaver"
        className="sr-only"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <span
        className={`slider mr-3 flex h-[26px] w-[50px] items-center rounded-full p-1 duration-200 ${
          isChecked ? "bg-blue-600" : "bg-[#CCCCCE]"
        }`}
      >
        <span
          className={`dot h-[18px] w-[18px] rounded-full bg-white duration-200 ${
            isChecked ? "translate-x-6" : ""
          }`}
        ></span>
      </span>
      <span className="label flex items-center text-sm font-medium text-slate-900 dark:text-white">
        Dark Mode
      </span>
    </label>
  );
};
