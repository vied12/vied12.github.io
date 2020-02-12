import React, { Component } from 'react'
import Introduction from './Introduction'
import Header from './Header'
import Footer from './Footer'
import RecentOutput from './RecentOutput'

class Layout extends Component {
  render() {
    return (
      <div>
        <Header />
        <div>
          <Introduction />
          <RecentOutput />
          <Footer />
        </div>
      </div>
    )
  }
}

export default Layout
