import React from "react";

// Stylized RT mark inspired by the Ravi Tiles brand kit ("R" with overlapping triangle)
const Logo = ({ size = 40, withText = true, theme = "dark" }) => {
  const ink = theme === "light" ? "#FFFFFF" : "#0A0A0F";
  const blue = "#1E3FE8";

  return (
    <div className="flex items-center gap-3">
      <img
        width={size}
        height={size}
        
       src={theme === "light" ? "/images/logolight.png" :"/images/logo.png"}
                 
                />
     
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
