const router = require('express').Router();
const { studentControllers } = require('../api/v1/student');
const authenticate = require('../middleware/authenticate');
const authorize = require('../middleware/authorize');

router
  .route('/students')
  .get(authenticate, authorize(['teacher', 'admin']), studentControllers.findAllStudent)
  .post(authenticate, authorize(['admin', 'teacher']), studentControllers.createStudent);

router
  .route('/students/:id')
  .get(authenticate, authorize(['teacher', 'admin', 'student']), studentControllers.findSingleStudent)
  .put(authenticate, authorize(['admin']), studentControllers.updateStudent)
  .patch(authenticate, authorize(['admin', 'student']), studentControllers.updateStudentPatch)
  .delete(authenticate, authorize(['admin']), studentControllers.removeStudent);

module.exports = router;
