import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import classNames from 'classnames'
import preloadPicture from '../helpers/preloadPicture'

const useStyles = makeStyles(theme => ({
  artwork: {
    position: 'relative',
    minHeight: 200,
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
}))
const Project2 = ({ project, picture, flip }) => {
  const classes = useStyles()
  return (
    <Box my={12}>
      <Grid container>
        <Grid item xs={12} md={4} className={classes.artwork}>
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
        </Grid>
        <Grid item xs={12} md={8}>
          <Box
            ml={{
              xs: 0,
              sm: 0,
              md: 6,
              xl: 6,
            }}
          >
            <Typography variant="h4" gutterBottom color="textPrimary">
              {project.name}
            </Typography>
            <Typography gutterBottom color="textPrimary">
              {project.description.split('\n').map((item, key) => (
                <span key={key}>
                  {item}
                  <br />
                </span>
              ))}
            </Typography>
            <Typography color="textSecondary" gutterBottom variant="body2">
              {project.tags.replace(/!/g, '')}
            </Typography>
            {project.link && (
              <Box my={2}>
                <Button
                  href={project.link}
                  rel="noopener noreferrer"
                  target="_blank"
                  color="primary"
                  variant="outlined"
                >
                  Discover&nbsp;
                  <i className="fa fa-external-link" aria-hidden="true" />
                </Button>
              </Box>
            )}
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default preloadPicture(Project2)
