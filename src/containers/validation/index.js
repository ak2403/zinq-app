export const validation_func = (type, value) => {
    switch (type) {
        case 'email':
            let re_email = /\S+@\S+\.\S+/;
            return !re_email.test(value)

        case 'phone':
            let re_phone = /[2-9]{1}\d{2}/;
            return !re_phone.test(value)

        case 'firstname':
        case 'lastname':
            return value.length === 0

        case 'password':
        case 'confirm_password':
            let checkPassword = /[A-Z]/.test(value) &&
                /[a-z]/.test(value) &&
                /[0-9]/.test(value) &&
                /[^A-Za-z0-9]/.test(value) &&
                value.length > 4;
            return !checkPassword

        default:
            return false
    }
}