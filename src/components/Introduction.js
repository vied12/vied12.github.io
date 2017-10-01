import React from 'react'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import { withStyles } from 'material-ui/styles'
import Margin from './Margin'
import KeyIcon from 'material-ui-icons/VpnKey'

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.default,
    padding: '60px 0',
  },
  links: {
    textAlign: 'center',
    paddingTop: 40,
    '& > *': {
      marginRight: 40,
    },
    '& i': {
      fontSize: 30,
    },
  },
  text: {
    maxWidth: 700,
    margin: 'auto',
  },
})

const Introduction = ({ classes }) => (
  <div className={classes.root}>
    <Margin>
      <Typography className={classes.text}>
        Hi,<br/>
        I'm developer in Berlin.
        The last few years I built tools for news agencies
        at <a href="https://sourcefabric.org" target="_blank" rel="noopener noreferrer">Sourcefabric</a> after
        having been making interactive story telling and data visualizations
        at <a href="http://jplusplus.org" target="_blank" rel="noopener noreferrer">Journalism++</a>.<br/>
        I work now as freelancer.
      </Typography>
        <div className={classes.links}>
          <Button
            href="mailto:vied12@gmail.com"
            target="_blank"
          >
            <i className="fa fa-envelope-o"></i>
          </Button>
          <Button
            href="https://twitter.com/vied12"
            target="_blank"
          >
            <i className="fa fa-twitter"></i>
          </Button>
          <Button
            href="https://github.com/vied12"
            target="_blank"
          >
            <i className="fa fa-github"></i>
          </Button>
          <Button
            href="https://keybase.io/vied12"
            target="_blank"
            style={{ top: 5, position: 'relative' }}
          >
            {  false  && <i className="fa fa-key"></i>}
            <KeyIcon style={{ width: 40, height: 35 }} />
          </Button>
        </div>
    </Margin>
  </div>
)

export default withStyles(styles)(Introduction)
