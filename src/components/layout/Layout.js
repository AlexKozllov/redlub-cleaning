import React from "react";
import Header from "../header/Header";

import s from "./Layout.module.scss";

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <div className={s.wrapper}>
        <main className={s.container}> {children}</main>
      </div>
      <footer>{/* <Footer /> */}</footer>
    </div>
  );
};

export default Layout;
