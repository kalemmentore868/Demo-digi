import styled from "styled-components";

export const Nav = styled.nav`
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: relative;
  top: 0;
  z-index: 10;
  width: 100%;
  padding-right: calc(8% - 2vw);

  @media screen and (max-width: 768px) {
    height: 100px;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: inherit;
  z-index: 1;
  width: 100%;
`;

export const NavLogo = styled.a`
  color: #d80000;
  justify-self: flex-start;
  cursor: pointer;
  font-size: calc(16px + 6 * ((100vw - 1px) / 480));
  display: flex;
  align-items: center;
  margin-left: calc(16px + 6 * ((100vw - 820px) / 680));
  font-weight: bold;
  text-decoration: none;
  font-weight: 600;
  font-family: sans-serif;

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.8rem;
    cursor: pointer;
    color: #161f60;
    margin-left: 15px;
  }
`;

export const NavItem = styled.a`
  display: flex;
  height: inherit;
  align-items: center;
  margin-right: calc(16px + 6 * ((100vw - 50px) / 380));
  text-decoration: none;
  color: #161f60;
  text-transform: uppercase;
  transition: 0.2s linear;
  font-size: calc(16px + 6 * ((100vw - 1620px) / 680));
  font-weight: 450;
  cursor: pointer;
  letter-spacing: 2px;

  &:hover {
    transform: scale(1.08);
    font-weight: 600;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  height: inherit;
  margin: 0 auto;
  padding-left: 2em;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const SelectCountryContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-content: center;
  width: 5%;

  @media screen and (max-width: 768px) {
    width: clamp(10% 40% 41%);
  }
`;

export const SmilePic = styled.img`
  width: 35px;
  height: 35px;
  align-self: center;
`;

export const SearchIcon = styled.div`
  align-self: center;
`;
