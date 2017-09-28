import React from 'react'
import Typography from 'material-ui/Typography'
import { withStyles } from 'material-ui/styles'

const styles = {
  root: {
    backgroundColor: '#121212',
    backgroundImage: 'url(/images/desktop.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    textAlign: 'center',
    padding: '60px',
    position: 'relative',
    marginBottom: 60,
  },
  Box: {
    border: '3px solid white',
    margin: 'auto',
    maxWidth: 600,
    padding: 60,
    boxSizing: 'border-box',
  },
  text: {
    color: 'white',
  },
}
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

export default withStyles(styles)(Header)
