import React from "react";
import { HowDoWeStyles, RoomSlider, ItemStyles } from "./HowDoWeStyles";
import kitchenbg from "../../images/kitchenbg.jpg";
import { useRef } from "react";
import { useOnScreen } from "../hooks/useOnScreen";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HowDoWeClean = () => {
  const ref = useRef();

  const onScreen = useOnScreen(ref, "-470px");
  console.log("onScreen: ", onScreen);

  const settings = {
    customPaging: function (i) {
      return <a>Кухня</a>;
    },
    arrows: false,
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    className: "slider--position",
    infinite: true,
    // fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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
    <HowDoWeStyles ref={ref}>
      <div className="howDoWeClean-container">
        <div className="howDoWeClean-wrapper">
          <h2 className="howDoWeClean-header">Как мы убираем</h2>
          <p className="howDoWeClean-description">
            Клинер приезжает в назначенное время со всем необходимым и сразу
            приступает к делу. Вам остаётся только оценить результат.
          </p>
        </div>
        <RoomSlider>
          {/* <div className="roomBar">asdfsdf</div> */}
          <div className="slider-wrapper">
            <Slider {...settings}>
              <Item />
              <Item />
              <Item />
              <Item />
            </Slider>
          </div>
          {/* </div> */}
          {/* <div className="img-wrapper">
            <img className="howDoWeClean-img" src={kitchenbg} alt="kitchen" />
          </div> */}
        </RoomSlider>
      </div>
    </HowDoWeStyles>
  );
};

const Item = () => {
  return (
    <ItemStyles>
      <div className="img-wrapper">
        <img className="howDoWeClean-img" src={kitchenbg} alt="kitchen" />
      </div>
    </ItemStyles>
  );
};

export default HowDoWeClean;
