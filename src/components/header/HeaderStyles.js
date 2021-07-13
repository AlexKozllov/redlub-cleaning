import styled from "styled-components";

const HeaderStyles = styled.div`
  width: 100%;
  height: 70px;
  position: fixed;
  z-index: 1000;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: ${({ offset }) => (offset >= 250 ? "#fff" : "transperent")};
  box-shadow: ${({ offset }) =>
    offset >= 250 ? "-1px 3px 15px 0px rgba(34, 60, 80, 0.2)" : "none"};

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
    margin-right: 45px;
    position: absolute;
    right: 0;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
  }
  .contact-information {
    height: 18px;
    margin-right: 32px;
    color: #404040;
    font-family: "TT Travels";
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 19px;
    letter-spacing: 0.20000000298023224px;
    display: none;
    @media (min-width: 666px) {
      display: block;
    }
  }
`;

export { HeaderStyles };
