const yup = require('yup');
const loginValidation = yup.object().shape({
    email: yup.string()
        .required('Email is required')
        .email('Email must be a valid email'),
    password: yup.string()
        .required('Password is required')
})
module.exports = loginValidation