import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import { withDarkTheme } from '../themes'
import Project from './Project'
import projectsRaw from '../projects.tsv'
import { tsvParse } from 'd3-dsv'
import { orderBy, groupBy, intersection } from 'lodash'
import Margin from './Margin'
import Tags from './Tags'
import classNames from 'classnames'

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.default,
    padding: '60px 0',
  },
  categories: {
    paddingTop: 30,
    paddingBottom: 40,
  },
  titleContainer: {
    // position: 'sticky',
    // top: 0,
    // backgroundColor: theme.palette.background.default,
    // zIndex: 1,
  },
  title: {
    textAlign: 'center',
    marginBottom: 60,
  },
  clearFilters: {
    transition: 'all .5s',
    marginTop: 10,
  },
  invisible: {
    opacity: 0,
  },
  item: {
    overflow: 'hidden',
  },
})

const PROJECTS = orderBy(tsvParse(projectsRaw), ['featured', 'year'], ['desc', 'desc'])

const tags = orderBy(
  groupBy(
    [].concat(...PROJECTS.map(p => p.tags.split(', ').filter(p => !!p)))
  ), ['length'], ['desc']
)
.map(d => d[0])
.filter(d => d[0] !== '!')

class RecentOutput extends React.Component {
  state = {
    selectedTags: [],

  }
  onTagClick = (tag) => {
    const selectedTags = [...this.state.selectedTags]
    if (selectedTags.indexOf(tag) > -1) {
      selectedTags.splice(selectedTags.indexOf(tag), 1)
    } else {
      selectedTags.push(tag)
    }
    this.setState({ selectedTags })
  }
  clearTags = () => {
    this.setState({ selectedTags: [] })
  }
  render() {
    const { classes } = this.props
    const { selectedTags } = this.state
    const projects = selectedTags.length === 0 ?
    PROJECTS :
    [...PROJECTS].filter(p => intersection(p.tags.split(', '), selectedTags).length > 0)
    const categories = [
      {
        title: 'Tools',
        headline: 'face a problem and solve it',
        projects: projects.filter(p => p.isTool),
      },
      {
        title: 'Story Telling',
        headline: 'encourage people to understand via exploration and intuition',
        projects: projects.filter(p => p.isStoryTelling),
      },
      {
        title: 'Side Projects, Art & Whatever',
        headline: 'are intended for learning something new, but mostly for having fun',
        projects: projects.filter(p => p.isArt),
      },
    ]
    return (
      <div className={classes.root}>
        <Margin>
          <Typography variant="display2">
            Recent Output
          </Typography>
          <Typography>
            This is what I have been doing during this time
          </Typography>
          <Tags tags={tags} selectedTags={selectedTags} onClick={this.onTagClick}/>
          <div style={{ textAlign: 'center' }}>
            <Button
              raised
              color="primary"
              className={classNames(classes.clearFilters, { [classes.invisible]: selectedTags.length === 0 })}
              onClick={this.clearTags}
            >
              Clear all filters
            </Button>
          </div>
        </Margin>
        {categories
          .filter(c => c.projects.length)
          .map((c, i)=> (
          <div
            key={c.title}
            className={classes.categories}
          >
            <Margin className={classes.titleContainer}>
              <Typography variant="display1" className={classes.title}>
                {c.title}
                {c.headline &&
                  <Typography variant="caption" className={classes.title}>
                    {c.headline}
                  </Typography>
                }
              </Typography>
            </Margin>
            <Margin disableOnMobile>
              <Grid
                container
                spacing={24}
              >
                {c.projects.map((p) => (
                  <Grid item xs={12} sm={12} md={p.featured ? 12 : 6} key={p.name}  id={p.name} className={classes.item}>
                    <Project project={p} />
                  </Grid>
                ))}
              </Grid>
            </Margin>
          </div>
        ))}
      </div>
    )
  }
}

export default withDarkTheme(withStyles(styles)(RecentOutput))
