import styled from "styled-components";

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px 30px;
  background: #fff;
  width: 100%;
  border-radius: 4px;
  section {
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 16px;
    div {
      margin-right: 30px;
    }
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;

  strong {
    color: #444;
    font-weight: bold;
    text-align: left;
    margin-bottom: 9px;
  }
  textarea {
    border: 1px solid #ddd;
    border-radius: 4px;
    height: 150px;

    padding: 20px;
  }
`;
// div {
//   display: grid;
//   grid-template-columns: 3fr 1fr;
//   grid-column-gap: 40px;
// // }

export const AddressInput = styled.div`
  div {
    display: grid;
    grid-template-columns: 3fr 0.5fr;
    grid-column-gap: 80px;
  }
  div:nth-last-child(1) {
    margin: 18px 0;
    display: grid;
    grid-template-columns: 4fr 4fr 0.1fr;
    grid-column-gap: 80px;
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
  background: ${(props) => (props.finish ? "#2CA42B" : "#DE3B3B")};
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  button {
    color: #fff;
    border: none;
    background: none;
  }
  svg {
    margin-right: 7px;
  }
`;

export const Update = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
