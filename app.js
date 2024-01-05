const dotenv = require("dotenv")
const cors = require("cors")
const express = require("express")

dotenv.config({ path: "./config.env" })

const port = process.env.PORT || 8000
const app = express()

app.get("/api", cors(), (req, res) => {
  res.send({ url: `${process.env.URL}` })
})

app.listen(port, () => {
  console.log(`✅ Server listening on port: ${port}`)
})
