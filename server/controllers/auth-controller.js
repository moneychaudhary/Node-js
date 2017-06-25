var AuthValidation = require('./../validations/auth-routes-validation');
login = function (req, res, next) {
    req.check(AuthValidation.loginSchema);

    var errors = req.validationErrors();

    if (errors) {
        res.status(400).send({errors});
    }


};

register = function (req, res) {
    res.send({message: 'register api called'});
};


module.exports = {
    login,
    register
};