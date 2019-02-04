import React from 'react'
import withWidth from 'material-ui/utils/withWidth'
import { withStyles } from 'material-ui/styles'
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
    const { classes, className, width, disableOnMobile, ...props} = this.props
    return (
      <div className={classNames(className,
          {
            [classes.root]: !(disableOnMobile && ['sm', 'xs'].indexOf(width) > -1),
          }
        )} {...props} />
    )
  }

}

export default withWidth()(withStyles(styles)(WithMargin))
