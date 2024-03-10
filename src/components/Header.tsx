import Logo from "../assets/app-logo.png";

const Header: React.FC = () => {
  const navBarItems = ["Home", "About", "Contact"];

  return (
    <header className="px-4 py-2 flex items-center justify-between bg-yellow-100 shadow-md">
      <div className="flex items-center gap-4">
        <img src={Logo} alt="app-logo" className="h-12" />
        <h1 className="font-black text-3xl">Food Villa</h1>
      </div>
      <ul className="flex list-none gap-4">
        {navBarItems.map((item, idx) => (
          <li
            key={idx}
            className="cursor-pointer hover:text-gray-600 font-medium"
          >
            {item}
          </li>
        ))}
        <li className="cursor-pointer hover:text-gray-600 font-medium">
          Cart(0)
        </li>
      </ul>
    </header>
  );
};

export default Header;
