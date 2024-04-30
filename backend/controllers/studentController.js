const studentModel = require("../model/studentModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

//token generation
const generateToken = (id) => {
    let studentId = id.toString()
    let token = jwt.sign(studentId, "Vicky")
    return token
}

const getStudent = async (req, res) => {
    // console.log(req.params);
    let { token } = req.params
    let id = jwt.verify(token, "Vicky")
    let studentDetails = await studentModel.findOne({ _id: id }).select("-password -_id -__v")
    res.send(studentDetails)
}

const studentSignup = async (req, res) => {
    console.log(req.body);
    let data = req.body
    let { fName, lName, password, email, sID, mobile, gender, age } = data
    if (!fName || !lName || !password || !email || !sID || !mobile || !gender || !age) {
        return res.status(400).send("Provide all required fields")
    }
    let isEamilAvailable = await studentModel.findOne({ email })
    if (isEamilAvailable) {
        return res.status(401).send({ msg: "Student already registered" })
    }
    else {
        let hasedPass = await bcrypt.hash(password, 10)
        let student = { ...data, password: hasedPass }

        let studentUpload = new studentModel(student)
        await studentUpload.save()

        return res.status(201).send({ token: generateToken(studentUpload._id) })
    }
}


const studentLogin = async (req, res) => {
    let { password, email } = req.body
    let student = await studentModel.findOne({ email })
    if (student) {
        let matchedPass = await bcrypt.compare(password, student.password)
        if (matchedPass) {
            res.status(200).send({ token: generateToken(student._id) })
        } else {
            res.status(400).send({ msg: "password is not matching" })
        }
    }
    else {
        res.status(400).send({ msg: "Student not registered" })
    }
}

const studentUpdate = async (req, res) => {
    const { email, sID, gender, age, fName, lName, mobile } = req.body
    let result = await studentModel.updateOne({ email },
        { $set: { sID, gender, age, fName, lName, mobile } })
    if (result.acknowledged) {
        res.status(200).send({ msg: "user data Updated" })
    }
    else {
        res.status(500).send({ "msg": "Something went wrong" })
    }
}


const studentDelete = async (req, res) => {
    try {
        let { email } = req.body
        console.log(req.body);
        if (email) {
            let student = await studentModel.findOne({ email })
            if (student) {
                let response = await studentModel.deleteOne({ email })
                if (response.acknowledged) {
                    res.status(200).send({ msg: "Student Account Deleted" })
                }
            }
        }
    } catch (error) {
        res.status(500).send({ msg: "Something went wrong" })
    }

}


module.exports = {
    getStudent, studentSignup, studentLogin,
    studentUpdate, studentDelete
}