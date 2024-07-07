//establishing connection to MongoDb through Mongoose open source software
import {connect,disconnect} from "mongoose";

async function connectToDatabase() {
 try {
    await connect(process.env.MONGODB_URL);
 }  catch (error) {
    console.log(error);
    throw new Error("Cannot connect to MongoDB");
    
 }
}

//disconnect from database
async function disconnectFromDatabase(){
 try {
     await disconnect();
    }catch (error) {
     console.log(error);
     throw new Error("Cannot connect to MongoDB");
 }
}

export {connectToDatabase,disconnectFromDatabase};