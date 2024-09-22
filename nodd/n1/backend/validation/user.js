const yup = require('yup');
const userValidation = yup.object().shape({
    name:yup.string().required('Username is required').
    min(3,'Username must be at least 3 characters long'),
    email:yup.string().email('Email must be a valid email')
    .required('Email is required'),
    password:yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters long')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[0-9]/, 'Password must contain at least one number')
    .matches(/[@$!%*?&]/, 'Password must contain at least one special character'),
    confirmPassword:yup.string().required('Confirm Password is required')
    .oneOf([yup.ref('password'),null],'Passwords must match')
});
module.exports = userValidation;