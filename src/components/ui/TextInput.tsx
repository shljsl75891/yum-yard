interface TextInputProps {}

const TextInput: React.FC<
  TextInputProps & React.InputHTMLAttributes<HTMLInputElement>
> = (props) => {
  return (
    <input
      type="text"
      className="m-1 px-3 py-1 outline-none bg-white rounded-2xl"
      {...props}
    />
  );
};

export default TextInput;
