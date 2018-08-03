import React, { Component } from 'react';

class DemoWorker extends Component {
  render() {
    return (
      <div>
        <div>Service Worker Test</div>
        <button onClick={() => console.log('test')}>Fetch Data</button>
      </div>
    );
  }
}

export default DemoWorker;
