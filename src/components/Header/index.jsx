import React from "react";
import { Link } from "gatsby";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import styled from "styled-components";

const sectionObjs = [
  { loc: "/#home", name: "Home" },
  { loc: "/#getting-there", name: "Getting There" },
  { loc: "/#where-to-stay", name: "Where To Stay" },
  { loc: "/#gifts", name: "Gifts" },
  { loc: "/#what-to-bring", name: "What To Bring" }
];

const createLinks = (sections, color) =>
  sections.map(section => (
    <Link key={section.loc} to={section.loc} style={{ color }}>
      {section.name}
    </Link>
  ));

const StyledNavBarBrand = styled(NavbarBrand)`
  font-family: "Garamond";
`;

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  }

  render() {
    const { isOpen } = this.state;
    return (
      <div>
        <Navbar navbar={false} fixed="top" light expand="md">
          <StyledNavBarBrand href="/">Lizzy & Tom 2019</StyledNavBarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {createLinks(sectionObjs, "black").map(link => (
                <NavItem onClick={this.toggle}>
                  <NavLink>{link}</NavLink>
                </NavItem>
              ))}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
// max-width: 960px;
