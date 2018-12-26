import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Menu, Icon } from 'semantic-ui-react'
import { onLogout } from '../../redux/actions/authentication_actions'

class ProtectedRoute extends Component {

    logout = () => {
        this.props.history.push('/login')
        this.props.onLogout()
    }

    componentDidMount = () => {
        let getToken = localStorage.getItem('authToken')

        if (!getToken) {
            return this.props.history.push('/login')
        }
    }

    render() {
        let Component = this.props.component
        return (<div className="container-full">
            <div className="menu-container">
                <Menu secondary>
                    <Menu.Item
                        name='credits'
                        onClick={() => this.props.history.push('/')}
                        />
                    <Menu.Menu position='right'>
                        <Icon 
                            className="user-icon" 
                            name="user circle" 
                            onClick={() => this.props.history.push('/settings')} 
                            />

                        <Menu.Item
                            onClick={this.logout}
                            name='logout'
                        />
                    </Menu.Menu>
                </Menu>
            </div>

            <div className="content-container">
                <Component />
            </div>

        </div>)
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ onLogout }, dispatch)

const mapStateToProps = props => {
    let { authentication } = props
    return {
        is_user_signed: authentication.is_user_signed
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProtectedRoute))