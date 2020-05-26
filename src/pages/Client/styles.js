import styled from "styled-components";

export const Grid = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 400px;
  > section {
    display: grid;
    padding-left: 25px;
    padding-right: 13px;
    grid-template-columns: 0.5fr 2fr 2fr 1fr 1fr;
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
