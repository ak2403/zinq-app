import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
// import { resetSettings } from '../../redux/actions/authentication_actions'

class ProtectedRoute extends Component {

    render() {
        let getToken = localStorage.getItem('authToken')

        if (!getToken) {
            return this.props.history.push('/login')
        }

        let Component = this.props.component
        return (
            <div className="container-center">
                    <Component />
                
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ }, dispatch)

const mapStateToProps = props => {
    let { authentication } = props
    return {
        is_user_signed: authentication.is_user_signed
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProtectedRoute))