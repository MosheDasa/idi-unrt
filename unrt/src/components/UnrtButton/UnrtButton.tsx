import React from "react";
import "./UnrtButton.css";

export interface UnrtButtonProps {
  label: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
}

export const UnrtButton: React.FC<UnrtButtonProps> = ({
  label,
  onClick,
  variant = "primary",
}) => {
  return (
    <button className={`unrt-button unrt-button--${variant}`} onClick={onClick}>
      {label}
    </button>
  );
};
