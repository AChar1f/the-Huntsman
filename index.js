import express from "express";
import path from "path";
import { connection as db } from "./config/index.js"   
import bodyParser from "body-parser";

// Create an Express App
const app = express()
const port = +process.env.PORT || 4000
const router = express.Router()

// Middleware
app.use(router, 
  express.static("./static"),
  express.json(),
  express.urlencoded({
    extended: true
}))
router.use(bodyParser.json())
// Endpoint
router.get("^/$|/theforge", (req, res) => {
  res.status(200).sendFile(path.resolve("./static/html/index.html"))
})
app.listen(port, () => {
    console.log(`Live on Port: ${port}`)
  })