import React, { Component } from 'react'
import { Form, Input, Button } from 'semantic-ui-react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { submitIncome } from '../../../redux/actions/dashboard_actions'

class IncomeForm extends Component {

    state = {
        amount_data: {
            income: 0,
            expense: 0,
            partner_income: 0,
            partner_expense: 0
        }
    }

    changeValue = (name, value) => {
        let { amount_data } = this.state
        amount_data[name] = Number(value)
        this.setState({
            amount_data
        })
    }

    onSubmit = () => {
        let {amount_data}=this.state
        this.props.submitIncome(amount_data)
    }

    render() {
        let { amount_data } = this.state
        let { type } = this.props

        let total_income = amount_data.income + amount_data.partner_income
        let total_expense = amount_data.expense + amount_data.partner_expense

        return (<div>
            Total Income {total_income}
            Total Expense {total_expense}
            <Form onSubmit={this.onSubmit}>
                <Form.Field inline>
                    <label>Your Income</label>
                    <Input placeholder='Your Income' onChange={e => this.changeValue('income', e.target.value)} />
                </Form.Field>

                <Form.Field inline>
                    <label>Your Expense</label>
                    <Input placeholder='Your Expense' onChange={e => this.changeValue('expense', e.target.value)} />
                </Form.Field>
                {type === 'couple' ?
                    <React.Fragment>
                        <Form.Field inline>
                            <label>Your Partner Income</label>
                            <Input placeholder='Your Partner Income' onChange={e => this.changeValue('partner_income', e.target.value)} />
                        </Form.Field>

                        <Form.Field inline>
                            <label>Your Partner Expense</label>
                            <Input placeholder='Your Partner Expense' onChange={e => this.changeValue('partner_expense', e.target.value)} />
                        </Form.Field>
                    </React.Fragment>
                    : ''}
                <Button type='submit'>Next</Button>
            </Form>
        </div>)
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({submitIncome}, dispatch)

const mapStateToProps = props => {
    let { dashboard } = props
    return {
        type: dashboard.type
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IncomeForm)