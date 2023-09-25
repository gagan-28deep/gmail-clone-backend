import mongoose from 'mongoose'

const EmailSchema = new mongoose.Schema({
    To : {
        type : String,
        required : true
    },
    From : {
        type : String,
        required : true
    },
    Subject : {
        type : String,
    },
    Body : {
        type : String,
    },
    date : {
        type : Date,
        required : true
    },
    // image : {
        // type : String,
    // },
    image : String,
    name : {
        type : String,
        required : true
    },
    starred : {
        type : Boolean,
        required : true,
        default : false
    },
    bin : {
        type : Boolean,
        required : true,
        default : false
    },
    type : {
        type : String,
        required : true,
    }

})

const email = mongoose.model('emails' , EmailSchema)

export default email