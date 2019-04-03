//import order module
Login = require('./LoginModel');
Register = require('../register/RegisterModel');

// Handle index actions

exports.index = function (req, res) {
   Login.get(function (err, login) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
         res.json({
            status: "success",
            message: "login sucessfully",
            data: Login
        });
    });
};
exports.new = function (req, res) {
        const Email = req.body.Email;
        const Password = req.body.Password;
        console.log(errors);

        // Login.findOne({Email})
        // .then(reponse  => {
        //     if(!login) {
        //         errors.Email = 'User not found';
        //         return res.status(404).json(errors);
        //     }
        //     else {
        //         errors.Password = 'Incorrect Password';
        //         return res.status(400).json(errors);

        //     }
        // });   
        
        Register.findOne({ Email: Email } && {Password: Password}, function(err, Email ) {
            if(err) {
               //handle error here
               return res.send(err);
            }
         
            //if a user was found, that means the user's email matches the entered email
            if (Email) {
                return res.json({
                    success: true
                });
            } else {
                //code if no user with entered email was found
                return res.json({ success: false, error: err });
                    
            }
            
        //  Register.findOne({ Password: Password }, function(err,Password) {
        //     if(err) {
        //        //handle error here
        //        return res.send(err);
        //     }
         
        //     //if a user was found, that means the user's email matches the entered email
        //     if (Password ) {
        //         return res.json({
        //             success: true
        //         });
        //     } else {
        //         //code if no user with entered email was found
        //         return res.json({ success: false, error: err });
                    
        //     }
            
        //  });
        }); 
 
        
        // // save the order and check for errors
        // login.save(function (err) {
        // // if (err)
        // // res.json(err);
        //     res.json({
        //         message: 'New order created!',
        //         data: login
        //     });
        // });
    
};
