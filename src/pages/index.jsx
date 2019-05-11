import React from "react";
// import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`lizzy`, `tom`, `wedding`]} />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }} />
    <h2>Details to come...</h2>
    <img
      alt="invite"
      src="https://s3-eu-west-1.amazonaws.com/www.lizzyandttom.com/tom-and-lizzy.svg"
    />
    {/* <TomAndLizzy /> */}
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
);

export default IndexPage;
