import React from "react";
import { CSSTransition } from "react-transition-group";

const Slider = () => {
  return (
    <div className="slider-wrapper">
      <CSSTransition
        in={onBar}
        timeout={1000}
        classNames={shiftAnimation}
        unmountOnExit
      >
        <div
          style={{
            backgroundColor: "#5A30F0",
          }}
        >
          <h6 className="slice-header">Как мы убираем</h6>
          <ul className="slick-dots__wrapper" style={{ margin: "0px" }}>
            {dots}
          </ul>
        </div>
      </CSSTransition>
    </div>
  );
};

export default Slider;
