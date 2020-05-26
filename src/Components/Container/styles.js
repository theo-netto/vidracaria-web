import styled from "styled-components";

export const Container = styled.div`
  margin-top: 25px;
  display: flex;
  justify-content: center;
  padding: 0 120px;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1200px;
  > section {
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
  }
`;
