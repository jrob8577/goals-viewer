import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Row from './components/row'

import { TEST_DATA } from './data/issues'

class App extends Component {
  render() {
    return (
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
          {TEST_DATA.map( (row, index) => <Row key={`row-${index}`} {...row} />)}
        </tbody>
      </table>
    );
  }
}

export default App;
