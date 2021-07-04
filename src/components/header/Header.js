import React from "react";
import Navigation from "../navigation/Navigation";
import Media from "react-media";
import MenuBatton from "../menuBatton/MenuBatton";
import { HeaderStyles } from "./HeaderStyles";

const Header = () => {
  return (
    <HeaderStyles>
      <div className="navigation-box">
        <Media
          query="(min-width: 1086px)"
          render={() => <Navigation fontSize="240px" />}
        />
        <p className="contact-information">+380 67 401 69 77 | 24/7</p>
        <MenuBatton />
      </div>
    </HeaderStyles>
  );
};

export default Header;
