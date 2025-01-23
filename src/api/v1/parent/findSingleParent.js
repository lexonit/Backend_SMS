const { findSingleParentService} = require('../../../lib/parent')

const findSingleParent = async(req,res,next) =>{
    try {
        const parent = await findSingleParentService({id: req.param.id})

        res.status(200).json({
            code:200,
            message:'Parent retrieved successfully',
            data: parent,
        });
    } catch (e) {
       next (e) 
    }
}

module.exports = findSingleParent;