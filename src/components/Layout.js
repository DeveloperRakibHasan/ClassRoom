import React from "react";
import Nav from "./Nav";
import SiteMenu from './SiteMenu'

function Layout({ children }) {
  const roll = 'student';
  return (
    <>
      <Nav/>
      <SiteMenu roll={roll} />
      <div>{children}</div>
    </>
  );
}

export default Layout;