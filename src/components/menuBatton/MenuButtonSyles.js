import styled from "styled-components";

const MeuBattonsStyles = styled.div`
  /* margin: 10px; */

  width: 20px;
  height: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  &&& .button-line {
    width: 100%;
    height: 2px;
    background: #000;
  }
`;

export { MeuBattonsStyles };
