import React from "react";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import styled from "styled-components";
import { Layout } from "antd";

const { Content } = Layout;

interface DefaultLayoutProps {
  children: any;
}

const Body = styled(Content)`
  min-height: 90vh;
`;

// Hello

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <>
      <Header />
      <Body>{children}</Body>
      <Footer />
    </>
  );
};

export default DefaultLayout;
