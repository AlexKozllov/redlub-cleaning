import React from "react";
import { HowDoWeStyles } from "./HowDoWeStyles";
import kitchen from "../../images/kitchen.png";

const HowDoWeClean = () => {
  return (
    <HowDoWeStyles>
      <div className="howDoWeClean-container">
        <div className="howDoWeClean-wrapper">
          <h2 className="howDoWeClean-header">Как мы убираем</h2>
          <p className="howDoWeClean-description">
            Клинер приезжает в назначенное время со всем необходимым и сразу
            приступает к делу. Вам остаётся только оценить результат.
          </p>
        </div>
        <img className="howDoWeClean-img" src={kitchen} alt="kitchen" />
      </div>
    </HowDoWeStyles>
  );
};

export default HowDoWeClean;
