import React from 'react'
import Nav from '../Nav'
import SiteMenu from '../SiteMenu'

function Home({children}) {
    const roll = 'student';
  return (
    <>
    <Nav/>
    <SiteMenu roll={roll} />
    {children}
    </>
  )
}

export default Home