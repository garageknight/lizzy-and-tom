import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import StyledText from "./StyledText";

const Container = styled.div`
  padding-bottom: 2rem;
`;

const Title = ({ text, color }) => (
  <Container>
    <StyledText
      style={{ fontFamily: "Cormorant SC", color: color || "black" }}
      center
      size={2.75}
    >
      {text}
    </StyledText>
  </Container>
);

Title.defaultProps = {
  color: "black"
};

Title.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string
};

export default Title;
