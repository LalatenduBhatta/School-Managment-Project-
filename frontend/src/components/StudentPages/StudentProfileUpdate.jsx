import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

function StudentProfileUpdate() {
    let navigate = useNavigate()
    const [studentDetails, setStudentDetails] = useState({
        fName: "",
        lName: "",
        email: "",
        mobile: "",
        age: "",
        gender: "",
        sID: "",
    })
    useEffect(() => {
        let token = localStorage.getItem("token")
        async function getData() {
            let response = await axios.get(`http://127.0.0.1:5000/student/${token}`)
            let data = await response.data
            console.log(data);
            setStudentDetails(data)
        }
        getData()
    }, [])
    const handelSubmit = async (e) => {
        e.preventDefault()
        let result = await axios.put("http://127.0.0.1:5000/student/update", studentDetails)
        if (result.status == 200) {
            navigate("/studentHome")
        } else {
            alert("Something went wrong try again .....")
        }
    }
    return (
        <div>
            {/* {console.log(studentData)} */}
            <section class="bg-slate-500 dark:bg-slate-500 min-h-screen">
                <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto ">
                    <div class="w-full h-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0  dark:bg-gray-800 dark:border-gray-700 ">
                        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 class="text-xl font-bold leading-tight tracking-tight text-red-500 md:text-2xl dark:text-white text-center">
                                Update Profile
                            </h1>
                            <form class="space-y-4 md:space-y-6" onSubmit={handelSubmit}>
                                <div class="grid grid-cols-2 gap-4">
                                    <div class="mb-4">
                                        <label
                                            for="fname"
                                            class="block text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            First Name
                                        </label>
                                        <input
                                            type="text"
                                            id="fname"
                                            name="fName"
                                            class="mt-1 p-2 w-full border rounded"
                                            value={studentDetails.fName}
                                            onChange={(e) => setStudentDetails({ ...studentDetails, fName: e.target.value })}
                                        />
                                    </div>
                                    <div class="mb-4">
                                        <label
                                            for="lname"
                                            class="block text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Last Name
                                        </label>
                                        <input
                                            type="text"
                                            id="lname"
                                            name="lName"
                                            class="mt-1 p-2 w-full border rounded"
                                            value={studentDetails.lName}
                                            onChange={(e) => setStudentDetails({ ...studentDetails, lName: e.target.value })}
                                        />
                                    </div>
                                </div>
                                <div class="grid grid-cols-2 gap-4">
                                    <div class="mb-4">
                                        <label
                                            for="sID"
                                            class="block text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            sID
                                        </label>
                                        <input
                                            type="number"
                                            id="sID"
                                            name="sID"
                                            class="mt-1 p-2 w-full border rounded"
                                            value={studentDetails.sID}
                                            onChange={(e) => setStudentDetails({ ...studentDetails, sID: e.target.value })}
                                        />
                                    </div>
                                    <div class="mb-4">
                                        <label
                                            for="age"
                                            class="block text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Age
                                        </label>
                                        <input
                                            type="number"
                                            id="age"
                                            name="age"
                                            class="mt-1 p-2 w-full border rounded"
                                            value={studentDetails.age}
                                            onChange={(e) => setStudentDetails({ ...studentDetails, age: e.target.value })}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label
                                        for="email"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Your email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="name@company.com"
                                        readOnly
                                        value={studentDetails.email}
                                    />
                                </div>
                                <div class="mb-4">
                                    <label
                                        for="mobile"
                                        class="block text-sm font-medium text-gray-600"
                                    >
                                        Mobile
                                    </label>
                                    <input
                                        type="tel"
                                        id="mobile"
                                        name="mobile"
                                        class="mt-1 p-2 w-full border rounded"
                                        value={studentDetails.mobile}
                                        onChange={(e) => setStudentDetails({ ...studentDetails, mobile: e.target.value })}
                                    />
                                </div>

                                <div>
                                    <label
                                        for="gender"
                                        class="block text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Gender
                                    </label>
                                    <select
                                        id="gender"
                                        name="gender"
                                        class="mt-1 p-2 w-full border rounded"
                                        value={studentDetails.gender}
                                        onChange={(e) => setStudentDetails({ ...studentDetails, gender: e.target.value })}
                                    >
                                        <option value="">SELECT YOUR GENDER ....</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <button
                                    type="submit"
                                    class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    UPDATE
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default StudentProfileUpdate