import mongoose from "mongoose";
import  { MONGOOSE_URL } from "../config/config.js"

export async function mongoosedb(){

    try {

        const db = await mongoose.connect(MONGOOSE_URL);
        console.log("estas conectado a mongoose", db.connection.name)
        
        
    } catch (error) {
        console.log("error de conexion",error)
        
    }

}