import React from "react";
import Card from "../Card";
import Content from "../Content";
import Title from "../Title";
import Body from "../Body";
import Map from "./Map";

const GettingThere = () => (
  <Card id="getting-there" color="#eaeaea">
    <Content>
      <Title text="Getting There" />
      <Body
        text={"Full Address:  Taplin's Farm Ln, Hartley Wintney, Hook RG27 8XU"}
      />
      <Body
        text={
          "Parking on site is incredibly limited, so I'm afraid unless it's absolutely necessary, we would ask that you find another way there/back."
        }
      />
      <Body text="We are looking at possibly putting on a shuttle from Reading town centre in case that might make it easier for some people." />
      <Body
        text={
          "Otherwise, we would suggest getting a taxi or a lift! We are going to chat to some local firms as well to make sure there's options for everyone! OR you can stay with us!"
        }
      />
      <Map />
    </Content>
  </Card>
);

export default GettingThere;
