const { createUser: createUserService } = require('../../../../lib/user');
const { badRequest } = require('../../../../utils/error');

/**
 * Create User
 */
const createUser = async (req, res, next) => {
  try {
    const { name, email, password, role, status } = req.body;

    if (!name || !email || !password) {
      throw badRequest('Name, Email, and Password are required.');
    }

    const user = await createUserService({ name, email, password, role, status });

    const response = {
      code: 201,
      message: 'User created successfully',
      data: user,
      links: {
        self: `/api/v1/users/${user.id}`,
      },
    };

    return res.status(201).json(response);
  } catch (error) {
    next(error);
  }
};

module.exports = createUser;
