import React from "react";
import Navigation from "../navigation/Navigation";
import Media from "react-media";
import MenuBatton from "../menuBatton/MenuBatton";
import { HeaderStyles } from "./HeaderStyles";
import sprite from "../../sprites/sprite.svg";
import CheckBox from "../checkBox/CheckBox";

const Header = () => {
  return (
    <HeaderStyles>
      <div className="logo-container">
        <svg className="logo">
          <use href={sprite + "#Logo"} />
        </svg>
        <CheckBox />
      </div>
      <div className="navigation-box">
        <Media
          query="(min-width: 1293px)"
          render={() => <Navigation fontSize="240px" />}
        />
        <p className="contact-information">+380 67 401 69 77 | 24/7</p>
        <MenuBatton />
      </div>
    </HeaderStyles>
  );
};

export default Header;
