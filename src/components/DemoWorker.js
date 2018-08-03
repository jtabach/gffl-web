import React, { Component } from 'react';
import axios from 'axios';

import { connect } from 'react-redux';
import { fetchWorkerDemo } from '../actions/demo';

class DemoWorker extends Component {
  componentDidMount() {
    this.props.fetchWorkerDemo();
  }

  // _handleClick() {
  //   console.log('click');
  //   axios.get('http://localhost:5000').then(res => {
  //     console.log(res);
  //   });
  // }

  render() {
    console.log(this.props.demo);
    return (
      <div>
        <div>Service Worker Test</div>
        {/* <button onClick={this._handleClick.bind(this)}>Fetch Data</button> */}
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
// export default DemoWorker;
