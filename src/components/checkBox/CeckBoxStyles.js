import styled from "styled-components";

const CheckBoxStyles = styled.div`
  width: 131px;
  height: 37px;
  background: #fff;
  background: red;
  border-radius: 18px;
  display: flex;
  flex-direction: row;
  justify-content: ${({ homeOrOffiseChecked }) => {
    if (homeOrOffiseChecked === "offise") {
      return "flex-end";
    }
    if (homeOrOffiseChecked === "home") {
      return "flex-start";
    }
  }};
  align-items: center;
  padding: 3px;
  position: relative;
  .content-wrapper {
    position: absolute;
    width: 101px;
    height: 15px;
    left: calc(50% - 50px);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .content {
    font-family: TT Travels;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    letter-spacing: 0px;
    color: #636c81;
  }
  .content--isAciveHome {
    color: ${({ homeOrOffiseChecked }) => {
      if (homeOrOffiseChecked === "home") {
        return "#fff";
      }
    }};
  }

  .content--isAciveOffise {
    color: ${({ homeOrOffiseChecked }) => {
      if (homeOrOffiseChecked === "offise") {
        return "#fff";
      }
    }};
  }

  .slider {
    width: 55px;
    height: 31px;
    background: #5a30f0;
    border-radius: 15px;
  }
`;

export { CheckBoxStyles };
