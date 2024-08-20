import path from "path";   
import { productRouter } from "./controller/ProductController.js";
import { userRouter, express } from "./controller/UserController.js";

// Create an Express App
const app = express()
const port = +process.env.PORT || 4000
const router = express.Router()

// Middleware
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Credentials", "true")
    res.header("Access-Control-Allow-Methods", "*")
    res.header("Access-Control-Request-Methods", "*")
    res.header("Access-Control-Allow-Headers", "*")
    res.header("Access-Control-Expose-Headers", "Authorization")
    next()
  })
app.use('/users', userRouter)
app.use('/products', productRouter)
app.use(
  express.static("./static"),
  express.json(),
  express.urlencoded({
    extended: true
}))
// Endpoint
app.get("^/$|/theforge", (req, res) => {
  res.status(200).sendFile(path.resolve("./static/html/index.html"))
})
app.get('*', (req, res) => {       // any endpoint that we did not create will return this.
    res.json({
      status: 404,
      msg: 'Resource not found'
    })
  })
app.listen(port, () => {
    console.log(`Live on Port: ${port}`)
  })