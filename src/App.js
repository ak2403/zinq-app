import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import CommonRoute from './containers/routes/common_route'
import ProtectedRoute from './containers/routes/protected_route'
import LoginComponent from './containers/authentication'
import SignupComponent from './containers/authentication/signup'
import DashBoard from './containers/dashboard'
import Settings from './containers/settings'
import { updateToken } from './redux/actions/authentication_actions'

class App extends Component {
  componentDidMount = () => {
    this.props.updateToken()
  }

  render() {
    return (
      <BrowserRouter>
        <div className="app-container">
          <Switch>
            <CommonRoute exact path='/login' component={LoginComponent} />
            <CommonRoute exact path='/signup' component={SignupComponent} />
            <ProtectedRoute exact exact path='/' component={DashBoard} />
            <ProtectedRoute exact exact path='/settings' component={Settings} />
            <Redirect to="/login" />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ updateToken }, dispatch)

export default connect(null, mapDispatchToProps)(App);
