import React from 'react'

import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Footer from './Footer'
import SearchBar from './SearchBar'

const Layout = ({ children }) => (
  <React.Fragment>
    <Navbar />
    <SearchBar />
    <Sidebar />
    <main>
      {children}
    </main>
    <Footer />
  </React.Fragment>
)

export default Layout
