import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Input, Button, Message, Icon } from 'semantic-ui-react'
import _ from 'lodash'
import { getUser, updateDetails, resetSettings } from '../../redux/actions/settings_actions'

class Settings extends Component {

    state = {
        update_user: { _id: '' },
        validations: {}
    }

    componentDidMount = () => {
        let { user_data } = this.props
        let { update_user } = this.state

        if (update_user._id !== user_data._id) {
            this.setState({
                update_user: user_data
            })
        }
    }

    shouldComponentUpdate = nextProps => {
        let { user, user_data } = nextProps
        let { update_user } = this.state

        if (user_data._id === '') {
            this.props.getUser(user.id)
        }

        if (update_user._id !== user_data._id) {
            this.setState({
                update_user: user_data
            })
        }

        return true
    }

    changeValue = (name, value) => {
        let { update_user } = this.state
        update_user[name] = value
        this.setState({
            update_user
        })
    }

    updateChange = () => {
        let { update_user, validations } = this.state
        let is_valid = true

        for (let key in update_user) {
            if (update_user[key] === '') {
                is_valid = false
                validations[key] = true
            } else {
                validations[key] = false
            }
        }

        if (is_valid) {
            this.props.updateDetails(update_user)
        }
        this.setState({
            validations
        })

    }

    render() {
        let { update_user, validations } = this.state
        let { is_user_updated } = this.props

        if (is_user_updated) {
            setInterval(() => {
                this.props.resetSettings()
            }, 1000)
        }

        return (<div className="settings-container">
            <div className="settings-list">
                <h3>Settings</h3>
                <p>You can view and edit your personal details.</p>
                {update_user._id ?
                    <div className="settings-list">
                        <div className="settings-option">
                            <div>First Name</div>
                            <div>
                                <Input
                                    error={validations['firstname'] || false}
                                    onChange={e => this.changeValue('firstname', e.target.value)}
                                    value={update_user.firstname}
                                />
                            </div>
                        </div>
                        <div className="settings-option">
                            <div>Last Name</div>
                            <div>
                                <Input
                                    error={validations['lastname'] || false}
                                    onChange={e => this.changeValue('lastname', e.target.value)}
                                    value={update_user.lastname}
                                />
                            </div>
                        </div>
                        <div className="settings-option">
                            <div>Email</div>
                            <div>
                                <Input
                                    error={validations['email'] || false}
                                    onChange={e => this.changeValue('email', e.target.value)}
                                    value={update_user.email}
                                />
                            </div>
                        </div>
                        <div className="settings-option">
                            <div>Phone</div>
                            <div>
                                <Input
                                    error={validations['phone'] || false}
                                    onChange={e => this.changeValue('phone', e.target.value)}
                                    value={update_user.phone}
                                />
                            </div>
                        </div>
                        {is_user_updated ? <Message success>
                            <Icon name='thumbs up' />
                            Your details are updated successfully.
                            </Message> : ''}
                        <div>
                            <Button onClick={this.updateChange}>Update the changes</Button>
                        </div>
                    </div>
                    : 'Loading...'}
            </div>
        </div>)
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ getUser, updateDetails, resetSettings }, dispatch)

const mapStateToProps = props => {
    let { settings, authentication } = props
    return {
        user: authentication.user,
        user_data: settings.user_data,
        is_user_updated: settings.is_user_updated
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings)