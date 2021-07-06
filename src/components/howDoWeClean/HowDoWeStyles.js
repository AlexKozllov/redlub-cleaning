import styled from "styled-components";

const HowDoWeStyles = styled.section`
  width: 100%;
  margin-top: 194px;
  /* display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center; */

  .howDoWeClean-container {
    height: 795px;
    height: 800px;
    margin: 0 auto;
  }

  .howDoWeClean-wrapper {
    width: 1094px;
    /* width: 100%; */
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

const ItemStyles = styled.div`
  /* & .img-wrapper {
    max-width: 1065px;
    width: 76%;
    height: 100%;
    position: relative;
    overflow: hidden;
  } */
  /* & .howDoWeClean-img {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    object-fit: cover;
  } */
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

  .slider-wrapper {
    width: 100%;
  }
  .myDiv {
    width: 50px;
    height: 50px;
    background: red;
  }
  h3 {
  }
  .roomBar {
    width: 26%;
    height: 100%;
    background: blue;
    z-index: 100;
  }

  .slick-dots {
    background-color: blue;
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
  }
  .slider--position {
    width: 100%;
    & .img-wrapper {
      /* max-width: 1065px; */
      /* width: 76%; */
      margin-left: 24%;
      height: 100%;
      position: relative;
      overflow: hidden;
    }
    /* & .howDoWeClean-img {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    object-fit: cover;
  } */
    /* margin-left: 50px; */
  }
  /* .slick-thumb {
 
  } */
`;

export { HowDoWeStyles, RoomSlider, ItemStyles };
