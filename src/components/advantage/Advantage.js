import React from "react";
import { useState } from "react";
import { advantageData } from "../../Data/data";
import { AdvantageStyles, ItemsCardStyles } from "./AdvantageStyles";
import { v4 as uuidv4 } from "uuid";
import { CSSTransition } from "react-transition-group";
import shiftAnimation from "../../animation/shiftAnimation.module.css";

const Advantage = () => {
  const [idCard, setIdCard] = useState(null);

  const mouseEnterkHandler = (e) => {
    const { curentindex } = e.target.dataset;
    setIdCard(curentindex);
  };
  const mouseLiveHandler = (e) => {
    setIdCard(null);
  };

  return (
    <AdvantageStyles>
      <ul className="advantage-list">
        {advantageData.map((item) => {
          return (
            <ItemsCardStyles
              data-curentindex={item.id}
              key={uuidv4()}
              img={item.photo}
              onMouseEnter={mouseEnterkHandler}
              onMouseLeave={mouseLiveHandler}
            >
              <div>
                <h4 className="header-item">{item.title}</h4>
              </div>

              <CSSTransition
                in={+idCard === +item.id}
                classNames={shiftAnimation}
                timeout={250}
                unmountOnExit
              >
                <div data-curentindex={item.id} className="hover-item">
                  <p>{item.description}</p>
                </div>
              </CSSTransition>
            </ItemsCardStyles>
          );
        })}
      </ul>
    </AdvantageStyles>
  );
};

export default Advantage;
