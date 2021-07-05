import styled from "styled-components";

const MeuBattonsStyles = styled.div`
  width: 40px;
  height: 25px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  background: rgba(0, 0, 0, 0);
  transition: box-shadow 0.2s ease-in-out;
  :hover {
    box-shadow: 0px -2px 21px 7px rgba(34, 60, 80, 0.2),
      0px -2px 21px 7px rgba(34, 60, 80, 0.2) inset;
    transition: box-shadow 0.2s ease-in-out;
  }

  .button-line {
    width: 100%;
    height: 2px;
    background: #000;
  }
`;

export { MeuBattonsStyles };
