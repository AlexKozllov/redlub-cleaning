import React, { useEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
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
    setcurruntRoom(findCurruntRoom(roomid));
  };

  const findCurruntRoom = (id) => sliderData.find((item) => +item.id === +id);

  const refImg = useRef(null);

  let onImg = useOnScreen(refImg, "-90%");
  console.log("onImg: ", onImg);
  const [isVisible] = useVisibility(refImg, -90);

  // console.log("isVisible: ", isVisible);

  return (
    <SliderStyles isVisible={isVisible}>
      <div className="slider-container">
        <CSSTransition
          in={isVisible}
          in={true}
          timeout={2000}
          classNames={shiftAnimation}
          unmountOnExit
        >
          <div className="slick-dots">
            <h6 className="slice-header">Как мы убираем</h6>
            <ul className="item-container">
              {rooms.map((item) => (
                <li key={uuidv4()} onClick={roomHandler} data-roomid={item.tid}>
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
        </CSSTransition>
        {/* <CSSTransition
        in={isVisible}
        in={true}
        timeout={1000}
        classNames={shiftAnimationSlider}
        // unmountOnExit
      > */}
        <ul ref={refImg} className="img-container">
          <CSSTransition
            in={true}
            timeout={5000}
            classNames={shiftAnimation}
            // unmountOnExit
            key={uuidv4()}
          >
            <li key={uuidv4()} className="img-wrapper">
              <img
                className="img"
                src={curruntRoom.photo}
                alt="Room`s pictures"
              />
              {/* {curruntRoom.plusButtons &&
                curruntRoom.plusButtons.length > 0 &&
                curruntRoom.plusButtons.map((itemBtn) => (
                  <PlusButton
                    key={uuidv4()}
                    xCoor={itemBtn.xCoor}
                    yCoor={itemBtn.yCoor}
                    message={itemBtn.message}
                  />
                ))} */}
            </li>
          </CSSTransition>
        </ul>
        {/* </CSSTransition> */}
      </div>
    </SliderStyles>
  );
};

export default Slider;
