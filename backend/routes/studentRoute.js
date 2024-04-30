const express = require("express");
const { getStudent, studentSignup, studentLogin, studentUpdate, studentDelete } = require("../controllers/studentController");

const studentRouter = express.Router()

studentRouter.get("/:token", getStudent)

studentRouter.post("/signup", studentSignup,)

studentRouter.post("/login", studentLogin)

studentRouter.put("/update", studentUpdate)

studentRouter.post("/delete", studentDelete)

module.exports = studentRouter;