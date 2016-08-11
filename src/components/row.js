import React, { Component } from 'react'

import Label from './label'

export default class Row extends Component {
  labels() {
    const { number, labels } = this.props

    return labels.map( (label, index) =>
      <Label key={`label-${number}-${index}`} {...label} />
    )
  }

  render() {
    const { number, title, user, created_at } = this.props

    return (
      <tr>
        <td>{number}</td>
        <td>{this.labels()}</td>
        <td>{title}</td>
        <td>{user.login}</td>
        <td>{created_at}</td>
        <td>TODO: tried</td>
        <td>TODO: up</td>
        <td>TODO: down</td>
        <td>TODO: check</td>
      </tr>
    )
  }
}
