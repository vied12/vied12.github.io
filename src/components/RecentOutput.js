import React from 'react'
import Typography from 'material-ui/Typography'
import { withStyles } from 'material-ui/styles'
import { withDarkTheme } from '../themes'
import Project from './Project'
import projects from '../projects.csv'
import { tsvParse } from 'd3-dsv'
const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.default,
    // color: theme.palette.background.default,
  },
})

console.log(tsvParse(projects))
const RecentOutput = ({ classes }) => (
  <div className={classes.root}>
    <Typography type="display2">
      Recent Output
    </Typography>
    <Typography type="display1">
      Tools
    </Typography>
    {projects.map((p, i) =>
      <Project key={i} project={p} />
    )}
    <Typography type="display1">
      Story Telling
    </Typography>
    <Typography type="display1">
      For fun
    </Typography>
  </div>
)

export default withDarkTheme(withStyles(styles)(RecentOutput))
