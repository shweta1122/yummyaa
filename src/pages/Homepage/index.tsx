import Button from "../../components/button/BookTableBTn";
import MenuButton from "../../components/button/MenuTableBtn";
import Navbar from "../../components/navbar";
import { SocialIcon } from "react-social-icons";
import "./index.css";
import chefImage from "./chef.jpg";
import cookingImage from "./cooking.png";
const HomePage: React.FC<{}> = () => {
  return (
    <div>
      <Navbar />
      <div className="main-body1">
        <div className="main-body-title">
          <img src={chefImage} width="300" height="540" />
          <h2>
            Food that makes you say wow,<br></br> we welcome here all the
            <br></br>
            foodies!!!!
          </h2>

          <div className="main-content">
            <p>
              Lorem ipsum dolor amet mustache knausgaard +1, blue bottle
              waistcoat tbh semiotics artisan synth stumptown gastropub cornhole
              celiac swag. Brunch raclette vexillologist post-ironic glossier
              ennui XOXO mlkshk godard pour-over blog tumblr humblebrag. Blue
              bottle put a bird on it twee prism biodiesel brooklyn. Blue bottle
              ennui tbh succulents.
            </p>
          </div>

          <div className="btn">
            <Button />
            <MenuButton />
          </div>
          <div className="social-icons">
            <SocialIcon url="https://twitter.com/jaketrent" />
            <SocialIcon url="https://facebook.com/jaketrent" />
            <SocialIcon url="https://whatsapp.com/jaketrent" />
            <SocialIcon url="https://instagram.com/jaketrent" />
          </div>
        </div>

        <div className="main-body2">
          <img src={cookingImage} width="550" height="750" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
