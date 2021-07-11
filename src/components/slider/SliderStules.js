import styled from "styled-components";

const SliderStyles = styled.div`
  height: 100%;
  height: 30vh;
  /* display: flex; */
  /* flex-direction: row;
  justify-content: center;
  align-items: center; */
  position: relative;
  .img-wrapper {
    width: 320px;
    width: 100%;
    height: auto;
    margin: 0 auto;
    position: relative;
    display: flex;
  }
  .item-container {
    width: 30%;
    position: absolute;
    left: 0;
    top: 0;
  }
  .img-container {
    width: 70%;
    position: absolute;
    left: 30%;
    top: 0;
  }
  .img {
    width: 90%;
    height: auto;
    margin: 0 auto;

    /* position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, 30%); */
  }
`;
export { SliderStyles };
