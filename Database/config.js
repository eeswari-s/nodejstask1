import mangoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const MONGO_URI = process.env.MONGODB;

const connectDB = async () => {
    try{
        const connection =await mangoose.connect(MONGO_URI);
        console.log("Database connected successfully");
    }catch(error){
        console.log("Error: ", error.message);
    }
}



export default connectDB;