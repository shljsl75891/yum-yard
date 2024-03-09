import { useMemo } from "react";
import Logo from "../assets/app-logo.png";
import Button from "./ui/Button";
import TextInput from "./ui/TextInput";

const Header: React.FC = () => {
  const navBarItems = ["Home", "About", "Contact"];
  return (
    <header className="px-4 py-2 flex items-center justify-between bg-gray-200 shadow-md">
      <div className="flex items-center gap-4">
        <img src={Logo} alt="app-logo" className="h-12" />
        <h1 className="font-medium text-2xl">Food Villa</h1>
      </div>
      <div className="flex gap-2 items-center">
        <TextInput placeholder="Search any item..." />
        <Button>Search</Button>
      </div>
      <ul className="flex list-none gap-4">
        {navBarItems.map((item, idx) => (
          <li
            key={idx}
            className="cursor-pointer hover:text-gray-600 active:font-medium"
          >
            {item}
          </li>
        ))}
        <li className="cursor-pointer hover:text-gray-600 active:font-medium">
          Cart(0)
        </li>
      </ul>
    </header>
  );
};

export default Header;
