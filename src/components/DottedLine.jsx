import React from "react";

export default function DottedLine({
  length = 90, // in pixels
  direction = "horizontal", // "horizontal" | "vertical"
  color = "border-black", // Tailwind color
  thickness = 2, // in pixels
  className = "",
}) {
  const style =
    direction === "horizontal"
      ? { width: `${length}px`, borderTopWidth: thickness }
      : { height: `${length}px`, borderLeftWidth: thickness };

  return (
    <div className={`${color} border-dotted ${className}`} style={style} />
  );
}
