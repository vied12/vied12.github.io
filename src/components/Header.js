import React from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import { withDarkTheme } from '../themes'

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.default,
    backgroundImage: 'url(/static/screenshots/looped.gif)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    textAlign: 'center',
    padding: '60px',
    position: 'relative',
    '&:hover $caption': {
      visibility: 'visible',
    },
  },
  text: {},
  Box: {
    // border: '3px solid white',
    margin: 'auto',
    maxWidth: theme.layout.maxWidth,
    padding: 60,
    boxSizing: 'border-box',
  },
  caption: {
    position: 'absolute',
    right: 20,
    bottom: 0,
    fontSize: '1em',
    visibility: 'hidden',
  },
}))

const Header = () => {
  const classes = useStyles()
  return (
    <header className={classes.root}>
      <div className={classes.Box}>
        <Typography
          color="textPrimary"
          gutterBottom
          variant="h2"
          className={classes.text}
        >
          Edouard Richard
        </Typography>
        <Typography
          color="textPrimary"
          variant="h4"
          component="span"
          className={classes.text}
        >
          Freelance Web Application Engineer
        </Typography>
        <Button href="#Jump" className={classes.caption}>
          Jump, electronic game I recently made
        </Button>
      </div>
    </header>
  )
}

export default withDarkTheme(Header)
