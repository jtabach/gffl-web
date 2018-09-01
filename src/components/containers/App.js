import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';

import DemoWorker from '../demos/DemoWorker';
import DemoAuth from '../demos/DemoAuth';
import Header from '../shared/Header';
import SideDrawer from '../shared/SideDrawer';
import BackDrop from '../shared/BackDrop';

import { fetchUser } from '../../actions/auth';

class App extends Component {
  state = {
    isSideDrawerOpen: false
  };

  componentDidMount() {
    this.props.fetchUser();
  }

  handleDrawerToggleClick = () => {
    this.setState(prevState => {
      return { isSideDrawerOpen: !prevState.isSideDrawerOpen };
    });
  };

  handleBackDropClick = () => {
    this.setState({ isSideDrawerOpen: false });
  };

  render() {
    let sideDrawer;
    let backDrop;

    if (this.state.isSideDrawerOpen) {
      sideDrawer = <SideDrawer />;
      backDrop = <BackDrop handleBackdropClick={this.handleBackDropClick} />;
    }
    return (
      <div style={{ height: '100%' }}>
        <Header handleDrawerToggleClick={this.handleDrawerToggleClick} />
        {sideDrawer}
        {backDrop}
        <p>This is my new react app</p>
      </div>
    );
  }
}

export default hot(module)(connect(null, { fetchUser })(App));
