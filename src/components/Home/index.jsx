import React from "react";
import { graphql, StaticQuery } from "gatsby";
import styled from "styled-components";
import BackgroundImage from "gatsby-background-image";
import Card from "../Card";
import Content from "../Content";
import Title from "../Title";
import Body from "../Body";

const BackgroundSection = ({ className, children }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "black-and-white-cheesy.jpeg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 900) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      const imageData = data.desktop.childImageSharp.fluid;
      return (
        <BackgroundImage
          Tag="section"
          className={className}
          fluid={imageData}
          backgroundColor="#040e18"
        >
          {children}
        </BackgroundImage>
      );
    }}
  />
);

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100%;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
`;

const Home = () => (
  <StyledBackgroundSection>
    <Card id="home">
      <Content>
        <Title color="white" text="7th September 2019" />
        <Title color="white" text="Hartley Wintney" />
        {/* <Body
          text={
            "We're delighted that you're able to join us in celebrating our marriage " +
            "on 7th September! We've tried to provide all the info you might need here, " +
            "follow the links above for where, when, how etc."
          }
        >
          {"We're delighted that you're able to join us in celebrating our marriage " +
            "on 7th September! We've tried to provide all the info you might need here, " +
            "follow the links above for where, when, how etc."}
        </Body>
        <Body
          text={
            "Any other questions you have, that aren't covered here, give us a text, or drop us a " +
            "note on lizzyandtom2019@gmail.com and we'll be able help (hopefully!)."
          }
        /> */}
      </Content>
    </Card>
  </StyledBackgroundSection>
);

export default Home;
