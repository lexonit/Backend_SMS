const router = require('express').Router();
const { teacherControllers } = require('../api/v1/teacher');
const authenticate = require('../middleware/authenticate');
const authorize = require('../middleware/authorize');

router
  .route('/teachers')
  .get(authenticate, authorize(['admin']), teacherControllers.findAllTeacher)
  .post(authenticate, authorize(['admin']), teacherControllers.createTeacher);

router
  .route('/teachers/:id')
  .get(authenticate, authorize(['admin', 'teacher']), teacherControllers.findSingleTeacher)
  .put(authenticate, authorize(['admin']), teacherControllers.updateTeacher)
  .patch(authenticate, authorize(['admin', 'teacher']), teacherControllers.updateTeacherPatch)
  .delete(authenticate, authorize(['admin']), teacherControllers.removeTeacher);

module.exports = router;
