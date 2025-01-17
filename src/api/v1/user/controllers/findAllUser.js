const { userCountService, findAllUserService } = require('../../../../lib/user');
const query = require('../../../../utils/query');

/**
 * Find All Users
 */
const findAllUser = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const sortType = req.query.sort_type === 'asc' ? '' : '-';
    const sortBy = req.query.sort_by || 'updatedAt';
    const search = req.query.search || '';

    // Fetch users
    const users = await findAllUserService({ page, limit, sortType, sortBy, search });
    const totalItems = await userCountService({ search });
    const pagination = query.getPagination({ limit, page, totalItems });

    // HATEOAS links
    const links = query.getHATEOASForAllItems({
      url: req.originalUrl,
      path: req.baseUrl,
      query: req.query,
      hasNext: !!pagination.next,
      hasPrev: !!pagination.prev,
      page,
    });

    return res.status(200).json({ data: users, pagination, links });
  } catch (error) {
    next(error);
  }
};

module.exports = findAllUser;
