import React from 'react'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import { withStyles } from 'material-ui/styles'
import classNames from 'classnames'
import activeOnHover from '../helpers/activeOnHover'

const styles = theme => ({
  root: {
    minHeight: 330,
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    transition: 'all .25s',
    boxSizing: 'border-box',
    padding: 10,
  },
  active: {
    // border: `4px solid ${theme.palette.text.secondary}`,
    '& $background': {
      opacity: .2,
    },
    '& $showOnHover': {
      visibility: 'visible',
    },
  },
  // active: {
  //   visibility: 'visible',
  // },
  showOnHover: {
    visibility: 'hidden'
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
  body: {
    flexGrow: 1,
    textAlign: 'center',
  },
  openLink: {
    '& i': {
      fontSize: '1.8em',
    }
  }
})
const Project = ({ classes, project, active }) => (
  <div
  className={classNames(classes.root, {[classes.active]: active })}
  >
    <div
      className={classes.background}
      style={{backgroundImage: `url(screenshots/${project.picture})`}}
    />
    <div className={classes.body}>
      <Typography noWrap type="display1">{project.name}</Typography>
      <Typography
        className={classNames(classes.showOnHover)}
        dangerouslySetInnerHTML={{__html: project.description.replace(/\n/g, '<br/>')}}
      />
    </div>
    {project.link &&
      <Button
        href={project.link}
        target="_blank"
        className={classNames(classes.openLink, classes.showOnHover)}
      >
        <i className="fa fa-external-link" aria-hidden="true"></i>
      </Button>
    }
  </div>
)

export default withStyles(styles)(activeOnHover(Project))
