import React from "react";
import { FaBars } from "react-icons/fa";
import { BiSearchAlt } from "react-icons/bi";
import smile from "../../images/demo-digi-smile.png";
import {
  Nav,
  NavbarContainer,
  MobileIcon,
  NavLogo,
  NavItem,
  NavMenu,
  SelectCountryContainer,
  SmilePic,
  SearchIcon,
} from "./Navbar";

const icon = {
  color: "gray",
  transform: "scale(1.6)",
};

const Navbar = () => {
  return (
    <Nav>
      <NavbarContainer>
        <MobileIcon>
          <FaBars />
        </MobileIcon>
        <NavLogo>Digicel</NavLogo>
        <NavMenu>
          <NavItem>Apps</NavItem>
          <NavItem>Bundles</NavItem>
          <NavItem>E-store</NavItem>
          <NavItem>Digicel+</NavItem>
          <NavItem>Switch To Digicel</NavItem>
          <NavItem>Roaming</NavItem>
          <NavItem>Returning to t&#38;t</NavItem>
          <NavItem>More</NavItem>
        </NavMenu>
        <SelectCountryContainer>
          <SearchIcon>
            <BiSearchAlt style={icon} />
          </SearchIcon>
          <SmilePic src={smile} alt="smile" />
        </SelectCountryContainer>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
