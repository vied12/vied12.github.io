import React from 'react'
import Typography from 'material-ui/Typography'
import Grid from 'material-ui/Grid'
import { withStyles } from 'material-ui/styles'
import { withDarkTheme } from '../themes'
import Project from './Project'
import projectsRaw from '../projects.tsv'
import { tsvParse } from 'd3-dsv'
import { orderBy } from 'lodash'
import Margin from './Margin'

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.default,
    padding: '60px 0',
  },
  categories: {
    paddingTop: 10,
    '& h1': {
      marginBottom: 40,
    },
    paddingBottom: 40,
  }
})

const projects = orderBy(tsvParse(projectsRaw), ['featured', 'year'], ['desc', 'desc'])

const categories = [
  {
    title: 'Tools',
    projects: projects.filter(p => p.isTool),
  },
  {
    title: 'Story Telling',
    projects: projects.filter(p => p.isStoryTelling),
  },
  {
    title: 'Side Projects, Art & whatever',
    projects: projects.filter(p => p.isArt),
  },
]
const RecentOutput = ({ classes }) => (
  <div className={classes.root}>
    <Margin>
      <Typography type="display2">
        Recent Output
      </Typography>
    </Margin>
    {categories.map((c, i)=> (
      <div
        key={c.title}
        className={classes.categories}
      >
        <Margin>
          <Typography type="display1">
            {c.title}
          </Typography>
        </Margin>
        <Margin disableOnMobile>
          <Grid
            container
            spacing={24}
          >
            {c.projects.map((p, i) => (
              <Grid item xs={12} sm={12} md={p.featured ? 12 : 6} key={i}>
                <Project project={p} />
              </Grid>
            ))}
          </Grid>
        </Margin>
      </div>
    ))}
  </div>
)

export default withDarkTheme(withStyles(styles)(RecentOutput))
