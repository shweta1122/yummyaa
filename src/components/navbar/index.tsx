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
    <div>
      <nav className="nav-container">
        <div className="logo">
          <h2>Yummyaaa!</h2>
        </div>
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
