const mongoose = require("mongoose")


const dbConnect = async () => {
    try {
        mongoose.connect("mongodb://127.0.0.1:27017/SchoolManagementApp")
    } catch (error) {
        console.log("Something went wrong while connecting to db");
    }
}

module.exports = dbConnect