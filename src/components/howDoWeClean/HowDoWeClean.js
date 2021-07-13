import React, { useEffect } from "react";
import { HowDoWeStyles, RoomSlider } from "./HowDoWeStyles";
import { v4 as uuidv4 } from "uuid";

import { useRef } from "react";
import useOnScreen from "../hooks/useOnScreen";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useDispatch } from "react-redux";
import { howWeDoIsVible } from "../../redux/actions/mainAction";
import Slider from "../slider/Slider";

const HowDoWeClean = () => {
  const dispatch = useDispatch();
  const refWrapper = useRef(null);

  let onImg = useOnScreen(refWrapper, "-430px  0% 0% 0% ");

  useEffect(() => {
    dispatch(howWeDoIsVible(onImg));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onImg]);

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

        <Slider />
      </div>
    </HowDoWeStyles>
  );
};

export default HowDoWeClean;
