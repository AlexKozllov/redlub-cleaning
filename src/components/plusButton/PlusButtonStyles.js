import styled from "styled-components";

const PlusButtonStyles = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(90, 48, 240, 0.2);
  position: absolute;
  left: ${({ xCoor }) => `${xCoor > 100 ? xCoor - 100 : xCoor}%`};
  top: ${({ yCoor }) => `${yCoor > 100 ? yCoor - 100 : yCoor}%`};
  transform: translate(-50%, -50%);
  z-index: 300;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  transition: transform 0.2s ease-in;
  ::before {
    content: "${({ message }) => message}";
    width: 190px;
    height: 0;
    border-radius: 5px;
    background: #fff;
    position: absolute;
    left: -30px;
    top: -40px;
    z-index: 500;
    opacity: 0;
    transition: opacity 0.2s ease-in;
    text-align: center;
  }
  :hover {
    ::before {
      opacity: 1;
      height: 30px;
      transition: height 0.2s ease-in, opacity 0.2s ease-in 0.1s;
    }
    width: 30px;
    height: 30px;
    transition: height 0.2s ease-in, width 0.2s ease-in;
  }
  .plusButton {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: #5a30f0;
    position: relative;
    :hover {
      transform: rotate(45deg);
      transition: transform 0.2s ease-in;
    }
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
