const { Schema , model} = require('mongoose')


const parentSchema = new Schema(
    {
        name:{
            type:String,
            required:true,
            trim:true
        },
        email:{
            type:String,
            unique:true,
            lowercase:true,
            trim:true
        },
        phone:{
            type:String,
            required:true,
            unique:true
        },
        occupation:String,
        relation:{
            type:String,
            enum:['father','mohter'],
            required:true,
        },
        photo:String,
        address:String,
        children:[
            {
                type:Schema.Types.ObjectId,
                ref:'Student'
            }
        ]
    },

    {
        timestamps:true
    }
)

const parent = model('parent',parentSchema)

module.exports = parent;