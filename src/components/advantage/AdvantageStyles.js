import styled from "styled-components";

const AdvantageStyles = styled.section`
  margin: 0 auto;
  .advantage-list {
    width: 1320px;
    margin: 0 auto;
    margin-top: 73px;
    height: 328px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .header-item {
    width: 219px;
    margin: 0 auto;
    margin-top: 20px;
    font-family: "TT Travels";
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 31px;
    letter-spacing: 0px;
    text-align: center;
  }
`;

const ItemsCardStyles = styled.li`
  width: 300px;
  height: 100%;
  background: #f3f6fb;
  list-style: none;
  position: relative;
  border-radius: 8px;
  background-image: url(${({ img }) => img});
  background-repeat: no-repeat;
  background-position: bottom;
  ::before {
    content: "${({ description }) => description}";
    width: 239px;
    height: 268px;
    padding: 30px;
    position: absolute;
    top: 0;
    background: #5a30f0;
    font-family: "TT Travels";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0px;
    text-align: left;
    color: #fff;
    border-radius: 8px;
    opacity: 0;
    transition: opacity 0.2s ease-in;
  }
  :hover {
    ::before {
      opacity: 1;
      transition: opacity 0.2s ease-in;
    }
  }
`;

export { AdvantageStyles, ItemsCardStyles };
