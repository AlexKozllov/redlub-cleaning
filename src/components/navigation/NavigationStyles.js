import styled from "styled-components";

const NavigationStyles = styled.div`
  width: 662px;
  height: 19px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .navLink-item {
    text-decoration: none;
    color: #404040;
    font-family: "TT Travels";
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 19px;
    letter-spacing: 0.20000000298023224px;

    :hover {
      border-bottom: 2px solid #5a30f0;
      transition: border-bottom 0.2s ease-in-out;
    }
  }
  .activeNavLink {
    color: #5a30f0;
  }
`;

export { NavigationStyles };
