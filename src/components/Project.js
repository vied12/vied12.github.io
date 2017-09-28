import React from 'react'
import Typography from 'material-ui/Typography'
import { withStyles } from 'material-ui/styles'

const styles = theme => ({
  root: {
    // color: theme.palette.background.default,
    minHeight: 250,
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    transition: 'all .25s',
    padding: 10,
    '&:hover': {
      // height: 400,
      '& $background': {
        opacity: .2,
      },
      '& $showOnHover': {
        visibility: 'visible',
      },
      '& $hideOnHover': {
        visibility: 'hidden',
      },
    },
  },
  hideOnHover: {
    visibility: 'hidden',
  },
  showOnHover: {
    visibility: 'hidden',
  },
  background: {
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 1,
    transition: 'all .25s',
  },
})
const Project = ({ classes, project }) => (
  <div
  className={classes.root}
  >
    <div
      className={classes.background}
      style={{backgroundImage: `url(screenshots/${project.picture})`}}
    />
    <Typography noWrap type="display1">{project.name}</Typography>
    <Typography className={classes.showOnHover}>{project.description}</Typography>
    <Typography noWrap className={classes.showOnHover}>{project.year}</Typography>
  </div>
)

export default withStyles(styles)(Project)
