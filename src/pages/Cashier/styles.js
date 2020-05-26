import styled from "styled-components";

export const ActionTable = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;

  button {
    border: none;
    background: none;
  }

  h1 {
    color: #222;
    font-size: 16px;
    margin-bottom: 4px;
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
    border-top: 1px solid #eee;
    padding: 10px;
  }
`;

export const Action = styled.div`
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    small {
      color: ${(props) => (props.input ? "#2CA42B" : "#DE3B3B")};
      font-weight: ${(props) => (props.total ? "bold" : "normal")};
      font-size: ${(props) => (props.total ? "16px" : "14px")};
    }
  }
`;

export const Input = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr 0.5fr;
  grid-column-gap: 40px;

  input {
    margin: 0 10px;
    width: 100%;
    font-size: 14px;
    padding: 10px;
    border: 1px solid #eee;
    border-radius: 4px;
    color: #444;
    ::placeholder {
      color: #999;
    }
  }
  button {
    margin-left: 15px;
  }
`;

export const Actions = styled.div`
  overflow: auto;
  display: flex;
  flex-direction: column-reverse;
  max-height: 380px;
`;
