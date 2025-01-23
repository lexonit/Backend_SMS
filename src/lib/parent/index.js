const parent = require('../../model/parent');
const parent = require('../../model/parent')
const {notFoundError} = require('../../utils/error')
const refIdValidation = require('../../utils/refIdValidation')


const createParentService = async ({ name, email, phone, relation, occupation, address, photo, children }) => {
    if (!name || !phone || !relation) {
      throw new Error('Invalid Parameters!');
    }
  
    // Validate student IDs if provided
    if (children && children.length) {
      await Promise.all(children.map(async (id) => await refIdValidation('student', id)));
    }
  
    const parent = new Parent({ name, email, phone, relation, occupation, address, photo, children });
    return await parent.save();
  };

const findAllParentService = async({page,limit,search})=>{
    const filter = search ? { name: {$regex:search, $options:'i'}} :{};
    return Parent.find(filter)
    .populate('children','name class_roll')
    .skip(page * limit - limit)
    .limit(limit);
};

const findSingleParentService = async({id})=>{
    const parent = await Parent.findById(id).populate('children','name class_roll');
    if (!parent) 
        throw notFoundError();
    return parent;
}

const removeParentService = async(id,date)=>{
    const parent = await Parent.findById(id);
    if(!parent) throw notFoundError();
    return parent.findByIdAndDelete(id);
}

const updateParentService = async (id,data) =>{
    const parent = await Parent.findById(id);
    if (!parent) throw notFoundError();

    Object.keys(data).forEach((key) => {
        parent[key] = data[key] ?? parent[key];
    });

    await parent.save()
    return parent
};

module.exports ={
    createParentService,
    findAllParentService,
    findSingleParentService,
    removeParentService,
    updateParentService
}