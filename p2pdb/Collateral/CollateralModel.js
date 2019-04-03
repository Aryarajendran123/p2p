// clientModel.js
var mongoose = require('mongoose');
// Setup schema
var collateralSchema = mongoose.Schema({
    CoinAddress: {
        type: Number,
        required: true
    },
});
// Export order model
var  collateral = module.exports = mongoose.model(' collateral',  collateralSchema);
module.exports.get = function (callback, limit) {
    collateral.find(callback).limit(limit);
}

