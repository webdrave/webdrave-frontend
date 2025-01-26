// components/BackgroundLight.js
import React from "react";

export const BackgroundLight = ({
  color = "#7B87FF",
  size = "200px",
  blur = "100px",
  top,
  bottom,
  left,
  right,
}) => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <div
        className="absolute rounded-full z-20"
        style={{
          width: size,
          height: size,
          background: color,
          filter: `blur(${blur})`,
          top: top,
          bottom: bottom,
          left: left,
          right: right, // Center the light if needed
        }}
      />
    </div>
  );
};
export const RectangleBackgrounf=({
    color = "#7B87FF",
  height="300px",
  width="100px",
  blur = "100px",
  top,
  bottom,
  left,
  right,
}) => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <div
        className="absolute z-20"
        style={{
          width: size,
          height: size,
          background: color,
          filter: `blur(${blur})`,
          top: top,
          bottom: bottom,
          left: left,
          right: right, // Center the light if needed
        }}
      />
    </div>
  )
}
