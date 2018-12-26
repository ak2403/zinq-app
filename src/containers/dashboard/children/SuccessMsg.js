import React, { Component } from 'react'
import { Form, Input, Button } from 'semantic-ui-react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { submitProperty } from '../../../redux/actions/dashboard_actions'

class SuccessMsg extends Component {

    state = {
    }

    onSubmit = () => {
    }

    render() {
        let { income, property } = this.props

        let income_percentage = (income.expense + income.partner_expense) / (income.income + income.partner_income)
        let property_percentage = property.deposit_value / property.property_value

        let message = ''

        // if(income_percentage <= 0.5 && property_percentage >= 0.2){
            message = <React.Fragment><h1>Congratulations.</h1> You are eligible for the credits.</React.Fragment>
        // }else{
            // message = <React.Fragment><h1>Sorry!!!</h1><p>You didn't meet the requirements. But don't lose hope.<br/> Please call us and we will guide you futhur for your profile.</p></React.Fragment>
        // }

        return (<div className="success-container">
            <div className="final-message success">
                {message}
            </div>
        </div>)
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)

const mapStateToProps = props => {
    let { dashboard } = props
    return {
        income: dashboard.income,
        property: dashboard.property
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SuccessMsg)