import styled from "styled-components";
import rectangle47 from "../../../images/rectangle47.png";
import rectangle47_2x from "../../../images/rectangle47_2x.png";

const MainPageWrapper = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  .header-wrapper {
    width: 100%;
    height: 800px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
  }

  .header-picture {
    width: 100%;
    height: 100%;
    background: url(${rectangle47}) no-repeat;
    background-size: cover;
    @media (min-width: 846px) {
      width: 50%;
    }
    @media (min-width: 1920px) {
      background-position: 0px, -50px;
    }
    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
      background: url(${rectangle47_2x}) no-repeat;
      background-size: cover;
      background-position: 0px, -50px;
    }
  }

  .header-content {
    width: 50%;
    margin-bottom: 20px;
    position: absolute;
    left: 30%;
    top: 15%;
    @media (min-width: 846px) {
      position: unset;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding-left: 30px;
    }
    @media (min-width: 900px) {
      padding-left: 0;
    }
  }
  .content-wrapper {
    max-width: 401px;
    height: 250px;
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    @media (min-width: 846px) {
      margin-left: 0;
    }
  }
  .header-title {
    font-family: "TT Travels";
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0px;
    margin-left: 0px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    @media (min-width: 900px) {
      height: 357px;
      font-size: 76px;
      line-height: 84px;
    }
  }
  .header-description {
    width: 397px;
    height: 75px;
    font-family: "TT Travels";
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0px;
    display: none;
    @media (min-width: 846px) {
      display: block;
    }
  }
`;

export { MainPageWrapper };
