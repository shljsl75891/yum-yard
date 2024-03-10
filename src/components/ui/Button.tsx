import { HTMLAttributes, ReactNode } from "react";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  children: ReactNode;
}

const Button: React.FC<ButtonProps> = (props) => {
  const { disabled, children, className, ...rest } = props;

  return (
    <button
      className={`px-3 py-1 rounded-lg outline-none ${disabled ? "cursor-auto bg-gray-200" : "drop-shadow-md active:drop-shadow-none " + className}`}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
