import React from "react";
import Card from "../Card";
import Content from "../Content";
import Title from "../Title";
import Body from "../Body";
import Pods from "../Pods";
import Tents from "../Tents";

const WhereToStay = () => (
  <Card id="where-to-stay">
    <Content>
      <Title text="Where To Stay / Camping" />
      <Body text="The field is very close by to several towns & villages with Air bnbs, hotels etc. A bit of googling will show you where to stay." />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Pods imageStyle={{ width: "45%", marginBottom: 10 }} />
        <Tents imageStyle={{ width: "45%", marginBottom: 10 }} />
      </div>
      <Body text="Camping! We are going to be spending the wedding night in the field in Mandy and Gary's wonderful caravan and would welcome anybody who would also like to stay to do so, we just need to know beforehand." />
      <Body text="We will be pitching tents ahead of time, providing bedding etc. so you will just need to bring yourselves and a change of clothes. The party will most likely go into the small hours, we have a fire pit and the music only needs to be turned down at midnight, so we'd love it if you'd like to stay with us!" />
      <Body text="There are also two sleeping Pods, one of which sleeps 7 people in bunk beds (1 double bed the rest singles) and another that sleeps about 6 on blow up beds, so this is also an option for those of you that don't mind sharing! The pods may be useful for those of you with little ones who need to put them down for a nap/sleep earlier than you fancy leaving too, so the dancing can continue! " />
      <Body text="If that's not enough to convince you to stay, Tom's lovely parents Mandy & Gary have offered to come and cook us some bacon (or veggie equivalent) sarnies the next day!" />
    </Content>
  </Card>
);

export default WhereToStay;
