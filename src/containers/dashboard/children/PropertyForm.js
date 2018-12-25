import React, { Component } from 'react'
import { Form, Input, Button } from 'semantic-ui-react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { submitProperty, goback } from '../../../redux/actions/dashboard_actions'

class PropertyForm extends Component {

    state = {
        property_data: {
            property_value: 0,
            deposit_value: 0
        },
        is_error: {
            property_value: false,
            deposit_value: false
        }
    }

    changeValue = (name, value) => {
        let { property_data } = this.state
        property_data[name] = Number(value) || 0
        this.setState({
            property_data
        })
    }

    onSubmit = () => {
        let { property_data, is_error } = this.state
        let is_valid = true

        for (let key in property_data) {
            if (property_data[key] === 0) {
                is_valid = false
                is_error[key] = true
            } else {
                is_error[key] = false
            }
        }

        if (is_valid) {
            this.props.submitProperty(property_data)
        }
        this.setState({
            is_error
        })

    }

    render() {
        let { property_data, is_error } = this.state
console.log(is_error)
        return (<div className="credit-income">
            <Form onSubmit={this.onSubmit}>
                <Form.Field inline className={`form-element ${is_error['property_value'] && 'error'}`}>
                    <label>Your Property Value</label>
                    <Input placeholder='property Value' onChange={e => this.changeValue('property_value', e.target.value)} />
                </Form.Field>

                <Form.Field inline className={`form-element ${is_error['deposit_value'] && 'error'}`}>
                    <label>Deposit</label>
                    <Input placeholder='Your deposit' onChange={e => this.changeValue('deposit_value', e.target.value)} />
                </Form.Field>

                <Form.Field inline className="form-button">
                    <span onClick={() => this.props.goback('income')}>Back</span>
                    <Button type='submit'>Next</Button>
                </Form.Field>
            </Form>
        </div>)
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ submitProperty, goback }, dispatch)

export default connect(null, mapDispatchToProps)(PropertyForm)