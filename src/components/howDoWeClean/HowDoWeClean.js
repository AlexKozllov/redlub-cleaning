import React from "react";
import { HowDoWeStyles, RoomSlider } from "./HowDoWeStyles";

import { useRef } from "react";
import useOnScreen from "../hooks/useOnScreen";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { sliderData } from "../../Data/sliderData";
import { CSSTransition } from "react-transition-group";
import shiftAnimation from "../../animation/shiftAnimation.module.css";
import scaleAnimation from "../../animation/scaleAnimation.module.css";

import PlusButton from "../plusButton/PlusButton";

const HowDoWeClean = () => {
  const refWrapper = useRef();
  const refBar = useRef();
  const onWrapper = useOnScreen(refWrapper, "70% 0px 0px 0px");
  console.log("onWrapper: ", onWrapper);
  const onBar = useOnScreen(refWrapper, "-650px  0% 0% 0% ");
  console.log("onBar: ", onBar);

  const rooms = (() => {
    return sliderData.reduce((acc, item) => {
      acc.push(item.title);
      return acc;
    }, []);
  })();

  const settings = {
    customPaging: function (i) {
      return <div>{rooms[i]}</div>;
    },
    appendDots: (dots) => {
      return (
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
      );
    },
    arrows: false,
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    className: "slider--position",
    infinite: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <HowDoWeStyles ref={refWrapper}>
      <div className="howDoWeClean-container">
        <div className="howDoWeClean-wrapper">
          <h2 className="howDoWeClean-header">Как мы убираем</h2>
          <p className="howDoWeClean-description">
            Клинер приезжает в назначенное время со всем необходимым и сразу
            приступает к делу. Вам остаётся только оценить результат.
          </p>
        </div>

        <CSSTransition in={onWrapper} timeout={500} classNames={scaleAnimation}>
          <RoomSlider>
            <div className="slider-wrapper" ref={refBar}>
              <Slider {...settings}>
                {sliderData.map((item) => (
                  <div key={item.id} className="img-wrapper">
                    {item.plusButtons.map((itemBtn) => (
                      <PlusButton
                        xCoor={itemBtn.xCoor}
                        yCoor={itemBtn.yCoor}
                        message={itemBtn.message}
                      />
                    ))}

                    <img
                      className="howDoWeClean-img"
                      src={item.photo}
                      alt="Room`s pictures"
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </RoomSlider>
        </CSSTransition>
      </div>
    </HowDoWeStyles>
  );
};

export default HowDoWeClean;
