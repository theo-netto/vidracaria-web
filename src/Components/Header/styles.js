import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 64px;
  padding: 10px 20px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #dddddd;
  opacity: 1;
  justify-content: space-between;
  div {
    display: flex;
    align-items: center;
  }
`;

export const Logo = styled.div`
  display: flex;
  border-right: 1px solid #dddddd;
  h1 {
    margin: 0 20px 0 10px;
    font-size: 18px;
    color: #ffa500;
  }
`;

export const Span = styled.span`
  text-align: left;
  letter-spacing: 0px;
  color: ${(props) => (props.primary ? "#333" : "#999999")};
  opacity: 1;
  font-weight: bold;
  font-size: 15px;
  margin: 0 20px;
`;

export const Logout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: right;
  span {
    font-weight: bold;
    font-size: 14px;
    text-align: right;
    letter-spacing: 0px;
    color: #666666;
    opacity: 1;
  }
  small {
    font-size: 14px;
    text-align: right;
    letter-spacing: 0px;
    color: #de3b3b;
    opacity: 1;
    margin: 5px 0 0 12px;
  }
  button {
    border: 0;
    background: none;
  }
`;
