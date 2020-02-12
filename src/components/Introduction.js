import React from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core/styles'
import Margin from './Margin'
import KeyIcon from '@material-ui/icons/VpnKey'
import { withLightTheme } from '../themes'

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.default,
    padding: '60px 0',
  },
  links: {
    textAlign: 'center',
    paddingTop: 40,
    '& > *': {
      [theme.breakpoints.up('md')]: {
        marginRight: 40,
      },
    },
    '& i': {
      fontSize: 30,
    },
  },
  text: {
    maxWidth: 700,
    margin: 'auto',
    // color: theme.palette.text
  },
}))

const Introduction = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Margin>
        <Typography className={classes.text}>
          Hi,
          <br />
          I&apos;m a web application engineer in Berlin. For the last few years
          I&apos;ve built tools for news agencies at{' '}
          <Link
            href="https://sourcefabric.org"
            target="_blank"
            rel="noopener noreferrer"
            color="secondary"
          >
            Sourcefabric
          </Link>{' '}
          after making interactive storytelling and data visualizations at{' '}
          <Link
            href="http://jplusplus.org"
            target="_blank"
            rel="noopener noreferrer"
            color="secondary"
          >
            Journalism++
          </Link>
          .<br />I now work as a freelancer and among other things, I&apos;m
          conceiving a learning platform that uses music to teach general
          knowledge to kids and provide a pedagogic tool to teachers. You can
          check the Mélo project for more information.
        </Typography>
        <div className={classes.links}>
          <Button href="mailto:edou4rd@protonmail.com" target="_blank">
            <i className="fa fa-envelope-o" />
          </Button>
          <Button href="https://twitter.com/vied12" target="_blank">
            <i className="fa fa-twitter" />
          </Button>
          <Button href="https://github.com/vied12" target="_blank">
            <i className="fa fa-github" />
          </Button>
          <Button href="https://keybase.io/vied12" target="_blank">
            {false && <i className="fa fa-key" />}
            <KeyIcon style={{ width: 40, height: 35 }} />
          </Button>
        </div>
      </Margin>
    </div>
  )
}

export default withLightTheme(Introduction)
