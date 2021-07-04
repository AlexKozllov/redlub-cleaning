import React from "react";
import { NavLink } from "react-router-dom";
import routers from "../../routers/routers";
import { NavigationStyles } from "./NavigationStyles";

const Navigation = () => {
  return (
    <NavigationStyles>
      <NavLink
        to={routers.afterRenovation}
        className="navLink-item"
        activeClassName="activeNavLink"
      >
        После ремонта
      </NavLink>
      <NavLink
        to={routers.spriningCleaning}
        className="navLink-item"
        activeClassName="activeNavLink"
      >
        Генеральная уборка
      </NavLink>
      <NavLink
        to={routers.regularCleaning}
        className="navLink-item"
        activeClassName="activeNavLink"
      >
        Регулярная уборка
      </NavLink>
      <NavLink
        to={routers.eyeWash}
        className="navLink-item"
        activeClassName="activeNavLink"
      >
        Мойка окон
      </NavLink>
    </NavigationStyles>
  );
};

export default Navigation;
