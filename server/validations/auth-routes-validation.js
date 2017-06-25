
var schema = {
    'email': {
        notEmpty: true,
        isEmail: {
            errorMessage: 'Invalid Email'
        },
        errorMessage:'Email required'
    },
    'password': {
        notEmpty: true,
        errorMessage: 'Password required' // Error message for the parameter
    }
};


module.exports.loginSchema = schema;