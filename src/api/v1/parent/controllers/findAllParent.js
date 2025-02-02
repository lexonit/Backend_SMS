const { findAllParentService } = require('../../../../lib/parent');

const findAllParent = async (req, res, next) => {
  try {
    const { page = 1, limit = 10, search = '' } = req.query;
    const parents = await findAllParentService({ page, limit, search });

    res.status(200).json({
      code: 200,
      message: 'Parents retrieved successfully',
      data: parents,
    });
  } catch (e) {
    next(e);
  }
};

module.exports = findAllParent ;
