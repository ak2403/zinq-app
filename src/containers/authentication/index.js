import React, { Component } from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'

class LoginComponent extends Component {
    render() {
        return (
            <div>
                <Form>
                    <Form.Field>
                        <input placeholder='useremail' />
                    </Form.Field>
                    <Form.Field>
                        <input type="password" placeholder='password' />
                    </Form.Field>
                    <Form.Field>
                        <Checkbox label='I agree to the Terms and Conditions' />
                    </Form.Field>
                    <Button type='submit'>Submit</Button>
                </Form>
                Signup
            </div>
        )
    }
}

export default LoginComponent