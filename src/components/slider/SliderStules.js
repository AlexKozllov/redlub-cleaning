import styled, { css, keyframes } from "styled-components";

const slip = keyframes`
  from {
    left: 50%;
    /* top:0; */
  }

  to {
   left: 60%;
    /* top:-10%; */

  }
`;
const slipDots = keyframes`
  from {
    left: -30%;
    /* top:0; */
  }

  to {
   left: 11%;
    /* top:-10%; */

  }
`;

const slipAnimation = css`
  animation: ${slip} 1s ease-in;
  animation-fill-mode: forwards;
`;

const slipDotsAnimation = css`
  animation: ${slipDots} 1s ease-in 1s;
  animation-fill-mode: forwards;
`;

const SliderStyles = styled.div`
  /* height: 67vh; */
  overflow: hidden;
  width: 99vw;
  height: 50vw;
  max-height: 800px;
  /* height: min-content; */
  margin-top: 52px;
  position: relative;
  scr .slider-container {
    width: 100%;
    /* width: 100vh; */
    height: 100%;
  }

  .img-container {
    width: 80%;
    /* width: 100vh; */
    position: absolute;
    left: 50%;
    ${({ isVisible }) => isVisible && slipAnimation}

    transform: translateX(-50%);

    .img-wrapper {
      /* width: 320px; */
      width: 100%;
      height: auto;
      margin: 0 auto;

      display: flex;
      height: 100%;
      position: relative;
      .img {
        /* overflow: hidden; */
        width: 100%;
        height: auto;
        margin: 0 auto;
      }
    }
  }

  .slick-dots {
    color: #fff;
    width: 23%;
    height: 100%;
    position: absolute;
    top: 0;
    left: -30%;
    z-index: 500;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #5a30f0;
    transform: translate(-50%, 0);
    ${({ isVisible }) => isVisible && slipDotsAnimation}

    .slice-header {
      position: absolute;
      width: 136px;
      height: 21px;
      left: 53px;
      top: 35px;
      background: #5a30f0;
      font-family: "TT Travels";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 130%;
      color: #ffffff;
    }
    .item-container {
      /* width: 30%; */
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      position: absolute;
      left: 0;
      top: 0;
      z-index: 500;
    }
  }

  /*  .slick-active {
      position: relative;
      transform: translate(50px);
      transition: transform 0.3s ease-in;
      font-style: italic;
      opacity: 1;
      ::before {
        content: "→";
        width: 30px;
        height: 100%;
        position: absolute;
        left: -50px;
        top: 0;
        transition: width 0.3s ease-in;
      }
    }
  } */
`;

export { SliderStyles };
