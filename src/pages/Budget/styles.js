import styled from "styled-components";

export const Grid = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 400px;
  > section {
    display: grid;
    padding-left: 25px;
    padding-right: 13px;
    grid-template-columns: 0.5fr 0.8fr 2fr 2fr 0.5fr 1fr;
    strong:last-child {
      text-align: right;
    }
    strong {
      font-size: 16px;
      color: #444;
    }
    margin-bottom: 15px;
  }
  > div + div {
    margin-top: 20px;
  }
`;

export const CheckBox = styled.div`
  display: flex;
  align-items:center;

  small{
    margin-right: 5px;
    font-weight:bold;
  }
`;
