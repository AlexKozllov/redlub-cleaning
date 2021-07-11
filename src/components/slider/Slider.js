import React, { useEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import shiftAnimation from "../../animation/shiftAnimation.module.css";
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

  let onImg = useOnScreen(refImg, "-40%");
  console.log("onImg: ", onImg);
  const [isVisible, currentElement] = useVisibility(refImg, -400);
  console.log("isVisible: ", isVisible);

  return (
    <SliderStyles>
      <CSSTransition
        in={onImg}
        in={isVisible}
        timeout={1000}
        classNames={shiftAnimation}
        unmountOnExit
      >
        <ul className="item-container">
          {rooms.map((item) => (
            <li key={uuidv4()} onClick={roomHandler} data-roomid={item.tid}>
              {item.title}
            </li>
          ))}
        </ul>
      </CSSTransition>
      <ul ref={refImg} className="img-container">
        <CSSTransition
          in={isVisible}
          timeout={5000}
          classNames={shiftAnimation}
          // unmountOnExit
          key={uuidv4()}
        >
          <li className="img-wrapper">
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
          </li>
        </CSSTransition>
      </ul>
    </SliderStyles>
  );
};

export default Slider;
