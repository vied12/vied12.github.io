import React from 'react'
import Typography from 'material-ui/Typography'
import { withStyles } from 'material-ui/styles'

const styles = {
  root: {},
}
const RecentOutput = ({ classes }) => (
  <div className={classes.root}>
    <Typography type="display2">
      Recent Output
    </Typography>
    <Typography type="display1">
      Tools
    </Typography>
    <Typography type="display1">
      Story Telling
    </Typography>
    <Typography type="display1">
      For fun
    </Typography>
  </div>
)

export default withStyles(styles)(RecentOutput)
