import React from 'react'
import VisibilitySensor from 'react-visibility-sensor'

const activeShortlyWhenVisible = Component => {
  class ActiveShortlyWhenVisible extends React.Component {
    state = {
      active: true,
    }
    onChange = isVisible => {
      if (isVisible) {
        this.setState({ active: false })
      } else {
        this.setState({ active: true })
      }
    }
    render() {
      // eslint-disable-next-line no-unused-vars
      const { active, ...other } = this.props
      // const theme = useTheme();
      // const matchesMobile = useMediaQuery(theme.breakpoints.down('sm'));
      // if (matchesMobile) {
      //   return <Component active={active} {...other} />
      // }
      return (
        <VisibilitySensor
          onChange={this.onChange}
          minTopValue={120}
          partialVisibility
        >
          <Component
            {...other}
            active={this.state.active}
            onClick={() => this.setState({ touched: true })}
          />
        </VisibilitySensor>
      )
    }
  }
  return ActiveShortlyWhenVisible
}
export default activeShortlyWhenVisible
