import React from "react";
import { MainPageWrapper } from "./MainPageStyles";

const MainPage = () => {
  return (
    <MainPageWrapper className="heade_wrapper">
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
    </MainPageWrapper>
  );
};

export default MainPage;
