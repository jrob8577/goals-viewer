import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash'

import App from './App';

import { TEST_DATA } from './data/issues'

const labels = _.flatMap( TEST_DATA, issue => issue.labels )

ReactDOM.render(
  <App issues={TEST_DATA} label={labels} />,
  document.getElementById('root')
);
