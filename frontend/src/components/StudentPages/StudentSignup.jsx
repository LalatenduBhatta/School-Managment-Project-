import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function StudentSignUp() {
    let [studentData, setStudentData] = useState({})
    let navigate = useNavigate()
    const onChangeHandler = (e) => {
        let value = e.target.value
        let name = e.target.name
        setStudentData({ ...studentData, [name]: value })
        // console.log(studentData);
    }
    const onSubmitHandler = async (e) => {
        e.preventDefault()
        let { fName, lName, age, gender, email, mobile, password, sID } = studentData;
        if (!fName || !lName || !age || !gender || !email || !mobile || !password || !sID) {
            alert("Provide all the details before Submitting")
        }
        else {
            let res = await fetch("http://127.0.0.1:5000/student/signup", {
                method: "POST",
                body: JSON.stringify(studentData),
                headers: { "Content-Type": "application/json" }
            })
            let result = await res.json()
            console.log(result);
            if (result.msg) {
                alert(result.msg)
            }
            else {
                localStorage.setItem("token", result.token)
                navigate("/studentHome")
            }
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
                                Create Student Account
                            </h1>
                            <form class="space-y-4 md:space-y-6"
                                onSubmit={onSubmitHandler}
                            >
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
                                            onChange={(event) => onChangeHandler(event)}
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
                                            onChange={onChangeHandler}
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
                                            onChange={onChangeHandler}
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
                                            onChange={onChangeHandler}
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
                                        required=""
                                        onChange={onChangeHandler}
                                    />
                                </div>
                                <div>
                                    <label
                                        for="password"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="••••••••"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required=""
                                        onChange={onChangeHandler}
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
                                        onChange={onChangeHandler}
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
                                        onChange={onChangeHandler}
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
                                    Sign Up
                                </button>

                                <p className="text-sm font-light text-orange-500 dark:text-gray-400">
                                    Already have an account?
                                    <Link to="/studentLogin" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default StudentSignUp;