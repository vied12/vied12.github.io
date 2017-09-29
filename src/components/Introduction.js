import React from 'react'
import Typography from 'material-ui/Typography'
import { withStyles } from 'material-ui/styles'

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.default,
    padding: '60px 0',
  },
})

const Introduction = ({ classes }) => (
  <div className={classes.root}>
    <div className="Introduction">

      <Typography>
        Hi,<br/>
        I'm developer.
        The last few years I have been making tools for news agencies
        at <a href="https://sourcefabric.org" target="_blank" rel="noopener noreferrer">Sourcefabric</a> after
        having been
        at <a href="http://jplusplus.org" target="_blank" rel="noopener noreferrer">Journalism++</a> doing
        interactive story telling and data visualization.
        I use mostly open source softwares and publish my work as much
        as possible
        on <a href="https://github.com/vied12" target="_blank" rel="noopener noreferrer">github.com/vied12</a>.
       </Typography>
    </div>
  </div>
)

export default withStyles(styles)(Introduction)
