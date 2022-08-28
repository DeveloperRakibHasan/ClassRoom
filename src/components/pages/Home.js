import React from 'react'
import { Outlet } from 'react-router-dom';
import Nav from '../Nav';
import SiteMenu from '../SiteMenu';

function Home() {
  const usr = JSON.parse(localStorage.getItem('user'));
  return (
   <>
      <Nav/>
      <SiteMenu roll={usr.type} />
      <Outlet/>
   </>
  )
}

export default Home