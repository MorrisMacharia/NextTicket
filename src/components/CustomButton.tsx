// CustomButton.tsx
"use client";
import React, { useState } from "react";

interface ButtonProps {
  width?: string;
  height?: string;
  color?: string;
  padding?: string;
  hoverColor?: string;
  backgroundColor?: string;
  border?: string;
  borderRadius?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const CustomButton: React.FC<ButtonProps> = ({
  width = "auto",
  height = "auto",
  color = "#000",
  padding = "20px 24px",
  hoverColor = "#333",
  backgroundColor = "transparent",
  border = "none",
  borderRadius = "4px",
  children,
  onClick,
}) => {
  const [buttonStyle, setButtonStyle] = useState<React.CSSProperties>({
    width,
    height,
    color,
    padding,
    backgroundColor,
    border,
    borderRadius,
    cursor: onClick ? "pointer" : "default",
    transition: "background-color 0.3s",
  });

  const handleHover = () => {
    setButtonStyle((prevStyle) => ({
      ...prevStyle,
      backgroundColor: hoverColor,
      color: backgroundColor,
    }));
  };

  const handleLeave = () => {
    setButtonStyle((prevStyle) => ({
      ...prevStyle,
      backgroundColor,
      color: hoverColor,
    }));
  };

  return (
    <button
      style={buttonStyle}
      onClick={onClick}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      {children}
    </button>
  );
};

export default CustomButton;
