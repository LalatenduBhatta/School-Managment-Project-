const express = require("express");
const dbConnect = require("./db/dbConnect");
const studentRouter = require("./routes/studentRoute");
const cors = require("cors")

//port and hostname
const PORT = 5000;
const hostName = "127.0.0.1"

//server
const app = express()

//cors
app.use(cors())

//middleware
app.use(express.json())

//routes
app.use("/student", studentRouter)

//app listen
app.listen(PORT, hostName, async () => {
    await dbConnect()
    console.log(`server started at http://${hostName}:${PORT} & database connected`);
})