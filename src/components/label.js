import React, { Component } from 'react'

export default class Label extends Component {
  render() {
    const { url, name, color } = this.props

    return (
      <span style={{color}}>{name}</span>
    )
  }
}