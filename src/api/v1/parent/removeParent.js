const { removeParentService} = require('../../../lib/parent')


const removeParent = async (req,res,next) =>{
    try {
        await removeParentService({id: req.param.id});
        res.status(200).json({
            code:200,
            message: 'Parent removed Successfully',
        });
    } catch (e) {
        next(e);
    }
}

module.exports = removeParent;