import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 12px 24px;
  background-color: ${props => props.red ? '#FF0000' : '#00FF00'};
  color: black;
`