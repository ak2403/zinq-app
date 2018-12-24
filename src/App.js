import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import CommonRoute from './containers/routes/common_route'
import ProtectedRoute from './containers/routes/protected_route'
import LoginComponent from './containers/authentication'
import SignupComponent from './containers/authentication/signup'
import DashBoard from './containers/dashboard'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app-container">
          <Switch>
            <CommonRoute exact path='/login' component={LoginComponent} />
            <CommonRoute exact path='/signup' component={SignupComponent} />
            <ProtectedRoute exact exact path='/' component={DashBoard} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
