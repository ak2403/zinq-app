import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { resetSettings } from '../../redux/actions/authentication_actions'

class CommonRoute extends Component {
    shouldComponentUpdate = nextProps => {
        let { is_user_signed } = nextProps

        if (is_user_signed) {
            this.props.history.push('/login')
            this.props.resetSettings()
            return true
        }

        return true
    }
    render() {
        let Component = this.props.component
        return (
            <React.Fragment>
                <Component />
            </React.Fragment>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({resetSettings}, dispatch)

const mapStateToProps = props => {
    let { authentication } = props
    return {
        is_user_signed: authentication.is_user_signed
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommonRoute))