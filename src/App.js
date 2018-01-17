import React, { Component } from 'react';
import {Route, BrowserRouter as Router} from 'react-router-dom'
import {connect} from 'react-redux'
import './App.css';
import Login from './components/Login'
import SelectDate from './components/SelectDate'
import Finished from './components/Finished'

import PropTypes from 'prop-types';

class App extends Component {
  render() {
    this.context.mixpanel.track('Page loaded')

    return (
      <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        <Route exact path="/enrollment" component={Login} />

        <Route exact path="/calendar" component={SelectDate} />

        <Route exact path="/finished" component={Finished} />
        <Route exact path="/enrollment/finished" component={Finished} />
      </div>
      </Router>
    );
  }
}

App.contextTypes = {
    mixpanel: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
})

export default connect(mapStateToProps)(App)