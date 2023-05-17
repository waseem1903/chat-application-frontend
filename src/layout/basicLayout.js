import React from "react";
import { Header, Footer } from "../components";

const BasicLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default BasicLayout;
