import React, { Component } from 'react'
import { Icon } from 'semantic-ui-react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { selectType } from '../../../redux/actions/dashboard_actions'

class SelectForm extends Component {

    render() {
        return (<div className="credit-elements select-form">
            <div className="icon-select">
                <div className="icon-container" onClick={() => this.props.selectType('single')}>
                    <Icon name="user" />
                </div>
                <div className="icon-container" onClick={() => this.props.selectType('couple')}>
                    <Icon name="users" />
                </div>
            </div>
        </div>)
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ selectType }, dispatch)

export default connect(null, mapDispatchToProps)(SelectForm)