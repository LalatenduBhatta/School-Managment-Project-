import React, { useState } from 'react'

function Navbar() {
    const [dropdown, setDropdown] = useState(false)
    return (
        <div className="bg-gray-600 text-gray-50 h-20 
         flex items-center justify-between">
            <div className=" h-20 w-20 
            bg-orange-400 rounded-full 
            flex items-center justify-center">LOGO</div>
            <div className="text-xl list-none gap-5 hidden lg:flex">
                <li className='hover:text-orange-400 cursor-pointer'>ABOUT US</li>
                <li className='hover:text-orange-400 cursor-pointer'>CONTACT US</li>
                <li className='hover:text-orange-400 cursor-pointer'>OUR SERVICES</li>
                <li className='hover:text-orange-400 cursor-pointer'>OUR PRODUCTS</li>
            </div>
            <div className="py-4 px-10 bg-blue-500 
            border-2 border-gray-50 text-2xl
            hover:bg-slate-50 hover:text-blue-400
            hover:border-blue-500 cursor-pointer hidden lg:block
            ">WEBSITE</div>
            <div className='text-3xl p-2 border border-gray-50 lg:hidden relative'
                onClick={() => setDropdown((prev) => !prev)}>
                {dropdown ? <i className="fa-solid fa-xmark bg-red-500"></i> :
                    <i className="fa-solid fa-bars"></i>}
                {
                    dropdown && <div className='list-none text-lg absolute -left-20 bg-slate-600 top-14'>
                        <li className='hover:text-orange-400 cursor-pointer'>ABOUT US</li>
                        <li className='hover:text-orange-400 cursor-pointer'>CONTACT US</li>
                        <li className='hover:text-orange-400 cursor-pointer'>OUR SERVICES</li>
                        <li className='hover:text-orange-400 cursor-pointer'>OUR PRODUCTS</li>
                    </div>
                }
            </div>
        </div>
    )
}

export default Navbar