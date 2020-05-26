import styled from "styled-components";

export const UnInput = styled.input`
  padding: 0 15px;
  font-size: 14px;
  color: #444;
  border-radius: 4px;
  &::placeholder {
    color: #999;
  }
  height: 38px;
  align-items: center;
  background-color: hsl(0, 0%, 100%);
  border-color: hsl(0, 0%, 80%);
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  strong {
    color: #444;
    font-weight: bold;
    text-align: left;
    margin-bottom: 9px;
  }
`;
