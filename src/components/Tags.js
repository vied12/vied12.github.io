import React from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { withStyles, makeStyles } from '@material-ui/styles'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Hidden from '@material-ui/core/Hidden'
const styles = theme => ({
  root: {
    margin: '40px 0 20px 0',
  },
  tags: {
    // textAlign: 'center',
  },
  tag: {
    marginRight: 12,
    marginBottom: 12,
  },
  flexWrap: {
    flexWrap: 'wrap',
  },
})
const useStyles = makeStyles(styles)
const RenderTags = ({ tags, selectedTags, onClick }) => {
  const classes = useStyles()
  return (
    <React.Fragment>
      {tags.slice(3).map(p => (
        <Button
          key={p}
          variant="outlined"
          color={selectedTags.indexOf(p) > -1 ? 'secondary' : 'default'}
          onClick={() => onClick(p)}
          className={classes.tag}
        >
          {p}
        </Button>
      ))}
    </React.Fragment>
  )
}

const Tags = ({ classes, tags, selectedTags, onClick }) => {
  return (
    <div className={classes.root}>
      <Hidden xsDown>
        <Typography variant="h6" color="textPrimary" gutterBottom>
          Features
        </Typography>
        <div className={classes.tags}>
          <RenderTags
            tags={tags}
            selectedTags={selectedTags}
            onClick={onClick}
          />
        </div>
      </Hidden>
      <Hidden smUp>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            classes={{ content: classes.flexWrap }}
          >
            <Typography>Filter by feature</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails style={{ flexWrap: 'wrap' }}>
            <RenderTags
              tags={tags}
              selectedTags={selectedTags}
              onClick={onClick}
            />
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </Hidden>
    </div>
  )
}

export default withStyles(styles)(Tags)
