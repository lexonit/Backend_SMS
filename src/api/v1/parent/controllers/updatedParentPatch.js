const { updateParentPatchService } = require('../../../../lib/parent');

const updateParentPatch  = async (req, res, next) => {
    try {
        const { id } = req.params;
        const updatedParent = await updateParentPatchService(id, req.body);

        res.status(200).json({
            code: 200,
            message: 'Parent updated successfully',
            data: updatedParent
        });
    } catch (error) {
        next(error);
    }
};

module.exports = updateParentPatch ;
