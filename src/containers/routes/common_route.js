import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { resetSettings } from '../../redux/actions/authentication_actions'
import Logo from '../../img/logo.png'

class CommonRoute extends Component {
    shouldComponentUpdate = nextProps => {
        let { is_user_signed, is_user_logged } = nextProps

        if (is_user_signed) {
            this.props.history.push('/login')
            this.props.resetSettings()
            return true
        }

        if (is_user_logged) {
            this.props.history.push('/')
            return true
        }

        return true
    }

    componentDidMount = () => {
        let getToken = localStorage.getItem('authToken')
        if (getToken) {
            this.props.history.push('/')
        }
    }

    render() {
        let Component = this.props.component
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