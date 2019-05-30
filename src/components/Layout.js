import React, { Component } from 'react'
import Introduction from './Introduction'
import Header from './Header'
import Footer from './Footer'
import RecentOutput from './RecentOutput'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({})
class Layout extends Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <Header/>
        <div className={classes.body} >
          <Introduction />
          <RecentOutput />
          <Footer />
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(Layout)
