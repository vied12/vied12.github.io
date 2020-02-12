import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import classNames from 'classnames'

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
    // eslint-disable-next-line no-unused-vars
    const { classes, className, disableOnMobile, ...props } = this.props
    return (
      <div
        className={classNames(className, {
          [classes.root]: true,
        })}
        {...props}
      />
    )
  }
}

export default withStyles(styles)(WithMargin)
