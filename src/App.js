import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import LoginComponent from './containers/authentication'
import SignupComponent from './containers/authentication/signup'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            {/* <CommonRoute exact path='/login' component={LoginForm} />
            <CommonRoute exact path='/signup' component={SignUp} /> */}
            <Route exact path='/' component={LoginComponent} />
            <Route exact path='/signup' component={SignupComponent} />

            {/* <ProtectedRoute exact path='/dashboard' component={DashboardView} />
            <ProtectedRoute exact path='/projects' component={ProjectView} />
            <ProtectedRoute exact path='/issues' component={IssueView} /> */}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
