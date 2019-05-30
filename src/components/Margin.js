import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import classNames from 'classnames'
// import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery'
// import { useTheme } from '@material-ui/styles';

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
    // const theme = useTheme();
    // const matches = useMediaQuery(theme.breakpoints.up('sm'));
    const { classes, className, disableOnMobile, ...props} = this.props
    return (
      <div className={classNames(className,
          {
            [classes.root]: true,
          }
        )} {...props} />
    )
  }

}

export default withStyles(styles)(WithMargin)
