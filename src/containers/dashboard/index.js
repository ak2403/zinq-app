import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {onLogout} from '../../redux/actions/authentication_actions'

class Dashboard extends Component{
    render(){
        return (
            <div>
                Dashboard
                <button onClick={this.props.onLogout}>Logout</button>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ onLogout }, dispatch)

const mapStateToProps = props => {
    let { authentication } = props
    return {
        is_user_signed: authentication.is_user_signed
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dashboard))