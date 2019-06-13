import React from "react";
import Card from "../Card";
import Content from "../Content";
import Title from "../Title";
import Body from "../Body";
import A from "../LizzyAndTomMalta";

const WhatToBring = () => (
  <Card id="what-to-bring" color="#eaeaea">
    <Content>
      <Title text="What To Bring" />
      <Body text="Depending on the weather  (we're praying for sun), it might be worth bringing some wellies/a jumper or umbrella. If it's been nice and warm the only thing we would recommend is that the ladies avoid stilletos to avoid getting stuck, probably worth bringing a shawl or jumper too! Those of you who want to camp/stay, bring a bag and you can whack it in your assigned tent. " />
      <Title text="See you there!" />
      <A imageStyle={{ width: "60%", margin: "0px auto" }} />
    </Content>
  </Card>
);

export default WhatToBring;
