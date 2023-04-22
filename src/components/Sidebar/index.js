import React from "react";
import { 
  SidebarContainer, 
  Icon, 
  CloseIcon, 
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarWrap,
  SidebarRoute,
 } from "./SidebarElements";

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>

      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>

      <SidebarWrapper>

        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
          <SidebarLink to="discover" onClick={toggle}>Discover</SidebarLink>
          <SidebarLink to="service" onClick={toggle}>Services</SidebarLink>
          <SidebarLink to="signup" onClick={toggle}>Sign Up</SidebarLink>
        </SidebarMenu>

        <SidebarWrap>
          <SidebarRoute to="signin">Sign In</SidebarRoute>
        </SidebarWrap>

      </SidebarWrapper>

    </SidebarContainer>
  );
};

export default Sidebar;
