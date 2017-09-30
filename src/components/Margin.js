import React from 'react'
import withWidth from 'material-ui/utils/withWidth'
import { withStyles } from 'material-ui/styles'

const styles = theme => ({
  root: {
    paddingLeft: 20,
    paddingRight: 20,
    maxWidth: theme.layout.maxWidth,
    margin: 'auto',
  },
})

class WithMargin extends React.Component {

  render() {
    const { classes, width, disableOnMobile, ...props} = this.props
    return (
      <div className={disableOnMobile && ['sm', 'xs'].indexOf(width) > -1 ? null : classes.root} {...props} />
    )
  }

}

export default withWidth()(withStyles(styles)(WithMargin))
