import React from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import classNames from 'classnames'
import activeOnHover from '../helpers/activeOnHover'
import preloadPicture from '../helpers/preloadPicture'
import activeShortlyWhenVisible from '../helpers/activeShortlyWhenVisible'
import compose from 'recompose/compose'

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
    '& $background': {
      opacity: 0.2,
    },
    '& $showOnHover': {
      visibility: 'visible',
    },
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
  body: {
    flexGrow: 1,
    textAlign: 'center',
  },
  openLink: {
    '& i': {
      fontSize: '1.8em',
    },
  },
})

const Project = ({ classes, project, active, picture, onClick }) => (
  <div
    onClick={onClick}
    className={classNames(classes.root, {
      [classes.active]: active,
      [classes.hasLink]: !!project.link,
    })}
  >
    {picture && picture.indexOf('webm') > -1 ? (
      <video
        className={classes.background}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        autoPlay
        loop
      >
        <source src={picture} type="video/webm" />
      </video>
    ) : (
      <div
        className={classes.background}
        style={{ backgroundImage: `url(${picture})` }}
      />
    )}
    <div className={classes.body}>
      <Typography color="textPrimary" variant="h3">
        {project.name}
        <Typography color="textPrimary" variant="body2">
          {project.tags
            .replace(/!/g, '')
            .split('\n')
            .map((item, key) => (
              <span key={key}>
                {item}
                <br />
              </span>
            ))}
        </Typography>
      </Typography>
      <Typography
        color="textPrimary"
        className={classNames(classes.showOnHover)}
      >
        {project.description
          .replace(/!/g, '')
          .split('\n')
          .map((item, key) => (
            <span key={key}>
              {item}
              <br />
            </span>
          ))}
      </Typography>
    </div>
    {project.link && (
      <Button
        href={project.link}
        rel="noopener noreferrer"
        target="_blank"
        className={classNames(classes.openLink, classes.showOnHover)}
      >
        <i className="fa fa-external-link" aria-hidden="true" />
      </Button>
    )}
  </div>
)

export default compose(
  withStyles(styles),
  preloadPicture,
  activeShortlyWhenVisible,
  activeOnHover
)(Project)
