const router = require('express').Router();
const { sendToken } = require('../controllers/scripts');
const { validateSendToken } = require('../middlewares/validations');

router.post('/send-token', validateSendToken, sendToken);

module.exports = router;
