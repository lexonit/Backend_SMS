const { createStudentService } = require('../../../../lib/student');

const createStudent = async (req, res, next) => {
  try {
    // Validate required fields
    if (!req.body.name || !req.body.user_id || !req.body.class_id || !req.body.birth || !req.body.gender) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    
    if (!Array.isArray(req.body.courses)) req.body.courses = [];
    if (!Array.isArray(req.body.siblings)) req.body.siblings = [];

    
    const studentData = { ...req.body, enrollment_status: req.body.enrollment_status || 'active' };

    
    const student = await createStudentService(studentData);

    
    res.status(201).json({
      code: 201,
      message: 'Student created successfully',
      data: student,
      links: {
        self: `/students/${student.id}`,
        user: `/students/${student.id}/user`,
      },
    });
  } catch (e) {
    console.error('Error creating student:', e);
    next(e);
  }
};

module.exports = createStudent;
