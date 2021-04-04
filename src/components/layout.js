import React from 'react'
import './layout.css'

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

export default Layout
