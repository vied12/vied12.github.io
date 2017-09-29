import React from 'react'

const activeOnHover = (Component) => (
  class extends React.Component {
    state = {
      active: false,
    }

    onMouseEnter = () => this.setState({ active: true })
    onMouseLeave = () => this.setState({ active: false })

    render() {
      return (
        <div onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
          <Component active={this.state.active} {...this.props} />
        </div>
      )
    }

  }
)

export default activeOnHover
