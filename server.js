import express from "express"
import { investedProperties } from "./data/investedProperties.js"
import cors from "cors"
import dotenv from "dotenv"

dotenv.config({
    path: "./.env"
})

const app = express()

const port = process.env.PORT || 3000

app.use(cors())

app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        data: investedProperties
    })
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})