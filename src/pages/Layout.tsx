import { Fragment } from 'react'
import NavBar from '../components/NavBar'
import { Outlet } from 'react-router-dom'
import { Box } from '@chakra-ui/react'

const Layout = () => {
  return (
    <Fragment>
        <NavBar/>
        <Box padding={5}>
          <Outlet/>
        </Box>
    </Fragment>
  )
}

export default Layout