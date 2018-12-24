import React, { Component } from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'

class SignupComponent extends Component {
    render() {
        return (
            <div>
                <Form>
                    <Form.Field>
                        <input placeholder='First name' />
                    </Form.Field>
                    <Form.Field>
                        <input placeholder='Last name' />
                    </Form.Field>
                    <Form.Field>
                        <input placeholder='Email' />
                    </Form.Field>
                    <Form.Field>
                        <input placeholder='Phone' />
                    </Form.Field>
                    <Form.Field>
                        <input type="password" placeholder='password' />
                    </Form.Field>
                    <Form.Field>
                        <input type="password" placeholder='Confirm password' />
                    </Form.Field>
                    <Form.Field>
                        <Checkbox label='I agree to the Terms and Conditions' />
                    </Form.Field>
                    <Button type='submit'>Signup</Button>
                </Form>
                Login
            </div>
        )
    }
}

export default SignupComponent