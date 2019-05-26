import styled from "styled-components";

const StyledText = styled.span`
  margin: auto;
  display: table;
  font-size: ${props => `${props.size}rem` || "1rem"};
  font-family: Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans,
    Droid Sans, Helvetica Neue, sans-serif;
  ${props => (props.center ? `text-align: center` : "")}
`;

export default StyledText;
