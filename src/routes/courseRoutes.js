const router = require('express').Router();
const { courseControllers } = require('../api/v1/course');
const authenticate = require('../middleware/authenticate');
const authorize = require('../middleware/authorize');


router
  .route('/api/v1/courses')
  .get(
    authenticate,
    authorize(['admin', 'teacher', 'student']),
    courseControllers.findAllCourse
  )
  .post(authenticate, authorize(['admin']), courseControllers.createCourse);

router
  .route('/api/v1/courses/:id')
  .patch(authenticate, authorize(['admin']), courseControllers.updateCourse)
  .delete(authenticate, authorize(['admin']), courseControllers.removeCourse);

module.exports = router;