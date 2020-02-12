import React from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import { withStyles } from '@material-ui/styles'
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
  categories: {},
  title: {
    textAlign: 'center',
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

const PROJECTS = orderBy(
  tsvParse(projectsRaw),
  ['featured', 'year'],
  ['desc', 'desc']
)

const tags = orderBy(
  groupBy([].concat(...PROJECTS.map(p => p.tags.split(', ').filter(p => !!p)))),
  ['length'],
  ['desc']
)
  .map(d => d[0])
  .filter(d => d[0] !== '!')

class RecentOutput extends React.Component {
  state = {
    selectedTags: [],
  }
  onTagClick = tag => {
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
    const projects =
      selectedTags.length === 0
        ? PROJECTS
        : [...PROJECTS].filter(
            p => intersection(p.tags.split(', '), selectedTags).length > 0
          )
    const categories = [
      {
        title: 'Story Telling',
        headline: 'encourage users to understand via exploration and intuition',
        projects: projects.filter(p => p.isStoryTelling),
      },
      {
        title: 'Tools',
        headline: 'face a problem and solve it',
        projects: projects.filter(p => p.isTool),
      },
      {
        title: 'Side Projects, Art & Whatever',
        headline:
          'are intended for learning something new, but mostly for having fun',
        projects: projects.filter(p => p.isArt),
      },
    ]
    return (
      <div className={classes.root}>
        <Margin>
          <Typography variant="h2" color="textPrimary">
            Recent Output
          </Typography>
          <Typography color="textPrimary">
            This is what I have been doing during this time
          </Typography>
          <Tags
            tags={tags}
            selectedTags={selectedTags}
            onClick={this.onTagClick}
          />
        </Margin>
        <div
          style={{ textAlign: 'center', position: 'sticky', top: 0, zIndex: 2 }}
        >
          <Margin>
            <Button
              variant="contained"
              color="primary"
              className={classNames(classes.clearFilters, {
                [classes.invisible]: selectedTags.length === 0,
              })}
              onClick={this.clearTags}
            >
              Clear all filters
            </Button>
          </Margin>
        </div>
        {categories
          .filter(c => c.projects.length)
          .map(c => (
            <div key={c.title} className={classes.categories}>
              <Margin>
                <Typography
                  variant="h3"
                  color="textPrimary"
                  className={classes.title}
                >
                  {c.title}
                  {c.headline && (
                    <Typography
                      variant="caption"
                      component="div"
                      color="textPrimary"
                    >
                      {c.headline}
                    </Typography>
                  )}
                </Typography>
              </Margin>
              <Margin disableOnMobile>
                {c.projects.map(p => (
                  <Box key={p.name} id={p.name}>
                    <Project project={p} />
                  </Box>
                ))}
              </Margin>
            </div>
          ))}
      </div>
    )
  }
}

export default withDarkTheme(withStyles(styles)(RecentOutput))
