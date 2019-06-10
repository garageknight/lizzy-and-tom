/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import Header from "./Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./layout.css";

const headerHeight = 56;

const addSmoothScroll = () => {
  if (typeof window !== "undefined") {
    // eslint-disable-next-line global-require
    require("smooth-scroll")('a[href*="#"]', {
      offset: () => headerHeight
    });
  }
};

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        {addSmoothScroll()}
        <Header
          height={headerHeight}
          siteTitle={data.site.siteMetadata.title}
        />
        <div
          style={{
            // backgroundImage: `url("https://s3-eu-west-1.amazonaws.com/www.lizzyandttom.com/tom-and-lizzy.svg")`,
            // backgroundColor: "rgb(236, 227, 223)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center bottom",
            backgroundAttachment: "fixed",
            backgroundSize: 350,
            marginTop: `${headerHeight}px`,
            padding: `1.45rem 0px 0px`,
            paddingTop: 0,
            maxWidth: 960,
            marginRight: "auto",
            marginLeft: "auto"
          }}
        >
          <main>{children}</main>
          {/* <footer /> */}
        </div>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
