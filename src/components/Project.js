import React from 'react'
import Typography from 'material-ui/Typography'
import { withStyles } from 'material-ui/styles'

const styles = theme => ({
  root: {
    // color: theme.palette.background.default,
  },
})
const Project = ({ classes, project }) => (
  <div className={classes.root}>
    P
  </div>
)

export default withStyles(styles)(Project)
