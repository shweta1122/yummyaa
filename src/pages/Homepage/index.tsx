import Navbar from "../../components/navbar";
import "./index.css";
const HomePage: React.FC<{}> = () => {
  return (
    <div>
      <Navbar />
      <div className="main-body1">
        <div className="main-body-title">
          <h3>
            Food that makes you say wow,<br></br> we welcome here all the
            <br></br>
            foodies!!!!
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex
          </p>
        </div>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex
        </p>
      </div>
    </div>
  );
};

export default HomePage;
