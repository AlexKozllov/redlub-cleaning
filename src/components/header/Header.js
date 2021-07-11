import React, { useEffect, useState } from "react";
import Navigation from "../navigation/Navigation";
import MenuBatton from "../menuBatton/MenuBatton";
import { HeaderStyles } from "./HeaderStyles";
import sprite from "../../sprites/sprite.svg";
import CheckBox from "../checkBox/CheckBox";
import { Link } from "react-router-dom";

const Header = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };
  }, []);

  return (
    <>
      <HeaderStyles offset={offset}>
        <div className="logo-container">
          <Link to="/">
            <svg className="logo">
              <use href={sprite + "#Logo"} />
            </svg>
          </Link>
          <CheckBox />
        </div>
        <div className="navigation-box">
          {/* <Media query="(min-width: 1293px)" render={() => */}
          <Navigation />
          {/* // /> */}
          <p className="contact-information">+380 67 401 69 77 | 24/7</p>
          <MenuBatton />
        </div>
      </HeaderStyles>
    </>
  );
};

export default Header;
