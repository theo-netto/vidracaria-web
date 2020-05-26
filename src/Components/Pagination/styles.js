import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
`;

export const Text = styled.span`
  color: #ffa500;
  font-size: ${(props) => props.size || 14}px;
  text-transform: uppercase;
  &:not(:first-child) {
    margin: 0 10px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Button = styled.button.attrs({
  type: "button",
})`
  border: none;
  background: #ffa500;
  color: #fff;
  font-weight: bold;
  font-size: 12px;
  transition: background 300ms;
  border-radius: 4px;
  text-transform: uppercase;
  height: 23px;
  width: 23px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 2px;
  &[disabled] {
    opacity: 0.6;
    cursor: default;
  }
  &:not([disabled]):hover {
    background: #ffa500;
  }
`;
