const mongoose = require("mongoose")

const studentSchema = new mongoose.Schema({
    fName: {
        type: String,
        required: true
    },
    lName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    sID: {
        type: String,
        required: true,
        // unique: true
    },
    password: {
        type: String,
        required: true
    },
    age: {
        type: String,
    },
    gender: {
        type: String
    }
})

const studentModel = mongoose.model("/student", studentSchema)

module.exports = studentModel