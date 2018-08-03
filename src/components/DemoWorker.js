import React, { Component } from 'react';
import axios from 'axios';

import { connect } from 'react-redux';
import { fetchWorkerDemo } from '../actions/demo';

const intervalFrequency = 3000;

class DemoWorker extends Component {
  componentDidMount() {
    this.props.fetchWorkerDemo();
    setInterval(() => {
      this.props.fetchWorkerDemo();
      console.log('fetching');
    }, intervalFrequency);
  }

  render() {
    console.log(this.props.demo);
    return (
      <div>
        <div>Service Worker Test</div>
      </div>
    );
  }
}

function mapStateToProps({ demo }) {
  return {
    demo
  };
}

export default connect(mapStateToProps, { fetchWorkerDemo })(DemoWorker);
