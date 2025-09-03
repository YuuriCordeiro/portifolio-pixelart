import React, { useState } from "react";
import "./theme-toggle.css";

export const ThemeToggle: React.FC = () => {
  const [dark, setDark] = useState(false);

  const handleToggle = () => {
    setDark(!dark);
    document.documentElement.classList.toggle("dark", !dark);
  };

  return (
    <label id="theme-toggle-button">
      <input
        type="checkbox"
        id="toggle"
        checked={dark}
        onChange={handleToggle}
      />
      <svg
        viewBox="0 0 80 40"
        width="4em"
        height="auto"
      >
        {/* Retângulo menor */}
        <rect
          id="container"
          x="0"
          y="0"
          width="80"
          height="40"
          rx="20"
          fill="#5385c7ff"
        />

        {/* Botão */}
        <circle id="button" cx="16" cy="20" r="16" fill="#f8f2cdff" />

        {/* Sol e Lua */}
        <circle id="sun" cx="16" cy="20" r="10" fill="#ffd700" />
        <circle id="moon" cx="64" cy="20" r="10" fill="#ffffff" />

        {/* Nuvem (aparece com o sol) */}
        <g id="cloud" fill="#ffffff">
          <circle cx="48" cy="20" r="5" />
          <circle cx="53" cy="18" r="5" />
          <circle cx="58" cy="20" r="5" />
        </g>

        {/* Estrelas (aparecem com a lua) */}
        <g id="stars" fill="#ffffff">
          <circle cx="16" cy="10" r="1.5" />
          <circle cx="22" cy="20" r="1" />
          <circle cx="28" cy="15" r="1.5" />
        </g>
      </svg>
    </label>
  );
};
