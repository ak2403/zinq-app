import React, { Component } from 'react'
import { Icon } from 'semantic-ui-react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { selectType} from '../../../redux/actions/dashboard_actions'

class SelectForm extends Component {

    render() {
        return (<div>
            <Icon name="user" onClick={() => this.props.selectType('single')} />

            <Icon name="users" onClick={() => this.props.selectType('couple')} />
        </div>)
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ selectType }, dispatch)

export default connect(null, mapDispatchToProps)(SelectForm)