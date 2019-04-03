//import order module
Register = require('./RegisterModel');
// Handle index actions

exports.index = function (req, res) {
   Register.get(function (err, registers) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Orders retrieved successfully",
            data: registers
        });
    });
};
exports.new = function (req, res) {
    console.log(req);
    console.log('validating inputs');
    req.check('Email', 'invalid email adress').isEmail().require;
    req.check('Mobile', 'invalid mob  no').isNumeric().isLength({max: 10});
    req.check('Password','invalid').isLength({min: 8}).equals(req.body.Rpassword);
    req.check('Rpassword','invalid').isLength({min: 8})
    var errors=req.validationErrors();
    console.log(errors);
    if(errors) {
        res.json({
            status: "error",
            message: errors,
        });
    }
    else
    {
        var register = new Register();
        register.FirstName = req.body.FirstName;
        register.LastName = req.body.LastName;
        register.Mobile = req.body.Mobile;
        register.Email = req.body.Email;
        register.Password = req.body.Password;
        register.Rpassword = req.body.Rpassword;
        // save the order and check for errors
        register.save(function (err) {
        // if (err)
        // res.json(err);
            res.json({
                message: 'New order created!',
                data: register
            });
        });
    }
};
