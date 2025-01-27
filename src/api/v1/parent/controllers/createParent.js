const { createParentService } = require('../../../../lib/parent');

const createParent = async (req, res, next) => {
  try {
    if (!req.body.name || !req.body.phone || !req.body.relation) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    if (!Array.isArray(req.body.children)) req.body.children = [];

    const parent = await createParentService(req.body);

    res.status(201).json({
      code: 201,
      message: 'Parent created successfully',
      data: parent,
      links: { self: `/parents/${parent.id}`, children: `/parents/${parent.id}/children` },
    });
  } catch (e) {
    next(e);
  }
};

module.exports = createParent;
