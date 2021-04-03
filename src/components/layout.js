import React from 'react'
import PropTypes from 'prop-types'

import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Footer from './Footer'
import SearchBar from './SearchBar'

const Layout = ({ children }) => (
  <React.Fragment>
    <Navbar />
    <SearchBar/>
    <Sidebar />
    {children}
    <Footer />
  </React.Fragment>
)

Layout.propTypes = {
  children: PropTypes.node
}

export default Layout
