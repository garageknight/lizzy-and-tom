import React from "react";
import Card from "../Card";
import Content from "../Content";
import Title from "../Title";
import Body from "../Body";
import BabyLizzy from "../LizzyBaby";
import FunTomAndLizzy from "../FunTomAndLizzy";
import BabyTom from "../BabyTom";

const imageStyle = { display: "inline-block", width: "32%" };

const Gifts = () => (
  <Card id="gifts" color="white">
    <Content>
      <Title text="Gifts" />
      <Body text="Your presence is the only present we need,, but if you really want to give us something, please shower us in cash! ;) Only kidding, but we've been living together for nearly 8 years and have all the toasters and crockery we could need! :)  We're heading off to Costa Rica & the Caribbean for our honeymoon so any donations towards this would be incredible, but definitely not expected." />
      <Body text="If you'd like to give us something non-monetary, we'd love it if you wanted to make us something for decoration in the house." />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <BabyTom imageStyle={imageStyle} />
        <FunTomAndLizzy imageStyle={imageStyle} />
        <BabyLizzy imageStyle={imageStyle} />
      </div>
    </Content>
  </Card>
);

export default Gifts;
