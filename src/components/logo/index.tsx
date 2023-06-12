import "./index.css";
import logo from "./Logo.png";
const Logo: React.FC<{}> = () => {
  return (
    <div className="logo">
      <img src={logo} height="150" width="200" />

      <h3>𝒴𝓊𝓂𝓂𝓎𝒶𝒶𝒶!</h3>
    </div>
  );
};

export default Logo;
