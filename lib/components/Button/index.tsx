import type { ButtonHTMLAttributes } from "react";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, ...rest }: ButtonProps) => {
  return <button {...rest}>{children}</button>;
};
