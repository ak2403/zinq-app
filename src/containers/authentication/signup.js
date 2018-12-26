import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import _ from 'lodash'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import { validation_func } from '../validation'
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
            confirm_password: false,
            agree_me: false
        }
    }

    changeValue = (name, value) => {
        let { user_data, validations } = this.state
        user_data[name] = value
        
        if (name === 'email') {
            validations['email'] = validation_func('email', value)
        } else if (name === 'phone') {
            validations['phone'] = validation_func('phone', value)
        } else if (name === 'password') {
            validations['password'] = validation_func('password', value)
        } else if (name === 'confirm_password') {
            validations['confirm_password'] = validation_func('confirm_password', value)
        } else {
            validations[name] = value.length === 0 ? true : false
        }
    
        this.setState({
            user_data,
            validations
        })
    }

    checkValue = (name, value) => {
        let { user_data, validations } = this.state
        user_data['confirm_password'] = value
        validations['is_password_match'] = user_data.password !== value
        this.setState({
            validations,
            user_data
        })
    }

    onSubmit = () => {
        let { user_data, validations } = this.state

        for (let key in user_data) {
            validations[key] = validation_func(key, user_data[key])
        }

        validations["agree_me"] = !this.refs.agree_me.state.checked
        let validation_array = _.values(validations)
        
        if (validation_array.indexOf(true) === -1) {
            this.props.onSignup(user_data)
        }

        this.setState({
            validations
        })
    }

    render() {
        let { validations } = this.state
        let { is_signup_error, signup_error } = this.props

        return (<div className="authentication-form">
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
                        error={validations.confirm_password} />
                </Form.Field>
                <Form.Field inline className="form-button" required>
                    <Checkbox className={validations.agree_me ? 'error-check' : ''} ref="agree_me" label='I agree to the Terms and Conditions' />
                    <Button className="button-style" type='submit'>Signup</Button>
                </Form.Field>

                {is_signup_error ? <p className="error-message">{signup_error}</p> : ''}

            </Form>

            <p className="login-ptag"><Link to='/login'>Already have one? Login here</Link></p>
        </div>)
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ onSignup }, dispatch)

const mapStateToProps = props => {
    let { authentication } = props
    return {
        is_signup_error: authentication.is_signup_error,
        signup_error: authentication.signup_error
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupComponent)