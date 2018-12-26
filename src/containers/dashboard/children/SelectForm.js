import React, { Component } from 'react'
import { Icon } from 'semantic-ui-react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { selectType } from '../../../redux/actions/dashboard_actions'

class SelectForm extends Component {

    render() {
        return (<div className="credit-elements select-form">
            <h3>Welcome to the Zinq</h3>
            <p>Choose an category to register your credits profile</p>
            <div className="icon-select">
                <div className="icon-container" onClick={() => this.props.selectType('single')}>
                    <Icon name="user" />
                    <h4>Single</h4>
                </div>
                <div className="icon-container" onClick={() => this.props.selectType('couple')}>
                    <Icon name="users" />
                    <h4>Couple</h4>
                </div>
            </div>
        </div>)
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ selectType }, dispatch)

export default connect(null, mapDispatchToProps)(SelectForm)