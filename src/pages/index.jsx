import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import Home from "../components/Home";
import WelcomeText from "../components/WelcomeText";
import GettingThere from "../components/GettingThere";
import WhereToStay from "../components/WhereToStay";
import Gifts from "../components/Gifts";
import WhatToBring from "../components/WhatToBring";
import Itinerary from "../components/Itinerary";

const IndexPage = () => (
  <div style={{ width: "100%", backgroundColor: "whitesmoke" }}>
    <Layout>
      <SEO
        description="Lizzy and Tom's Wedding"
        title="Home"
        keywords={[`lizzy`, `tom`, `wedding`]}
      />
      <Home />
      <WelcomeText />
      <GettingThere />
      <WhereToStay />
      <Itinerary />
      <Gifts />
      <WhatToBring />
    </Layout>
  </div>
);

export default IndexPage;
