import app from "./server.js"
import mongodb from "mongodb"
// import ReviewsDAO from "./dao/reviewsDAO.js"
import dotenv from "dotenv"

dotenv.config()
const MongoClient = mongodb.MongoClient
const uri = process.env.MONGO_URI

const port = 8000

MongoClient.connect(
    uri,
    {
        maxPoolSize: 50,
        wtimeoutMS: 2500,
        useNewUrlParser: true
    })
    .catch(err => {
        console.error(err.stack)
        process.exit(1)
    })
    .then(async client => {
        app.listen(port, () => {
            console.log(`listening on port ${port}`)
        })
    })