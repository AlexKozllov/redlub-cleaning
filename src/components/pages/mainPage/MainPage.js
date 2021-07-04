import React from "react";
import s from "./mainPageSyles.module.scss";
import { MainPageWrapper } from "./MainPageStyles";

const MainPage = () => {
  return (
    <MainPageWrapper>
      <h2 className={s.myH2}>Main Page</h2>
    </MainPageWrapper>
  );
};

export default MainPage;
