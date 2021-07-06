import React, { useEffect, useState } from "react";
import Navigation from "../navigation/Navigation";
import Media from "react-media";
import MenuBatton from "../menuBatton/MenuBatton";
import { HeaderStyles } from "./HeaderStyles";
import sprite from "../../sprites/sprite.svg";
import CheckBox from "../checkBox/CheckBox";
import { Link } from "react-router-dom";
// import rectandle47 from ".././images/Rectandle47.png";

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
          <Media
            query="(min-width: 1293px)"
            render={() => <Navigation fontSize="240px" />}
          />
          <p className="contact-information">+380 67 401 69 77 | 24/7</p>
          <MenuBatton />
        </div>
      </HeaderStyles>
      {/* <HeaderWrapper className="heade_wrapper">
        <div className="header-picture"></div>
        <div className="header-content">
          <div className="header-wrapper">
            <h1 className="header-title">Уборка квартир в Киеве</h1>
            <p className="header-description">
              Мы уберем у вас дома или в офисе. Наведем чистоту после ремонта и
              проведем генеральную уборку.
            </p>
          </div>
        </div>
      </HeaderWrapper> */}
    </>
  );
};

export default Header;
