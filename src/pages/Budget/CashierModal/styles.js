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
    border-top: 1px solid #eee;
  }
`;

export const Action = styled.div`
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    small {
      color: ${(props) => (props.input ? "#2CA42B" : "#DE3B3B")};
      font-weight: ${(props) => (props.total ? "bold" :"normal")};
      font-size: ${(props) => (props.total ? "16px" :"14px")}
    }
  }
`;

export const Input = styled.div`
  display: flex;
  align-items: center;

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
