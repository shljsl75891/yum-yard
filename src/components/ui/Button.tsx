interface ButtonProps {
  children: string;
}

const Button: React.FC<ButtonProps> = (props) => {
  const { children } = props;

  return (
    <button className="px-3 py-1 cursor-pointer rounded-lg bg-red-200">
      {children}
    </button>
  );
};

export default Button;
