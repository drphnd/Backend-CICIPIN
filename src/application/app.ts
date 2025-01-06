import express from "express"
import { publicRouter } from "../routes/public_routes"

const app = express()
const cors = require('cors');
app.use(cors());
app.use(express.json())
app.use(publicRouter)

export default app