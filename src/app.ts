import "dotenv/config"
import express  from "express"
import cors from "cors"
import { router } from "./routes"
import db from "./config/mongo"

const app = express()

const PORT = process.env.PORT || 3003

const bp = require('body-parser')
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

app.use(cors())

app.use(router)

app.use(express.json)

db().then(() => console.log("Conexion ready"))

app.listen(PORT, ()  => console.log(`Listo por el puerto ${PORT}`))
