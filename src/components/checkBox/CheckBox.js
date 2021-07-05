import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkBoxCliked } from "../../redux/actions/mainAction";
import { homeOrOffise } from "../../redux/selectors/mainSelector";
import { CheckBoxStyles } from "./CeckBoxStyles";

const CheckBox = () => {
  const dispatch = useDispatch();
  const homeOrOffiseChecked = useSelector((state) => homeOrOffise(state));

  const checkBoxHandler = () => {
    dispatch(checkBoxCliked());
  };

  return (
    <CheckBoxStyles
      onClick={checkBoxHandler}
      homeOrOffiseChecked={homeOrOffiseChecked}
    >
      <div className="content-wrapper">
        <span className="content content--isAciveHome">Дом</span>
        <span className="content content--isAciveOffise">Офис</span>
      </div>
      <div className="slider"></div>
    </CheckBoxStyles>
  );
};

export default CheckBox;
