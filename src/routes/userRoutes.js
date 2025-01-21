const router = require('express').Router();
const { userControllers } = require('../api/v1/user');
const authenticate = require('../middleware/authenticate');
const authorize = require('../middleware/authorize');

router
  .route('/users')
  .get(authenticate, authorize(['admin']), userControllers.findAllUser)
  .post(authenticate, authorize(['admin']), userControllers.createUser);

router
  .route('/users/:id')
  .get(authenticate, userControllers.findSingleUser)
  .patch(authenticate, authorize(['admin']), userControllers.updateUser)
  .delete(authenticate, authorize(['admin']), userControllers.removeUser);

module.exports = router;
