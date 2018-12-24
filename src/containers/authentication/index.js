import React, { Component } from 'react'
import { Button, Form } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {onLogin} from '../../redux/actions/authentication_actions'

class LoginComponent extends Component {
    state = {
        login_data: {
            email: '',
            password: ''
        },
        validations: {
            email: false,
            password: false
        }
    }

    changeValue = (name, value) => {
        let { login_data } = this.state
        login_data[name] = value
        this.setState({
            login_data
        })
    }

    onSubmit = () => {
        let { login_data } = this.state
        this.props.onLogin(login_data)
    }

    render() {
        let { validations } = this.state

        return (
            <div>
                <Form onSubmit={this.onSubmit}>
                    <Form.Field>
                        <Form.Input
                            fluid
                            placeholder='email'
                            onChange={e => this.changeValue('email', e.target.value)}
                            error={validations.email} />
                    </Form.Field>
                    <Form.Field>
                        <Form.Input
                            type="password"
                            fluid
                            placeholder='Password'
                            onChange={e => this.changeValue('password', e.target.value)}
                            error={validations.password} />
                    </Form.Field>
                    <Button type='submit'>Login</Button>
                </Form>
                <Link to='/signup'>Signup</Link>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ onLogin }, dispatch)

const mapStateToProps = props => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent)