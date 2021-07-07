import styled from "styled-components";

const HowDoWeStyles = styled.section`
  width: 100%;
  height: 800px;
  margin-top: 194px;

  .howDoWeClean-container {
    height: 795px;
    height: 800px;
    margin: 0 auto;
  }

  .howDoWeClean-wrapper {
    width: 1094px;
    height: 113px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .howDoWeClean-header {
    width: 535px;
    height: 53px;
    font-family: "TT Travels";
    font-style: normal;
    font-weight: normal;
    font-size: 44px;
    color: #404040;
  }

  .howDoWeClean-description {
    width: 414px;
    height: 100px;
    padding-top: 15px;
    font-family: TT Travels;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 140%;
    color: #404040;
  }
`;

const RoomSlider = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 0 auto;
  margin-top: 52px;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;

  .slice-header {
    position: absolute;
    width: 136px;
    height: 21px;
    left: 53px;
    top: 35px;
    font-family: TT Travels;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 130%;
    color: #ffffff;
  }
  .slider-wrapper {
    width: 100%;
    height: 100%;
  }
  .img-wrapper {
    height: 100%;
  }
  .howDoWeClean-img {
    height: 100%;
  }
  .myDiv {
    width: 50px;
    height: 50px;
    background: red;
  }

  .roomBar {
    width: 26%;
    height: 100%;
    z-index: 100;
  }

  .slick-dots {
    color: #fff;
    width: 24%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .slick-dots__wrapper {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
    .slick-active {
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

    li {
      width: 240px;
      height: 53px;
      font-family: "TT Travels";
      font-style: normal;
      font-weight: normal;
      font-size: 44px;
      line-height: 120%;

      color: #ffffff;

      opacity: 0.7;
      text-align: start;
    }
  }
  .slider--position {
    width: 100%;

    .img-wrapper {
      margin-left: 24%;
      height: 100%;
      position: relative;
      overflow: hidden;
    }
  }
`;

export { HowDoWeStyles, RoomSlider };
