import React from "react";
import Card from "../Card";
import Content from "../Content";
import Title from "../Title";
import Body from "../Body";

const Home = () => (
  <Card id="home">
    <Content>
      <Title text="Lizzy & Tom" />
      <Body
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
      />
    </Content>
  </Card>
);

export default Home;
