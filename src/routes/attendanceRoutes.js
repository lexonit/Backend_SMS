const router = require('express').Router();
const { attendanceControllers } = require('../api/v1/attendance');
const authenticate = require('../middleware/authenticate');
const authorize = require('../middleware/authorize');


router
  .route('/api/v1/attendance')
  .get(
    authenticate,
    authorize(['admin', 'teacher', 'student']),
    attendanceControllers.findAllAttendance
  )
  .post(
    authenticate,
    authorize(['admin', 'teacher']),
    attendanceControllers.createAttendance
  );

router
  .route('/api/v1/attendance/:id')
  .get(
    authenticate,
    authorize(['admin', 'teacher', 'student']),
    attendanceControllers.findSingleAttendance
  )
  .patch(
    authenticate,
    authorize(['admin', 'teacher']),
    attendanceControllers.updateAttendance
  )
  .delete(
    authenticate,
    authorize(['admin', 'teacher']),
    attendanceControllers.removeAttendance
  );

module.exports = router;