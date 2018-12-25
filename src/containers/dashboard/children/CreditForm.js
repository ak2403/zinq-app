import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import SelectForm from './SelectForm'
import IncomeForm from './IncomeForm'
import PropertyForm from './PropertyForm'
import SuccessMsg from './SuccessMsg'

class CreditForm extends Component {

    render() {
        let { current_page } = this.props
        let render_component = {
            'select': <SelectForm />,
            'income': <IncomeForm />,
            'property': <PropertyForm />,
            'success': <SuccessMsg />
        }

        return (<React.Fragment>
            {render_component[current_page]}
        </React.Fragment>)
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)

const mapStateToProps = props => {
    let { dashboard } = props
    return {
        current_page: dashboard.current_page
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreditForm)