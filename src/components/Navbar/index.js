import React from 'react'
import {FaBars} from 'react-icons/fa'
import {
  Nav, 
  NavbarContainer, 
  NavLogo, 
  MobileIcon, 
  NavMenu, 
  NavItem, 
  NavLinks,
  NavBtn,
  NavBtnLink
} from './NavbarElements';


const Navbar = ({ toggle }) => {
  return (
   <>
   <Nav>
    <NavbarContainer>
        <NavLogo to='/'>VC</NavLogo>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinks to="about">About</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="discover">Discover</NavLinks>
          </NavItem>
          {/* <NavItem>
            <NavLinks to="login">Login</NavLinks>
          </NavItem> */}
          <NavItem>
            <NavLinks to="signup">Sign Up</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="services">Services</NavLinks>
          </NavItem>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/login">Login</NavBtnLink>
        </NavBtn>
    </NavbarContainer>
   </Nav>
   
   </>
  );
};

export default Navbar
