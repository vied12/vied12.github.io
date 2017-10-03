import React from 'react'
import VisibilitySensor from 'react-visibility-sensor'
import withWidth from 'material-ui/utils/withWidth'
import isMobile from '../helpers/isMobile'

const activeShortlyWhenVisible = (Component) => {
  class ActiveShortlyWhenVisible extends React.Component {
    state = {
      active: true,
    }
    onChange = (isVisible) => {
      if (isVisible) {
        this.setState({ active: false })
      } else {
        this.setState({ active: true })

      }
    }
    render() {
      const { active, width, ...other } = this.props
      if (isMobile(width) === -1) {
        return <Component active={active} {...other} />
      }
      return (
        <VisibilitySensor onChange={this.onChange} minTopValue={120} partialVisibility>
          <Component
            {...other}
            active={this.state.active}
            onClick={() => (this.setState({ touched: true }))}/>
        </VisibilitySensor>
      )
    }
  }
  return withWidth()(ActiveShortlyWhenVisible)
}
export default activeShortlyWhenVisible
