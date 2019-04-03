// clientModel.js
var mongoose = require('mongoose');
// Setup schema
var registerSchema = mongoose.Schema({
    FirstName: {
        type: String,
        required: true
        
    },
    LastName: {
        type: String,
        required: true
    },
    Mobile: {
        type: Number,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    },
    Rpassword: {
        type: String,
        required: true
    },

});
// Export order model
var register = module.exports = mongoose.model('register', registerSchema);
module.exports.get = function (callback, limit) {
    register.find(callback).limit(limit);
}

