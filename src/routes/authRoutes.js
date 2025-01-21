const router = require('express').Router();
const { controllers: authController } = require('../api/v1/auth');

router.post('/auth/register', authController.register);
router.post('/auth/login', authController.login);

module.exports = router;
