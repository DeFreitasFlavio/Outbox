import clsx from "clsx";
import "./Button.css";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  href?: string;
  variant?: "empty" | "fill";
}

export default function Button({
  children,
  className,
  href,
  variant,
  onClick,
}: ButtonProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={clsx("flex justify-center items-center", className, {
        empty: variant === "empty",
        fill: variant === "fill",
      })}
    >
      {children}
    </a>
  );
}
