import React from 'react'
import * as svg from '../assets/placeholder/index'
import { camelCase } from 'lodash'

const loadPicture = (Component) => (
  class LoadPicture extends React.Component {
      unmounted = false
      constructor(props) {
      super(props)
      if (props.project.picture.indexOf('webm') > -1) {
        this.state = {
          picture: `screenshots/${this.props.project.picture}`
        }
      } else {
        this.preloadImage(props.project.picture)
        this.state = {
          picture: svg[camelCase(this.props.project.picture + '.svg')],
        }
        this.image = {}
      }
    }
    onImageLoaded = (imageName) => {
      if (this.unmounted) {
        return
      }
      this.setState({
        picture: `screenshots/${this.props.project.picture}`
      })
    }
    componentWillUnmount = () => {
      this.unmounted = true
      if (this.image) {
        this.image.onload = undefined
        this.image = undefined
      }
    }
    preloadImage = (picture) => {
      this.image = new Image()
      this.image.onload = () => this.onImageLoaded(picture)
      this.image.src = `screenshots/${picture}`
    }
    render = () => (
      <Component {...this.props} picture={this.state.picture} />
    )
  }
)

export default loadPicture
