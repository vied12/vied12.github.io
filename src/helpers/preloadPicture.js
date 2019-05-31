import React from 'react'
import * as svg from '../assets/placeholder/index'
import { camelCase } from 'lodash'
import VisibilitySensor from 'react-visibility-sensor'

const loadPicture = Component =>
  class LoadPicture extends React.Component {
    unmounted = false
    state = {
      loaded: false,
      picture: undefined,
    }
    constructor(props) {
      super(props)
      // if (props.project.picture.indexOf('webm') > -1) {
      //   this.state = {
      //     picture: `/static/screenshots/${this.props.project.picture}.svg`
      //   }
      // } else {
      this.state = {
        picture: svg[camelCase(this.props.project.picture + '.svg')],
      }
      // }
    }
    onImageLoaded = imageName => {
      if (this.unmounted) {
        return
      }
      this.setState({
        picture: `/static/screenshots/${this.props.project.picture}`,
        loaded: true,
      })
    }
    componentWillUnmount = () => {
      this.unmounted = true
      if (this.image) {
        this.image.onload = undefined
        this.image = undefined
      }
    }
    preloadImage = picture => {
      if (!process.browser) {
        return null
      }
      if (picture.indexOf('webm') > -1) {
        this.setState({
          picture: `/static/screenshots/${this.props.project.picture}`,
          loaded: true,
        })
      } else {
        this.image = new Image()
        this.image.onload = () => this.onImageLoaded(picture)
        this.image.src = `/static/screenshots/${picture}`
      }
    }
    onChange = isVisible => {
      if (isVisible && !this.state.loaded) {
        this.preloadImage(this.props.project.picture)
      }
    }
    render = () => (
      <VisibilitySensor
        onChange={this.onChange}
        minTopValue={120}
        partialVisibility
      >
        <Component {...this.props} picture={this.state.picture} />
      </VisibilitySensor>
    )
  }

export default loadPicture
