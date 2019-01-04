import React, { Component } from 'react'
import { Button, Form, Message } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import GoogleLogin from 'react-google-login'
import _ from 'lodash'
import { onLogin, googleLogin } from '../../redux/actions/authentication_actions'

class LoginComponent extends Component {
    state = {
        login_data: {
            email: '',
            password: ''
        },
        validations: {
            email: false,
            password: false
        },
        is_submit: false
    }

    changeMail = value => {
        let { login_data, validations } = this.state
        let re = /\S+@\S+\.\S+/;
        validations['email'] = !re.test(value)
        login_data['email'] = value
        this.setState({
            login_data,
            validations
        })
    }

    changePassword = value => {
        let { login_data, validations } = this.state
        validations['password'] = value.length === 0 ? true : false
        login_data['password'] = value
        this.setState({
            login_data,
            validations
        })
    }

    successResponse = response => {
        let { profileObj } = response
        let google_data = {
            firstname: profileObj.givenName,
            lastname: profileObj.familyName,
            email: profileObj.email,
            source: 'google'
        }
        console.log(google_data)
        this.props.googleLogin(google_data)
    }

    onSubmit = () => {
        let { login_data, validations, is_submit } = this.state
        let validation_array = _.values(validations)

        if (validation_array.indexOf(true) === -1) {
            this.props.onLogin(login_data)
            is_submit = true
        }

        this.setState({
            is_submit
        })
    }

    render() {
        let { validations, is_submit } = this.state
        let { is_login_error, login_error } = this.props

        return (<div className="authentication-form">
            <Form onSubmit={this.onSubmit}>
                <Form.Field>
                    <Form.Input
                        fluid
                        placeholder='email'
                        onChange={e => this.changeMail(e.target.value)}
                        error={validations.email} />
                </Form.Field>
                <Form.Field>
                    <Form.Input
                        type="password"
                        fluid
                        placeholder='Password'
                        onChange={e => this.changePassword(e.target.value)}
                        error={validations.password} />
                </Form.Field>

                {is_login_error ? <p className="error-message">{login_error}</p> : ''}

                <Form.Field inline className="form-button">
                    <span className="span-style">Forgot password?</span>
                    <Button className="button-style" type='submit' loading={is_submit}>Login</Button>
                </Form.Field>
                <GoogleLogin
                    clientId="802142740770-arughcgcbvu7bsb9aajic7l2deh97kn5.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={this.successResponse}
                // onFailure={responseGoogle}
                />
            </Form>
            {/* <button onClick={this.successResponse}>Google</button> */}

            <p className="login-ptag"><Link to='/signup'>Don't have one? create an account</Link></p>
        </div>)
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ onLogin, googleLogin }, dispatch)

const mapStateToProps = props => {
    let { authentication } = props
    return {
        is_login_error: authentication.is_login_error,
        login_error: authentication.login_error
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent)