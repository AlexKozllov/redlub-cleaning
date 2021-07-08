import styled from "styled-components";

const StickyButtonStyles = styled.div`
  width: 600px;
  height: 600px;
  background: transparent;
  position: fixed;
  top: 35vh;
  left: 50vw;
  transform: translate(-50%, 0%);
  z-index: 800;

  .btn-body {
    width: 195px;
    height: 195px;
    background: #5a30f0;
    border-radius: 50%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: ${({ elX, elY, elW, elH }) =>
      `${elX > 0 && elX < elW && elY > 0 && elY < elW ? `${elX}px` : "50%"}`};

    top: ${({ elX, elY, elW, elH }) =>
      `${elX > 0 && elX < elW && elY > 0 && elY < elW ? `${elY}px` : "95%"}`};
    transform: translate(-50%, -50%);
    transition: left 0.2s ease-in, top 0.2s ease-in;
    box-shadow: none;

    :hover {
      box-sizing: content-box;
      box-shadow: 0px 0px 0px 68px rgba(90, 48, 240, 0.13);
      transition: box-shadow 0.2s ease-in;
    }
  }
  .btn-text {
    width: 165px;
    height: 102px;
    font-family: TT Travels;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 130%;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    color: #ffffff;
    transform: rotate(-15deg);
  }
`;

export { StickyButtonStyles };
