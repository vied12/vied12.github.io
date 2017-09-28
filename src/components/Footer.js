import React from 'react'
import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'

const styles = {
  root: {

  }
}
const Footer = () => (
  <footer>
    <Typography>
      © 2017 Edouard Richard
    </Typography>
  </footer>
)

export default withStyles(styles)(Footer)
