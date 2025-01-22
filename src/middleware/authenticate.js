const { verifyToken } = require('../lib/token');
const { findUserByEmail } = require('../lib/user');
const { authenticationError } = require('../utils/error'); // ✅ Corrected function name

const authenticate = async (req, _res, next) => {
  try {
    // Check if the token is provided in the request header
    if (!req.headers.authorization) {
      return next(authenticationError('No token provided'));
    }

    const tokenParts = req.headers.authorization.split(' ');

    if (tokenParts.length !== 2 || tokenParts[0] !== 'Bearer') {
      return next(authenticationError('Invalid token format'));
    }

    const token = tokenParts[1];

    // Verify the token
    const decoded = verifyToken({ token });

    // Find the user in the database
    const user = await findUserByEmail(decoded.email);

    if (!user) {
      return next(authenticationError('User not found'));
    }

    if (user.status !== 'approved' && !['admin'].includes(user.role)) {
      return next(authenticationError(`Your account status is ${user.status}`));
    }

    // Attach the user info to the request object
    req.user = { ...user._doc, id: user.id };

    return next();
  } catch (e) {
    return next(authenticationError('Invalid or expired token'));
  }
};

module.exports = authenticate;
