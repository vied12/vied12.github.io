import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Margin from './Margin'

const styles = {
  root: {
    paddingTop: 20,
    paddingBottom: 20,
  },
}
const Footer = ({ classes }) => (
  <Margin>
    <footer className={classes.root}>
      <Typography>© {new Date().getFullYear()} Edouard Richard</Typography>
    </footer>
  </Margin>
)

export default withStyles(styles)(Footer)
