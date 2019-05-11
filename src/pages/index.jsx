import React from "react";
// import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import TomAndLizzy from "../components/tom-and-lizzy";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`lizzy`, `tom`, `wedding`]} />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }} />
    <h2>Details to come...</h2>
    <TomAndLizzy />
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
);

export default IndexPage;
