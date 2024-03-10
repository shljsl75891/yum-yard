interface TextInputProps {}

const TextInput: React.FC<
  TextInputProps & React.InputHTMLAttributes<HTMLInputElement>
> = (props) => {
  const { className, ...rest } = props;
  return (
    <input
      type="text"
      className={`m-1 px-3 py-1 outline-none bg-white rounded-2xl ${className}`}
      {...rest}
    />
  );
};

export default TextInput;
