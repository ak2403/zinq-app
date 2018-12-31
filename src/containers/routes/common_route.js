import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom'
import { resetSettings } from '../../redux/actions/authentication_actions'
import Logo from '../../img/logo.png'

class CommonRoute extends Component {

    render() {
        let Component = this.props.component
        let getToken = localStorage.getItem('authToken')
        
        if (getToken) {
            return <Redirect to='/' />
        }

        return (<div className="container-center">
            <div className="logo-container">
                <img src={Logo} />
            </div>
            <div className="authentication-container">
                <Component />
            </div>
        </div>)
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ resetSettings }, dispatch)

const mapStateToProps = props => {
    let { authentication } = props
    return {
        is_user_signed: authentication.is_user_signed,
        is_user_logged: authentication.is_user_logged
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommonRoute))