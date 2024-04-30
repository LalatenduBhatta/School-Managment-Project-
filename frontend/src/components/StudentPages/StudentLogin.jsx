import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function StudentLogin() {
    const [studentData, setStudentData] = useState({})
    let navigate = useNavigate()
    const handelChange = (e) => {
        let value = e.target.value;
        let name = e.target.name;
        setStudentData({ ...studentData, [name]: value })
    }

    const handelSubmit = async (e) => {
        e.preventDefault();
        let { email, password } = studentData
        if (!email || !password) {
            alert("provide all the fields before login")
        } else {
            let response = await fetch(" http://127.0.0.1:5000/student/login", {
                method: "POST",
                body: JSON.stringify(studentData),
                headers: { "Content-Type": "application/json" }
            });
            let result = await response.json()
            if (result.msg) {
                alert(result.msg)
            } else {
                localStorage.setItem("token", result.token)
                navigate("/studentHome")
            }
        }
    }
    return (
        <div>
            <section class="bg-gray-50 dark:bg-slate-500 min-h-screen">
                <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                        <img class="w-20 h-20 mr-2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOiuhUcLu2plezMXhikRUqkuCBCug44ZLGkg&usqp=CAU" alt="logo" />
                        Student Login
                    </a>
                    <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Sign in to your account
                            </h1>
                            <form class="space-y-4 md:space-y-6" onSubmit={handelSubmit}>
                                <div>
                                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 
                                    sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 
                                    dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                                     dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""
                                        onChange={handelChange}
                                    />
                                </div>
                                <div>
                                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border
                                     border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 
                                     focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                                     dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                                     dark:focus:border-blue-500" required=""
                                        onChange={handelChange} />
                                </div>
                                <div class="flex items-center justify-between">
                                    <div class="flex items-start">
                                        <div class="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox"
                                                class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 
                                             focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 
                                             dark:focus:ring-blue-600 dark:ring-offset-gray-800" required="" />
                                        </div>
                                        <div class="ml-3 text-sm">
                                            <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
                                        </div>
                                    </div>
                                    <a href="#" class="text-sm font-medium text-blue-600 hover:underline dark:text-orange-400">Forgot password?</a>
                                </div>
                                <button type="submit" class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-500 dark:focus:ring-blue-800">Sign in</button>
                                <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Don’t have an account yet?
                                    <Link to="/studentSignup" class="font-medium text-blue-600 hover:underline dark:text-orange-400">Sign up</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default StudentLogin