// clientModel.js
var mongoose = require('mongoose');
// Setup schema
var loginSchema = mongoose.Schema({
    Email: {
        type: String,
        required: [true,'NAME IS REQUIRED']
    },
    Password: {
        type: String,
        required: true
    },
});
// Export order model
var login = module.exports = mongoose.model('login', loginSchema);
module.exports.get = function (callback, limit) {
    login.find(callback).limit(limit);
}

