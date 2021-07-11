import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import shiftAnimation from "../../animation/shiftAnimation.module.css";
import { sliderData } from "../../Data/sliderData";
import { v4 as uuidv4 } from "uuid";
// import { sliderData } from "../../Data/sliderData";

const Slider = () => {
  const [photoId, setphotoId] = useState(0);
  const [curruntRoom, setcurruntRoom] = useState({});

  const rooms = (() => {
    return sliderData.reduce((acc, item) => {
      acc.push({ title: item.title, tid: item.id });
      return acc;
    }, []);
  })();

  const roomHandler = (e) => {
    const { roomid } = e.target.dataset;
    setphotoId(roomid);
    const curruntRoom = sliderData.find((item) => +item.id === +photoId);
    setcurruntRoom(curruntRoom);
  };

  return (
    <div>
      <CSSTransition
        in={true}
        timeout={1000}
        classNames={shiftAnimation}
        unmountOnExit
      >
        <ul className="slider-wrapper">
          {rooms.map((item) => (
            <li key={uuidv4()} onClick={roomHandler} data-roomid={item.tid}>
              {item.title}
            </li>
          ))}
        </ul>
      </CSSTransition>
      <ul>
        <CSSTransition
          in={true}
          timeout={1000}
          classNames={shiftAnimation}
          unmountOnExit
          key={uuidv4()}
        >
          <li>
            <img
              // ref={refImg}
              className="howDoWeClean-img"
              src={curruntRoom.photo}
              alt="Room`s pictures"
            />
          </li>
        </CSSTransition>
      </ul>
    </div>
  );
};

export default Slider;
