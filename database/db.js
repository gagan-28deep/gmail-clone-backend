import mongoose from "mongoose"
import db from "../secrets.js"

const Connection = () =>{
    try {
        mongoose.connect(db.DB_LINK , {useNewUrlParser:true})
        console.log("Successfully connected to DB ")       
    } catch (error) {
        console.log("Error while connecting to DB " , (error.message))
    }
}

export default Connection