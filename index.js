import express from 'express'
// Have to give extension in the backend
import Connection from './database/db.js'
import routes from './routes/routes.js'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.urlencoded({extended : true}))
app.use(express.json({extended : true}))
app.use("/" , routes)

const PORT = process.env.PORT || 3000
Connection()
app.listen(PORT , ()=>{
    console.log(`Server is running on port -> ${PORT} `)
})