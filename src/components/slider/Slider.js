import React, { useEffect, useRef, useState } from "react";
import {
  CSSTransition,
  TransitionGroup,
  SwitchTransition,
} from "react-transition-group";
import shiftAnimation from "../../animation/shiftAnimation.module.css";
import shiftAnimationSlider from "../../animation/shiftAnimationSlider.module.css";
// import shiftAnimation from "../../animation/shiftAnimation.module.css";
// import shiftAnimation from "../../animation/shiftAnimation.module.css";
import { sliderData } from "../../Data/sliderData";

import { v4 as uuidv4 } from "uuid";
import PlusButton from "../plusButton/PlusButton";
import { SliderStyles } from "./SliderStules";
import useOnScreen from "../hooks/useOnScreen";
import useVisibility from "../hooks/useVisible";

const Slider = () => {
  const [curruntRoom, setcurruntRoom] = useState({});
  // const [prevRoom, setPrevRoom] = useState({});
  const [surrentId, setSurrentId] = useState(0);
  const [sliderTogler, setSliderTogler] = useState(true);

  useEffect(() => {
    setcurruntRoom(findCurruntRoom(0));
  }, []);

  const rooms = (() => {
    return sliderData.reduce((acc, item) => {
      acc.push({ title: item.title, tid: item.id });
      return acc;
    }, []);
  })();

  const roomHandler = (e) => {
    const { roomid } = e.target.dataset;
    slidetTogler();
    setcurruntRoom(findCurruntRoom(roomid));
    // setPrevRoom(findPrevRoom(roomid));
    setSurrentId(roomid);
  };

  const findCurruntRoom = (id) => sliderData.find((item) => +item.id === +id);
  // const findPrevRoom = (id) => sliderData.find((item) => +item.id === +id - 1);

  const refImg = useRef(null);

  const [isVisible] = useVisibility(refImg, -90);

  const slidetTogler = () => {
    setSliderTogler(!sliderTogler);
    // setSliderTogler(true);
  };

  return (
    <SliderStyles isVisible={isVisible}>
      <div className="slider-container">
        <div className="slick-dots">
          <h6 className="slice-header">Как мы убираем</h6>
          <ul className="item-container">
            {rooms.map((item) => (
              <li
                key={uuidv4()}
                onClick={roomHandler}
                className={+surrentId === +item.tid ? "slick-active" : ""}
                data-roomid={item.tid}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>
        <SwitchTransition mode="in-out">
          <CSSTransition
            key={uuidv4()}
            in={sliderTogler}
            timeout={1000}
            classNames={shiftAnimation}
            // unmountOnExit
            // addEndListener={(node, done) => {
            //   node.addEventListener("transitionend", done, false);
            // }}
          >
            <div ref={refImg} key={uuidv4()} className="img-container">
              <div className="img-wrapper">
                <img
                  className="img"
                  src={curruntRoom.photo}
                  alt="Room`s pictures"
                />
                {curruntRoom.plusButtons &&
                  curruntRoom.plusButtons.length > 0 &&
                  curruntRoom.plusButtons.map((itemBtn) => (
                    <PlusButton
                      key={uuidv4()}
                      xCoor={itemBtn.xCoor}
                      yCoor={itemBtn.yCoor}
                      message={itemBtn.message}
                    />
                  ))}
              </div>
            </div>
          </CSSTransition>
        </SwitchTransition>
      </div>
    </SliderStyles>
  );
};

export default Slider;
