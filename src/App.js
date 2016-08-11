import React, { Component } from 'react';

import Row from './components/row'
import LabelFilter from './components/label_filter'

class App extends Component {
  displayIssues() {
    const { issues } = this.props
    const predicate = label => {
      const { name } = label

      return name && name !== 'draft' && name.startsWith( 'team-size-' )
    }

    const issuePredicate = issue => {
      debugger
      return issue.labels.filter( predicate ).length > 0
    }

    return issues.filter( issuePredicate )
  }

  rows() {
    const issues = this.displayIssues()

    return issues.map( (row, index) =>
      <Row key={`row-${index}`} {...row} />
    )
  }

  render() {
    return (
      <div>
        <LabelFilter labels={this.props.labels} />
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Labels</th>
              <th>Goal</th>
              <th>Title</th>
              <th>Author</th>
              <th>Created</th>
              <th>Tried</th>
              <th>Up</th>
              <th>Down</th>
              <th>Check</th>
            </tr>
          </thead>
          <tbody>
            {this.rows()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
