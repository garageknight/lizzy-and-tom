import styled from "styled-components";

const Card = styled.div`
  min-height: -webkit-fill-available;
  background-color: ${props =>
    props.color ? `${props.color}` : `rgba(254, 243, 158, 0.8)`};
  padding: 1rem 0px 1.0875rem;
  display: flex;
`;

export default Card;
