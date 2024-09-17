import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    fatherName:{
        type:String,
        required:true,
    },
    schoolName:{
        type:String,
        required:true,

    },
    sci:{
        type:Number,
        required:true,
    },
    sst:{
        type:Number,
        required:true,
    },
    hindi:{
        type:Number,
        required:true,

    },
    eng:{
        type:Number,
        required:true,

    },
    maths:{
        type:Number,
        required:true,

    },
    dp:{
        type:String,
    }

},{timestamps:true

})

// delete mongoose.models.Student

const Student = mongoose.models.Student || mongoose.model("Student",StudentSchema);
export default Student;