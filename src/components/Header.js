import React from 'react'
import Typography from 'material-ui/Typography'
import { withStyles } from 'material-ui/styles'
import { withDarkTheme } from '../themes'

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.default,
    backgroundImage: 'url(screenshots/looped.gif)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    textAlign: 'center',
    padding: '60px',
    position: 'relative',
  },
  Box: {
    // border: '3px solid white',
    margin: 'auto',
    maxWidth: theme.layout.maxWidth,
    padding: 60,
    boxSizing: 'border-box',
  },
})
const Header = ({ classes }) => (
  <header className={classes.root}>
    <div  className={classes.Box}>
      <Typography gutterBottom type="display2" className={classes.text}>
        Edouard Richard
      </Typography>
      <Typography type="headline" component="span" className={classes.text}>
        Freelance Developer
      </Typography>
    </div>
  </header>
)

export default withDarkTheme(withStyles(styles)(Header))
