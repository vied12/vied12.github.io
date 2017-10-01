import React from 'react'
import * as svg from '../assets/placeholder/index'
import { camelCase } from 'lodash'

const loadPicture = (Component) => (
  class LoadPicture extends React.Component {
    constructor(props) {
      super(props)
      this.preloadImage(props.project.picture)
      this.state = {
        picture: svg[camelCase(this.props.project.picture + '.svg')],
      }
    }
    onImageLoaded = (imageName) => {
      this.setState({
        picture: `screenshots/${this.props.project.picture}`
      })
    }
    componentWillReceiveProps = (nextProps) => {
    }
    preloadImage = (picture) => {
      const image = new Image()
      image.onload = () => this.onImageLoaded(picture)
      image.src = `screenshots/${picture}`
    }
    render = () => (
      <Component {...this.props} picture={this.state.picture} />
    )
  }
)

export default loadPicture
