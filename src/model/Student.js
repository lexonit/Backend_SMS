const { date } = require('express-openapi-validator/dist/framework/base.serdes')
const { Schema , model } = require('mongoose')
const { stringify } = require('yamljs')


const studentSchema = new Schema (
  {
    name:{
      type:String,
      required:true
    },
    photo:String,
    bio:String,
    user_id:{
      type:Schema.ObjectId,
      ref:'User',
      required:true
    },
    class_id:{
      type:Schema.ObjectId,
      ref:'Class',
      required:true
    },
    class_roll:{
      type:Number,
      required:true,

    },


    //Fields
    addmission_number: {
      type:String,
      unique:true
    },
    addmission_date: Date,
    academic_year:String,
    blood_group:String,
    house:String,
    religion:String,
    category:String,
    caste:String,
    mother_tongue:String,
    languagues_known:[String],


    //parent & guardian Info 
    father:{
      name:String,
      email:String,
      phone:String,
      occupation:String,
      photo:String
    },
    mother:{
      name:String,
      email:String,
      phone:String,
      occupation:String,
      photo:String
    },
    guardian:{
      name:String,
      relation:String,
      phone:String,
      email:String,
      occupation:String,
      address:String,
      photo:String
    },

    //sibling
    siblings:[
      {
        name:String,
        roll_no:String,
        addmission_no:String,
        class:String
      }
    ],

    //Address
    current_address:String,
    permanent_address:String,

    //Transport
    transport:{
      route:String,
      vehicle_number:String,
      pickup_point:String
    },

    //Hostel Info 
    hostel:{
      name:String,
      room_no:String
    },

    //Documents
    documents:{
      birth_certificate:String,
      transfer_certificate:String,
      medical_history:String
    },

    //Medical Condition
    medical:{
      codition:String,
      allergies:[String],
      medicaltion:[String]
    },

    //previuos School 
    previous_School:{
      name:String,
      address:String,
    },

    //Bank Details
    bank:{
      name:String,
      branch:String,
      ifsc:String,
    },

    enrollment_status:{
      type:String,
      enum:['active','inactive','graduated'],
      default:'active',
    },

    gender:{
      type:String,
      enum:['male','female','others'],
      required:true
    },

    birth: { type: Date, required: true },

    phone:String,

    courses:[{
      type:Schema.ObjectId,
      ref:'Course'
    }]
  },
  {timestamps:true,

    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
  
);

const Student = model('Student',studentSchema);

module.exports = Student;
