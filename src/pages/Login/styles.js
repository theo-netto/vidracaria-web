import styled from "styled-components";

export const Container = styled.div`
  background-color: #ffa500;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const Form = styled.form`
  background-color: #fff;
  border-radius: 8px;
  width: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  box-shadow: 0px 0px 10px #00000033;

  h1 {
    margin: 20px 0;
    font-size: 24px;
    text-align: center;
  }

  input {
    width: 280px;
    border: 1px solid #eee;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;
    margin: 20px 0;
  }

  button {
    width: 80px;
    border: 0;
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #ffa500;
    border-radius: 4px;
    color: #fff;
    font-weight: bold;
  }
`;
