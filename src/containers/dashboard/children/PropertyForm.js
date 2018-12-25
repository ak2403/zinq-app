import React, { Component } from 'react'
import { Form, Input, Button } from 'semantic-ui-react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { submitProperty } from '../../../redux/actions/dashboard_actions'

class PropertyForm extends Component {

    state = {
        property_data: {
            property_value: 0,
            deposit_value: 0
        }
    }

    changeValue = (name, value) => {
        let { property_data } = this.state
        property_data[name] = Number(value)
        this.setState({
            property_data
        })
    }

    onSubmit = () => {
        let {property_data}=this.state
        this.props.submitProperty(property_data)
    }

    render() {
        let { property_data } = this.state

        return (<div>
            <Form onSubmit={this.onSubmit}>
                <Form.Field inline>
                    <label>Your Property Value</label>
                    <Input placeholder='property Value' onChange={e => this.changeValue('property_value', e.target.value)} />
                </Form.Field>

                <Form.Field inline>
                    <label>Deposit</label>
                    <Input placeholder='Your deposit' onChange={e => this.changeValue('deposit_value', e.target.value)} />
                </Form.Field>
                <Button type='submit'>Next</Button>
            </Form>
        </div>)
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ submitProperty }, dispatch)

export default connect(null, mapDispatchToProps)(PropertyForm)