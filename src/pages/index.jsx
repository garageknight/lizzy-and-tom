import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import Home from "../components/Home";
import GettingThere from "../components/GettingThere";
import WhereToStay from "../components/WhereToStay";
import Gifts from "../components/Gifts";
import WhatToBring from "../components/WhatToBring";

const IndexPage = () => (
  <Layout>
    <SEO
      description="Lizzy and Tom's Wedding"
      title="Home"
      keywords={[`lizzy`, `tom`, `wedding`]}
    />
    <Home />
    <GettingThere />
    <WhereToStay />
    <Gifts />
    <WhatToBring />
  </Layout>
);

export default IndexPage;
