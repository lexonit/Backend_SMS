const { updateParentService } = require('../../../lib/parent')


const updatedParentPacth = async(req,res,next) => {
    try {
        const updatedParent = await updatedParentService(req.param.id,req.body);
        res.status(200).json({
            code:200,
            message:'Parent updated successfully',
            data: updateParent,
        })
    } catch (e) {
        next(e);
    }
}

module.exports = updatedParentPacth;