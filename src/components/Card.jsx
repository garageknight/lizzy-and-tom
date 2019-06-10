import styled from "styled-components";

const Card = styled.div`
  min-height: -webkit-fill-available;
  background-color: ${props =>
    props.color ? `${props.color}` : "transparent"};
  padding: 1rem 0px 1.0875rem;
  display: flex;
  /* width: 75%; */
`;

export default Card;
