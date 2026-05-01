import React from "react";

// Stylized RT mark inspired by the Ravi Tiles brand kit ("R" with overlapping triangle)
const Logo = ({ size = 40, withText = true, theme = "dark" }) => {
  const ink = theme === "light" ? "#FFFFFF" : "#0A0A0F";
  const blue = "#1E3FE8";

  return (
    <div className="flex items-center gap-3">
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Ravi Tiles"
      >
        {/* Blue triangular accent */}
        <path d="M14 8 L40 8 L14 38 Z" fill={blue} />
        {/* Black R-like mark */}
        <path
          d="M14 8 L14 56 L24 56 L24 38 L34 38 L46 56 L58 56 L44 36 C50 33 54 28 54 22 C54 14 47 8 38 8 L14 8 Z M24 18 L36 18 C40 18 44 20 44 23 C44 26 40 28 36 28 L24 28 L24 18 Z"
          fill={ink}
        />
      </svg>
      {withText && (
        <div className="leading-none">
          <div
            className="font-display font-black tracking-tight text-[1.05rem]"
            style={{ color: ink, letterSpacing: "0.04em" }}
          >
            RAVI TILES
          </div>
          <div
            className="text-[0.55rem] uppercase tracking-[0.2em] mt-1"
            style={{ color: theme === "light" ? "#cfd2dc" : "#5a5a66" }}
          >
            Paver Blocks &amp; Precast
          </div>
        </div>
      )}
    </div>
  );
};

export default Logo;
