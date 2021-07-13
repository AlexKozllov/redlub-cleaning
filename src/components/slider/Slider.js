import React, { useEffect, useMemo, useRef, useState } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import shiftAnimation from "../../animation/shiftAnimation.module.css";

import { sliderData } from "../../Data/sliderData";

import { v4 as uuidv4 } from "uuid";
import PlusButton from "../plusButton/PlusButton";
import { SliderStyles, SwchItem } from "./SliderStules";

import useVisibility from "../hooks/useVisible";
const Slider = () => {
  const [curruntRoom, setcurruntRoom] = useState({});
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

    setSurrentId(roomid);
  };

  const findCurruntRoom = (id) => sliderData.find((item) => +item.id === +id);

  const refImg = useRef(null);

  const [isVisible, coord] = useVisibility(refImg, -90);
  const isVisibleMemo = useMemo(() => isVisible, [isVisible]);

  const slidetTogler = () => {
    setSliderTogler(!sliderTogler);
  };
  return (
    <SliderStyles isVisible={isVisibleMemo} sliderTogler={sliderTogler}>
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
        <div className="bg-transition" bgphoto={curruntRoom.photo}>
          <SwitchTransition mode="in-out">
            <CSSTransition
              key={uuidv4()}
              in={sliderTogler}
              timeout={1000}
              classNames={shiftAnimation}
            >
              <SwchItem
                isVisible={isVisibleMemo}
                ref={refImg}
                key={uuidv4()}
                className="img-container"
              >
                <div className="img-wrapper">
                  <img
                    className="img"
                    src={curruntRoom.photo}
                    alt="Room`s pictures"
                  />
                  {curruntRoom.plusButtons &&
                    curruntRoom.plusButtons.length > 0 &&
                    curruntRoom.plusButtons.map(
                      (itemBtn) =>
                        isVisible && (
                          <PlusButton
                            key={uuidv4()}
                            xCoor={(itemBtn.xCoor / coord.width) * 100}
                            yCoor={(itemBtn.yCoor / coord.height) * 100}
                            message={itemBtn.message}
                          />
                        )
                    )}
                </div>
              </SwchItem>
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>
    </SliderStyles>
  );
};

export default Slider;
