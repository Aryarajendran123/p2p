//import order module
Collateral = require('./CollateralModel');
// Handle index actions

exports.index = function (req, res) {
   Collateral.get(function (err, collaterals) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "suc  vvgvcess",
            message: "Orders retrieved successfully",
            data: collaterals
        });
    });
};
exports.new = function (req, res) {
    console.log(req.body.CoinAddress);
    // console.log(req);
    console.log('validating inputs');
    req.check('CoinAddress', 'invalid  adress').isNumeric();
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
        var collateral = new Collateral();
        collateral.CoinAddress = req.body.CoinAddress;
        
        // save the order and check for errors
        collateral.save(function (err) {
        // if (err)
        // res.json(err);
            res.json({
                message: 'New order created!',
                data: collateral
            });
        });
    }
};
