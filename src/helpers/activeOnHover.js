import React from 'react'

const activeOnHover = (Component) => (
  class extends React.Component {
    state = {
      active: false,
    }

    onMouseEnter = () => this.setState({ active: true })
    onMouseLeave = () => this.setState({ active: false })
    onHashChange = (e) => {
      if (e.target.location.hash.slice(1) === this.props.project.name) {
        this.setState({ active: true })
      }
    }
    componentWillUnmount = () => {
      window.removeEventListener('hashchange', this.onHashChange)
    }
    componentDidMount = () => {
      window.addEventListener('hashchange', this.onHashChange)
      this.onHashChange({ target: window })
    }
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
