import React from 'react'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import { withStyles } from 'material-ui/styles'

const styles = theme => ({
  root: {
    margin: '40px 0 20px 0',
  },
  tags: {
    textAlign: 'center',
  },
})

const Tags = ({ classes, tags, selectedTags, onClick }) => {

  return (
    <div className={classes.root}>
      <Typography type="headline">Competences</Typography>
      <div className={classes.tags}>
        {tags.map(p =>
          <Button
            key={p}
            color={selectedTags.indexOf(p) > -1 ? 'accent' : 'default'}
            onClick={() => onClick(p)}
            className={classes.tag}
          >
            {p}
          </Button>
        )}
      </div>
    </div>
  )
}

export default withStyles(styles)(Tags)
