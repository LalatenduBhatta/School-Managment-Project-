import React from 'react'
import { Link } from "react-router-dom"

function Main() {
    return (
        <div className=' bg-slate-400 flex-grow'>
            {/* student login button */}
            <Link to="/studentLogin">
                <div className=' bg-slate-100 h-36 w-56 
            text-3xl font-bold text-orange-400
            flex flex-col items-center justify-center 
            m-auto shadow-lg shadow-slate-700
            hover:bg-orange-400 hover:text-white'>
                    <h1>STUDNETS</h1>
                    <i class="fa-solid fa-graduation-cap 
                text-5xl"></i>
                </div>
            </Link>
        </div>
    )
}

export default Main