import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import TomAndLizzy from "../components/tom-and-lizzy"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      {/* <img src="images/tom-and-lizzy.svg" /> */}
    </div>
    <h2>Details to come...</h2>
    <TomAndLizzy />
    {/* <tomAndLizzy /> */}
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
