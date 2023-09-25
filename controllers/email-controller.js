import Email from "../models/email.js"

export const saveSentEmail = (req , res) =>{
    try {
        const email = new Email(req.body)
        email.save()
        res.status(200).json("Email Saved Successfully")
    } catch (error) {   
        res.status(500).json(error.message)
    }
}