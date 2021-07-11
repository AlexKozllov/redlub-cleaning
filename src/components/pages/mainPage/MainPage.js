import React from "react";
import { useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { visibleHowWeDo } from "../../../redux/selectors/mainSelector";
import Advantage from "../../advantage/Advantage";
import HowDoWeClean from "../../howDoWeClean/HowDoWeClean";
import StickyButton from "../../stickyButton/StickyButton";
import scaleBtn from "../../../animation/scaleBtn.module.css";

import { MainPageWrapper } from "./MainPageStyles";

const MainPage = () => {
  const isVisibleHowWeDo = useSelector((state) => visibleHowWeDo(state));
  console.log("isVisibleHowWeDo: ", isVisibleHowWeDo);

  return (
    <MainPageWrapper>
      <div className="header-wrapper">
        <div className="header-picture"></div>
        <div className="header-content">
          <div className="content-wrapper">
            <h1 className="header-title">Уборка квартир в Киеве</h1>
            <p className="header-description">
              Мы уберем у вас дома или в офисе. Наведем чистоту после ремонта и
              проведем генеральную уборку.
            </p>
          </div>
        </div>
      </div>

      <CSSTransition
        in={!isVisibleHowWeDo}
        timeout={500}
        classNames={scaleBtn}
        unmountOnExit
      >
        <StickyButton />
      </CSSTransition>
      <Advantage />
      <HowDoWeClean />
    </MainPageWrapper>
  );
};

export default MainPage;
