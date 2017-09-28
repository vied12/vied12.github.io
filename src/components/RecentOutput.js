import React from 'react'
import Typography from 'material-ui/Typography'
import Grid from 'material-ui/Grid'
import { withStyles } from 'material-ui/styles'
import { withDarkTheme } from '../themes'
import Project from './Project'
import projectsRaw from '../projects.csv'
import { tsvParse } from 'd3-dsv'
import { GridList, GridListTile } from 'material-ui/GridList'

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.default,
  },
})

const renderProjectsInGrid = (projects, classes) => (
  <div>
    <Grid
      container
      spacing={0}
    >
      {projects.map((p, i) => (
        <Grid item xs={12} sm={6} key={i}>
          <Project project={p} />
        </Grid>
      ))}
    </Grid>
  </div>
)

const projects = tsvParse(projectsRaw)
const RecentOutput = ({ classes }) => (
  <div className={classes.root}>
    <Typography type="display2">
      Recent Output
    </Typography>
    <Typography type="display1">
      Tools
    </Typography>
    {renderProjectsInGrid(projects.filter(p => p.isTool), classes)}
    <Typography type="display1">
      Story Telling
    </Typography>
    {renderProjectsInGrid(projects.filter(p => p.isStoryTelling), classes)}
    <Typography type="display1">
      Art/Fun
    </Typography>
    {renderProjectsInGrid(projects.filter(p => p.isArt), classes)}
  </div>
)

export default withDarkTheme(withStyles(styles)(RecentOutput))
