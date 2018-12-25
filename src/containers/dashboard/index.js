import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import CreditForm from './children/CreditForm'

class Dashboard extends Component {
    render() {
        return (<div>
            <CreditForm />
        </div>)
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)

const mapStateToProps = props => {
    let { authentication } = props
    return {
        is_user_signed: authentication.is_user_signed
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dashboard))