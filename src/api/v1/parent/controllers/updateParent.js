const { updateParentService } = require('../../../../lib/parent');

const updateParent = async (req, res, next) => {
  try {
    const updatedParent = await updateParentService(req.params.id, req.body);
    res.status(200).json({
      code: 200,
      message: 'Parent updated successfully',
      data: updatedParent,
    });
  } catch (e) {
    next(e);
  }
};

module.exports = updateParent;
