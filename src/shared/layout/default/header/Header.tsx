import './Header.css'
import React, { useContext, useState } from "react";
import styled from "styled-components";
import { AuthContext } from "../../../../auth/AuthProvider";

import { Affix, Layout, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import Button from "../../../Button";
import LeftMenu from './components/LeftMenu';

const Nav = styled.nav``;
const Navbar = styled(Layout.Header)``;
const Logo = styled.div``;
const NavMenu = styled.div``;

const Header = () => {
  const authContext = useContext(AuthContext);
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(!visible);
  };

  return (
    <Affix offsetTop={0}>
      <Nav className="navbar">
        <Navbar className='nav-header'>
          <Logo className='logo'>
            <h2 className='brand-font'>UPHIRE</h2>
          </Logo>
          <NavMenu className='nav-menu'>
            <div className='leftMenu'>
              <LeftMenu mode={'horizontal'} />
            </div>
            <Button className="menuButton" type="text" onClick={showDrawer}>
              <MenuOutlined />
            </Button>
            <Drawer
              title={"UPHIRE"}
              placement="right"
              closable={true}
              onClose={showDrawer}
              visible={visible}
              style={{ zIndex: 99999 }}
            >
              <LeftMenu mode={"inline"} />
            </Drawer>
          </NavMenu>
        </Navbar>
      </Nav>
    </Affix>
  );
};

export default Header;
