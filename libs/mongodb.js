import mongoose from "mongoose";

const connectMongoDB = async()=> {
    try{
       await  mongoose.connect(process.env.MONGODB_URL);
        console.log("connected");

    }catch(e){
        console.log(e);
    }
}

export default connectMongoDB;