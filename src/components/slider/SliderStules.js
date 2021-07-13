import styled, { css, keyframes } from "styled-components";

const slip = keyframes`
  from {
    left: 50%;
  }

  to {
   left: 60%;
   }
`;
const slipDots = keyframes`
  from {
    left: -30%;
  }

  to {
   left: 11%;

  }
`;

const slipitemDot = keyframes`
  from {
    left: 0%;
  }

  to {
   left: 15%;
  }
`;

const slipAnimation = css`
  animation: ${slip} 1s ease-in;
  animation-fill-mode: forwards;
`;

const slipDotsAnimation = css`
  animation: ${slipDots} 1s ease-in 0.5s;
  animation-fill-mode: forwards;
`;

const slipitemDotAnimation = css`
  animation: ${slipitemDot} 0.3s ease-in;
  animation-fill-mode: forwards;
`;

const SliderStyles = styled.div`
  width: 99vw;
  height: 50vw;
  max-height: 800px;
  margin-top: 52px;
  position: relative;
  .slider-container {
    width: 100%;
    height: 100%;
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
      left: 0px;
      top: 0px;
      background: #5a30f0;
      font-family: "TT Travels";
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 130%;
      color: #ffffff;
      display: none;
      @media (min-width: 600px) {
        display: block;
        left: 0px;
        top: 35px;
      }
      @media (min-width: 1024px) {
        left: 53px;
        font-size: 16px;
      }
    }
    .item-container {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      position: absolute;
      left: 0;
      top: 0;
      z-index: 500;
      margin-top: 20px;
      @media (min-width: 540px) {
        margin-top: 0;
      }
      .slick-active {
        position: relative;

        ${() => slipitemDotAnimation}
        font-style: italic;
        opacity: 1;
        ::before {
          content: "→";
          width: 30px;
          height: 100%;
          position: absolute;
          left: -50px;
          top: 0;
        }
      }
      li {
        width: 240px;
        height: 53px;
        margin-left: 20px;
        font-family: "TT Travels";
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 120%;
        color: #ffffff;
        opacity: 0.7;
        text-align: start;

        @media (min-width: 425px) {
          font-size: 16px;
        }
        @media (min-width: 600px) {
          margin-left: 40px;
        }
        @media (min-width: 1024px) {
          font-size: 30px;
        }
        @media (min-width: 1440px) {
          margin-left: 60px;
          font-size: 44px;
        }
      }
    }
  }
  .bg-transition {
    width: 100%;
    height: 100%;
    background-position-x: 100%;
    ${({ isVisible }) => isVisible && slipAnimation}
  }
`;

const SwchItem = styled.div`
  width: 80%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  .img-wrapper {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    height: 100%;
    position: relative;
    z-index: 500;
    .img {
      width: 100%;
      height: auto;
      margin: 0 auto;
    }
  }
`;
export { SliderStyles, SwchItem };
