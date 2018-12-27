import React, { Component } from 'react'
import { Form, Input, Button } from 'semantic-ui-react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { submitIncome, goback } from '../../../redux/actions/dashboard_actions'

class IncomeForm extends Component {

    state = {
        amount_data: {
            income: 0,
            expense: 0,
            partner_income: 0,
            partner_expense: 0
        },
        validations: {
            income: false,
            expense: false
        }
    }

    componentDidMount = () => {
        let { type, income } = this.props
        let validations = {
            income: false,
            expense: false
        }
        let amount_data = {
            income: income.income || 0,
            expense: income.expense || 0
        }

        if (type === 'couple') {
            validations = Object.assign({}, validations, {
                partner_income: false,
                partner_expense: false
            })
            amount_data = Object.assign({}, amount_data, {
                partner_income: income.partner_income || 0,
                partner_expense: income.partner_expense || 0
            })
        }

        this.setState({
            validations,
            amount_data
        })
    }

    changeValue = (name, value) => {
        let { amount_data } = this.state
        amount_data[name] = Number(value)
        this.setState({
            amount_data
        })
    }

    onSubmit = () => {
        let { amount_data, validations } = this.state
        let is_valid = true

        for (let key in amount_data) {
            if (amount_data[key] === 0) {
                is_valid = false
                validations[key] = true
            } else {
                validations[key] = false
            }
        }

        if (is_valid) {
            this.props.submitIncome(amount_data)
        }
        this.setState({
            validations
        })
    }

    render() {
        let { amount_data, validations } = this.state
        let { type } = this.props

        let total_income = amount_data.income + (amount_data.partner_income || 0)
        let total_expense = amount_data.expense + (amount_data.partner_expense || 0)

        return (<div className="credit-income">
            <div className="credit-header">
                <div className="credit income">
                    <h3>Total Income</h3>
                    $ {total_income}
                </div>
                <div className="credit expense">
                    <h3>Total Expense</h3>
                    $ {total_expense}
                </div>
            </div>
            <Form onSubmit={this.onSubmit}>
                <Form.Field inline className={`form-element ${validations['income'] && 'error'}`}>
                    <label>Your Income</label>
                    <Input 
                        placeholder='Your Income' 
                        value={amount_data.income}
                        onChange={e => this.changeValue('income', e.target.value)} />
                </Form.Field>

                <Form.Field inline className={`form-element ${validations['expense'] && 'error'}`}>
                    <label>Your Expense</label>
                    <Input 
                        placeholder='Your Expense' 
                        value={amount_data.expense}
                        onChange={e => this.changeValue('expense', e.target.value)} />
                </Form.Field>
                {type === 'couple' ?
                    <React.Fragment>
                        <Form.Field inline className={`form-element ${validations['partner_income'] && 'error'}`}>
                            <label>Your Partner Income</label>
                            <Input 
                            placeholder='Your Partner Income' 
                            value={amount_data.partner_income}
                            onChange={e => this.changeValue('partner_income', e.target.value)} />
                        </Form.Field>

                        <Form.Field inline className={`form-element ${validations['partner_expense'] && 'error'}`}>
                            <label>Your Partner Expense</label>
                            <Input 
                                placeholder='Your Partner Expense' 
                                value={amount_data.partner_expense}
                                onChange={e => this.changeValue('partner_expense', e.target.value)} />
                        </Form.Field>
                    </React.Fragment>
                    : ''}
                <Form.Field inline className="form-button">
                    <span onClick={() => this.props.goback('select')}>Back</span>
                    <Button type='submit'>Next</Button>
                </Form.Field>
            </Form>
        </div>)
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ submitIncome, goback }, dispatch)

const mapStateToProps = props => {
    let { dashboard } = props
    return {
        type: dashboard.type,
        income: dashboard.income
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IncomeForm)