import React from "react";
import { useDispatch } from "react-redux";
import { menuBattonCliked } from "../../redux/actions/mainAction";
import { MeuBattonsStyles } from "./MenuButtonSyles";

const MenuBatton = () => {
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(menuBattonCliked());
  };

  return (
    <MeuBattonsStyles onClick={clickHandler}>
      <div className="button-line"></div>
      <div className="button-line"></div>
    </MeuBattonsStyles>
  );
};

export default MenuBatton;
