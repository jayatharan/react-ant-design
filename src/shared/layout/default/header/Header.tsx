import React from 'react'
import { Layout, Affix } from 'antd';
import styled from 'styled-components';

const NavBar = styled(Layout.Header)`
  color:white;
`
const Header = () => {
  return (
    <Affix offsetTop={0}>
      <NavBar>
        UPHIRE
      </NavBar>
    </Affix>
  )
}

export default Header