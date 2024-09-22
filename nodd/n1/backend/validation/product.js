const yup = require('yup');

const productValidation = yup.object().shape({
    title:yup.string().required('Title is required').
    min(3,'Title must be at least 3 characters long'),
    description: yup.string()
    .required('Email is required'),
    price:yup.string().required('Price is required'),
    userId: yup.string().required('User Id is required'),
    category:yup.string().required('Category is required')
})
module.exports = productValidation;