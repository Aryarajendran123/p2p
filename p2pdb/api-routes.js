let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to p2p!',
    });
});
// Export API routes
// Import order controller
var RegisterContoler = require('./register/RegisterContoler');
// order routes
router.route('/register')
    .get(RegisterContoler.index)
    .post(RegisterContoler.new);
var LoginController = require('./Login/LoginController');
// order routes
router.route('/login')
    .get(LoginController.index)
    .post(LoginController.new);
module.exports = router;

var CollateralController = require('./Collateral/CollateralContoller');
// order routes
router.route('/collateral')
    .get(CollateralController.index)
    .post(CollateralController.new);
module.exports = router;