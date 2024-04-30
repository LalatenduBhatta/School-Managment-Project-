import React, { useContext } from 'react'
import Navbar from './Navbar'
import Aside from './Aside'
import Main from './Main'
import Footer from './Footer'
import { AuthContext } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'

function Home() {
    const { auth } = useContext(AuthContext)
    // console.log(auth);
    const navigate = useNavigate()
    return (
        <div>
            {auth ? navigate("/studentHome")
                : <div>
                    <Navbar></Navbar>
                    <div className='flex'>
                        <Aside />
                        <Main />
                    </div>
                    <Footer />
                </div>
            }
        </div>
    )
}

export default Home