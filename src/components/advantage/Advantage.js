import React from "react";
import { advantageData } from "../../Data/data";
import { AdvantageStyles, ItemsCardStyles } from "./AdvantageStyles";
import { v4 as uuidv4 } from "uuid";
import Fade from "react-reveal/Fade";

const Advantage = () => {
  return (
    <AdvantageStyles>
      <Fade bottom cascade duration={1000}>
        <ul className="advantage-list">
          {advantageData.map((item) => {
            return (
              <ItemsCardStyles
                data-curentindex={item.id}
                key={uuidv4()}
                img={item.photo}
                description={item.description}
              >
                <div>
                  <div>
                    <h4 className="header-item">{item.title}</h4>
                  </div>
                </div>
              </ItemsCardStyles>
            );
          })}
        </ul>
      </Fade>
    </AdvantageStyles>
  );
};

export default Advantage;
