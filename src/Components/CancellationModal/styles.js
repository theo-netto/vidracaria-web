import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    color: #222;
    font-size: 16px;
    margin-bottom: 14px;
    text-align: center;
  }
  strong {
    color: #444;
    font-size: 16px;
    margin-bottom: 4px;
  }
  small {
    font-size: 14px;

    color: #666;
    line-height: 25px;
  }

  div + div {
    padding: 10px;
    text-align: center;
  }
`;

export const Button = styled.div`
  padding: 16px;
  margin: 10px auto;
  height: 36px;
  max-width: 148px;
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  border: 0;
  border-radius: 4px;
  background: #de3b3b;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  button {
    color: #fff;
  }
  svg {
    margin-right: 7px;
  }
`;
