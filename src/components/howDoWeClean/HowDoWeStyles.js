import styled from "styled-components";

const HowDoWeStyles = styled.section`
  width: 100%;
  height: auto;
  margin-top: 194px;

  .howDoWeClean-container {
    margin: 0 auto;
    height: auto;
  }

  .howDoWeClean-wrapper {
    width: 320px;
    height: 113px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    @media (min-width: 750px) {
      width: 100%;
      min-width: 740px;
      flex-direction: row;
      justify-content: space-around;
    }
    @media (min-width: 1440px) {
      width: 1094px;
      justify-content: space-between;
    }
    @media (min-width: 1920px) {
      width: 1440px;
      justify-content: space-between;
    }
  }

  .howDoWeClean-header {
    width: 310px;
    height: 53px;
    font-family: "TT Travels";
    font-style: normal;
    font-weight: normal;
    font-size: 35px;
    color: #404040;
    @media (min-width: 425px) {
      width: 414px;
      font-size: 44px;
    }
  }

  .howDoWeClean-description {
    width: 300px;
    height: 100px;
    padding-top: 15px;
    font-family: TT Travels;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 140%;
    color: #404040;
    @media (min-width: 540px) {
      width: 414px;

      font-size: 18px;
    }
  }
`;

export { HowDoWeStyles };
