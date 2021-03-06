import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import StyledText from "./StyledText";

const Container = styled.div`
  padding-bottom: 2rem;
`;

const Body = ({ text, leftAlign }) => (
  <Container>
    <StyledText center size={1.3}>
      {text}
    </StyledText>
  </Container>
);

Body.propTypes = {
  text: PropTypes.string.isRequired
};

export default Body;
