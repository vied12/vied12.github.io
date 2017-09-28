import React from 'react'
import Typography from 'material-ui/Typography'
import { withStyles } from 'material-ui/styles'

const styles = {
  root: {},
}

const Introduction = ({ classes }) => (
  <div className={classes.root}>
    <div className="Introduction">
      <Typography gutterBottom type="display2">
        Introduction
      </Typography>
      <Typography gutterBottom>
        Full stack developer in data journalism, I used to build interactive data visualizations,
        maps and tools for online medias. I use mostly free softwares and publish my work as much
        as possible on https://github.com/vied12
       </Typography>
    </div>
  </div>
)

export default withStyles(styles)(Introduction)
