import type { ButtonHTMLAttributes } from "react";

export type ButtonProps = {
  /**
   * Button color
   */
  color?: "black" | "red" | "blue";
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  children,
  color = "black",
  style,
  ...rest
}: ButtonProps) => {
  return (
    <button {...rest} style={{ ...style, color }}>
      {children}
    </button>
  );
};
