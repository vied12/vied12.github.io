import React from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/styles'

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
})

const Tags = ({ classes, tags, selectedTags, onClick }) => {
  return (
    <div className={classes.root}>
      <Typography variant="h6" color="textPrimary" gutterBottom>
        Features
      </Typography>
      <div className={classes.tags}>
        {tags.map(p => (
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
      </div>
    </div>
  )
}

export default withStyles(styles)(Tags)
