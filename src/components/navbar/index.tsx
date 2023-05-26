import Button from "../button/BookTableBTn";
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
    <div>
      <nav className="nav-container">
        <Logo />
        <div className="menu-links">
          <ul>
            {menuItems.map((item) => (
              <li>
                <a href={item.link}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>

        <Button />
      </nav>
    </div>
  );
};

export default Navbar;
