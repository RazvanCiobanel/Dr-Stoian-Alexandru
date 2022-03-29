const express = require ('express')
const bodyParser = require("body-parser")
const cors = require("cors")


const app = express()
const port = 8088

app.use(cors())
app.use(bodyParser.json())

app.listen(port, () => {
    console.log(`Server listening on port: ${port}`)
})