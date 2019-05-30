import React from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import { withDarkTheme } from '../themes'

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.default,
    backgroundImage: 'url(/static/screenshots/looped.gif)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    textAlign: 'center',
    padding: '60px',
    position: 'relative',
    '&:hover $caption': {
      visibility: 'visible',
    }
  },
  Box: {
    // border: '3px solid white',
    margin: 'auto',
    maxWidth: theme.layout.maxWidth,
    padding: 60,
    boxSizing: 'border-box',
  },
  caption: {
    position: 'absolute',
    right: 20,
    bottom: 0,
    fontSize: '1em',
    visibility: 'hidden',
  }
})
const Header = ({ classes }) => (
  <header className={classes.root}>
    <div  className={classes.Box}>
      <Typography gutterBottom variant="display2" className={classes.text}>
        Edouard Richard
      </Typography>
      <Typography variant="headline" component="span" className={classes.text}>
        Freelance Developer
      </Typography>
      <Button href="#Jump" className={classes.caption}>
        Jump, electronic game I recently made
      </Button>
    </div>
  </header>
)

export default withDarkTheme(withStyles(styles)(Header))
