import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import StyledText from "./StyledText";

const Container = styled.div`
  padding-bottom: 2rem;
`;

const Title = ({ text }) => (
  <Container>
    <StyledText center size={2.25} style={{ fontWeight: "bold" }}>
      {text}
    </StyledText>
  </Container>
);

Title.propTypes = {
  text: PropTypes.string.isRequired
};

export default Title;
