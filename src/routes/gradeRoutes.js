const router = require('express').Router();
const { gradeControllers } = require('../api/v1/grade');
const authenticate = require('../middleware/authenticate');
const authorize = require('../middleware/authorize');

router
  .route('/api/v1/grades')
  .get(
    authenticate,
    authorize(['admin', 'teacher', 'student']),
    gradeControllers.findAllGrade
  )
  .post(
    authenticate,
    authorize(['admin', 'teacher']),
    gradeControllers.createGrade
  );

router
  .route('/api/v1/grades/:id')
  .get(
    authenticate,
    authorize(['admin', 'teacher', 'student']),
    gradeControllers.findSingleGrade
  )
  .patch(
    authenticate,
    authorize(['admin', 'teacher']),
    gradeControllers.updateGrade
  )
  .delete(
    authenticate,
    authorize(['admin', 'teacher']),
    gradeControllers.removeGrade
  );

module.exports = router;