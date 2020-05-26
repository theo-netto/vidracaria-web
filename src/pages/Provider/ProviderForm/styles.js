import styled from "styled-components";

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  background: #fff;
  width: 100%;
  border-radius: 4px;
  div:nth-last-child(2) {
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-column-gap: 40px;
    label {
      margin: auto 0;
      margin-top: 18px;
    }
    input {
      ::-webkit-inner-spin-button {
        -webkit-appearance: none;
      }
    }
    margin-bottom: 10px;
  }
  div:nth-last-child(1) {
    margin-top: 18px;

    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-column-gap: 40px;
    label {
      margin: auto 0;
    }
  }
`;
