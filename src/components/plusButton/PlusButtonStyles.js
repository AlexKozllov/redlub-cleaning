import styled from "styled-components";

const PlusButtonStyles = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(90, 48, 240, 0.2);
  /* opacity: 0.2; */
  position: absolute;
  left: ${({ xCoor }) => `${xCoor}px`};
  top: ${({ yCoor }) => `${yCoor}px`};
  z-index: 300;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  .plusButton {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: #5a30f0;
    position: relative;
  }
  .plusWrapper {
    transform: translate(50%);
    position: absolute;
    left: calc(50% - 7px);
    top: calc(50% - 2px);
  }
  .plusButton-item {
    width: 14px;
    height: 3px;
    background: #fff;
    position: absolute;
    left: calc(50%);
    top: calc(50%);
  }
  .plusButton-item__rotate {
    transform: rotate(90deg);
  }
`;

export { PlusButtonStyles };
