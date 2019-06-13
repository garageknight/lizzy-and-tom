import styled from "styled-components";

const StyledText = styled.span`
  margin: auto;
  display: table;
  font-size: ${props => `${props.size}rem` || "1.3rem"};
  font-family: "Cormorant Garamond", Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
    Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  /* ${props => (props.center ? `text-align: center` : "")} */
  text-align: center;

  color: ${props => (props.color ? `${props.color}` : "black")}
`;

export default StyledText;
