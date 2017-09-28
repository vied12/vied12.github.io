import React, { Component } from 'react'
import Introduction from './Introduction'
import Header from './Header'
import RecentOutput from './RecentOutput'
import { withStyles } from 'material-ui/styles'

const styles = {
  root: {
  },
  body: {
    padding: 20,
    maxWidth: 600,
    margin: 'auto',
  },
}
class App extends Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <Header/>
        <div className={classes.body} >
          <Introduction />
          <RecentOutput />
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(App)
