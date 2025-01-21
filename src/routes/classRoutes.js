const router = require('express').Router();
const { classControllers } = require('../api/v1/class');
const authenticate = require('../middleware/authenticate');
const authorize = require('../middleware/authorize');


router
  .route('/api/v1/classes')
  .get(
    authenticate,
    authorize(['admin', 'teacher']),
    classControllers.findAllClass
  )
  .post(authenticate, authorize(['admin']), classControllers.createClass);

router
  .route('/api/v1/classes/:id')
  .patch(authenticate, authorize(['admin']), classControllers.updateClass)
  .delete(authenticate, authorize(['admin']), classControllers.removeClass);

module.exports = router;