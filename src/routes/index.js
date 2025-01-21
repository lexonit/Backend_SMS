const express = require('express');
const router = express.Router();

// Import all the route modules
const authRoutes = require('./authRoutes');
const userRoutes = require('./userRoutes');
const studentRoutes = require('./studentRoutes');
const teacherRoutes = require('./teacherRoutes');
const classRoutes = require('./classRoutes');
const courseRoutes = require('./courseRoutes');
const attendanceRoutes = require('./attendanceRoutes');
const gradeRoutes = require('./gradeRoutes');

// Use the routes with appropriate base paths
router.use('/api/v1/auth', authRoutes); // Auth routes
router.use('/api/v1/users', userRoutes); // User routes
router.use('/api/v1/students', studentRoutes); // Student routes
router.use('/api/v1/teachers', teacherRoutes); // Teacher routes
router.use('/api/v1/classes', classRoutes); // Class routes
router.use('/api/v1/courses', courseRoutes); // Course routes
router.use('/api/v1/attendance', attendanceRoutes); // Attendance routes
router.use('/api/v1/grades', gradeRoutes); // Grade routes

module.exports = router;
