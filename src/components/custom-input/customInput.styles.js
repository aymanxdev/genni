import styled from "styled-components";

export const FormInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px;
`;

export const Input = styled.input`
  padding: 10px;
  margin: 10px 0px;
  border-radius: 5px;
  border: 1px solid gray;

  &:invalid[focused="true"] {
    border: 1px solid red;
  }
`;
export const Label = styled.div`
  font-size: 12px;
  color: gray;
  text-align: left;
`;
export const AlertMsg = styled.span`
  font-size: 12px;
  padding: 3px;
  color: red;
  display: none;
`;

// input:invalid[focused="true"] ~ span {
//   display: block;
// }
