import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import _ from 'lodash'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import { onSignup } from '../../redux/actions/authentication_actions'

class SignupComponent extends Component {
    state = {
        user_data: {
            firstname: '',
            lastname: '',
            email: '',
            phone: '',
            password: '',
            confirm_password: ''
        },
        validations: {
            firstname: false,
            lastname: false,
            email: false,
            phone: false,
            password: false,
            is_password_match: false
        }
    }

    changeValue = (name, value) => {
        let { user_data } = this.state
        user_data[name] = value
        this.setState({
            user_data
        })
    }

    checkValue = (name, value) => {
        let {user_data, validations}=this.state

        if(user_data.password === value){
            // validations[]
        }
    }

    onSubmit = () => {
        let {user_data, validations}=this.state
        let validation_array = _.values(validations)


        console.log(validation_array)
        // this.props.onSignup(user_data)
    }

    render() {
        let { user_data, validations } = this.state
        return (
            <div>
                <Form onSubmit={this.onSubmit}>
                    <Form.Group widths='equal'>
                        <Form.Input
                            fluid
                            placeholder='First name'
                            onChange={e => this.changeValue('firstname', e.target.value)}
                            error={validations.firstname} />
                        <Form.Input
                            fluid
                            placeholder='Last name'
                            onChange={e => this.changeValue('lastname', e.target.value)}
                            error={validations.lastname} />
                    </Form.Group>
                    <Form.Field>
                        <Form.Input
                            fluid
                            placeholder='Email'
                            onChange={e => this.changeValue('email', e.target.value)}
                            error={validations.email} />
                    </Form.Field>
                    <Form.Field>
                        <Form.Input
                            fluid
                            placeholder='Phone'
                            onChange={e => this.changeValue('phone', e.target.value)}
                            error={validations.phone} />
                    </Form.Field>
                    <Form.Field>
                        <Form.Input
                            fluid
                            type="password"
                            placeholder='password'
                            onChange={e => this.changeValue('password', e.target.value)}
                            error={validations.password} />
                    </Form.Field>
                    <Form.Field>
                        <Form.Input
                            fluid
                            type="password"
                            placeholder='Confirm password'
                            onChange={e => this.checkValue('confirm_password', e.target.value)}
                            error={validations.is_password_match} />
                    </Form.Field>
                    <Form.Field>
                        <Checkbox label='I agree to the Terms and Conditions' />
                    </Form.Field>
                    <Button type='submit'>Signup</Button>
                </Form>
                <Link to='/login'>Login</Link>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ onSignup }, dispatch)

const mapStateToProps = props => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupComponent)