import styled from "styled-components";
import rectangle47 from "../../images/rectangle47.png";

const HeaderStyles = styled.div`
  /* margin: 10px; */
  width: 100%;
  height: 70px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .logo-container {
    width: 248px;
    height: 31px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-left: 54px;
  }

  .logo {
    width: 99px;
    height: 25px;

    fill: #404040;
  }

  .navigation-box {
    width: 73%;
    /* margin-top: 25px; */
    margin-right: 45px;
    position: absolute;
    right: 0;
    /* top: 0; */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 1293px) {
      /* width: 26%; */
      width: 250px;
    }
  }
  & .contact-information {
    width: 250px;
    height: 18px;
    color: #404040;

    font-family: "TT Travels";
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 19px;
    letter-spacing: 0.20000000298023224px;
  }
`;

const HeaderWrapper = styled.section`
  width: 100%;
  height: 800px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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
    text-align: left;
  }
`;

export { HeaderStyles, HeaderWrapper };
