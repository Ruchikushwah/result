import mongoose from "mongoose";

const DbConnect = ()=>{
    try{
        mongoose.connect(process.env.MONGODB_URI);
        console.log("connection success");
        
    }
    catch(error){
        console.log(error.message)
    }
}
export default DbConnect;