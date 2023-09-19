import { Fragment } from 'react'
import NavBar from '../components/NavBar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <Fragment>
        <NavBar/>
        <Outlet/>
    </Fragment>
  )
}

export default Layout