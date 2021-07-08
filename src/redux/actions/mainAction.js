import { createAction } from "@reduxjs/toolkit";

const menuBattonCliked = createAction("mainPage/menuBattonCliked");
const checkBoxCliked = createAction("mainPage/checkBoxCliked");
const hoverOnBox = createAction("mainPage/isHover");
const howWeDoIsible = createAction("mainPage/howWeDoIsible");

export { menuBattonCliked, checkBoxCliked, hoverOnBox, howWeDoIsible };
