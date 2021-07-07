import React from "react";
import { PlusButtonStyles } from "./PlusButtonStyles";

const PlusButton = () => {
  return (
    <PlusButtonStyles>
      <div className="plusButton">
        <div className="plusWrapper">
          <div className="plusButton-item"></div>
          <div className="plusButton-item plusButton-item__rotate"></div>
        </div>
      </div>
    </PlusButtonStyles>
  );
};

export default PlusButton;
