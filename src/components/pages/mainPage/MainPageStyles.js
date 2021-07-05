import styled from "styled-components";
import rectangle47 from "../../../images/rectangle47.png";

const MainPageWrapper = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  margin: 0 auto;
  .heade_wrapper {
    width: 100%;
    height: 800px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .header-picture {
    width: 50%;
    height: 100%;
    background: url(${rectangle47}) no-repeat;
    background-size: cover;
  }

  .header-content {
    width: 50%;
    margin-top: 30px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .header-wrapper {
    width: 401px;
    height: 252px;
  }
  .header-title {
    font-family: TT Travels;
    font-size: 76px;
    font-style: normal;
    font-weight: 400;
    line-height: 84px;
    letter-spacing: 0px;
    text-align: left;
  }
  .header-description {
    width: 397px;
    height: 75px;
    //styleName: 1440 / Text;
    font-family: TT Travels;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0px;
  }
`;

export { MainPageWrapper };
