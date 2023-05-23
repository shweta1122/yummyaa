import Button from "../button";
import Logo from "../logo";
import "./index.css";

const Navbar: React.FC<{}> = () => {
  const menuItems = [
    { name: "Home", link: "/" },
    { name: "Menu", link: "/" },
    { name: "Gallery", link: "/" },
    { name: "About", link: "/" },
    { name: "Contact", link: "/" },
  ];

  return (
    <nav className="nav-container">
      <Logo />
      {menuItems.map((item) => (
        <div>{item.name}</div>
      ))}
      <Button />
    </nav>
  );
};

export default Navbar;
