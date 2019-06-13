import React from "react";
import { Table } from "reactstrap";
import Card from "../Card";
import Content from "../Content";
import Title from "../Title";
// import Body from "../Body";

const Itinerary = () => (
  <Card id="itinerary" color="#eaeaea">
    <Content>
      <Title text="Itinerary" />
      <Table style={{ maxWidth: "85%", margin: "auto" }}>
        <thead>
          <tr>
            <th>Time</th>
            <th>Activity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">12:30</th>
            <td>Welcome Drinks</td>
          </tr>
          <tr>
            <th scope="row">13:30</th>
            <td>Ceremony</td>
          </tr>
          <tr>
            <th scope="row">14:30</th>
            <td>Drinks & Canapes</td>
          </tr>
          <tr>
            <th scope="row">15:30</th>
            <td>Ceilidh</td>
          </tr>
          <tr>
            <th scope="row">17:30</th>
            <td>Meal & Speeches</td>
          </tr>
          <tr>
            <th scope="row">20:00</th>
            <td>Dessert</td>
          </tr>
          <tr>
            <th scope="row">20:30</th>
            <td>Evening Band</td>
          </tr>
          <tr>
            <th scope="row">22:00</th>
            <td>Cheese & Biscuits</td>
          </tr>
          <tr>
            <th scope="row">23:30</th>
            <td>Coaches</td>
          </tr>
          <tr>
            <th scope="row">23:30+</th>
            <td>The party continues...</td>
          </tr>
        </tbody>
      </Table>
    </Content>
  </Card>
);

export default Itinerary;
