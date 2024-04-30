import React from 'react'
import image from "../../assets/school.png"

function Aside() {
    return (
        <div className='bg-orange-400 
        min-h-[80vh] max-w-[40vw] sm:max-w-[25vh] 
        md:max-w-[200px]
        flex flex-col justify-around'>
            <img src={image} alt="my school"
                className='rounded-full' />
            <div className="text-white text-lg font-bold 
            list-none flex flex-col gap-10 md:items-center">
                <li>SCHOOL NAME</li>
                <li>PLACE</li>
                <li>COURCES</li>
            </div>
        </div>
    )
}

export default Aside