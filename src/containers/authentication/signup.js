import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
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
        }
    }

    changeValue = (name, value) => {
        let { user_data } = this.state
        user_data[name] = value
        this.setState({
            user_data
        })
    }

    onSubmit = () => {
        this.props.onSignup(this.state.user_data)
    }

    render() {
        let { user_data } = this.state
        return (
            <div>
                <Form onSubmit={this.onSubmit}>
                    <Form.Field>
                        <input placeholder='First name' onChange={e => this.changeValue('firstname', e.target.value)} />
                    </Form.Field>
                    <Form.Field>
                        <input placeholder='Last name' onChange={e => this.changeValue('lastname', e.target.value)} />
                    </Form.Field>
                    <Form.Field>
                        <input placeholder='Email' onChange={e => this.changeValue('email', e.target.value)} />
                    </Form.Field>
                    <Form.Field>
                        <input placeholder='Phone' onChange={e => this.changeValue('phone', e.target.value)} />
                    </Form.Field>
                    <Form.Field>
                        <input type="password" placeholder='password' onChange={e => this.changeValue('password', e.target.value)} />
                    </Form.Field>
                    <Form.Field>
                        <input type="password" placeholder='Confirm password' onChange={e => this.changeValue('confirm_password', e.target.value)} />
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

const mapDispatchToProps = dispatch => bindActionCreators({onSignup}, dispatch)

const mapStateToProps = props => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupComponent)