
import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Log from '../assets/images/png/logo.png';
import Buger1 from '../assets/images/png/hero-section-image.png';
import Solana from '../assets/images/png/solanabusiness.png';
import Burger from '../assets/images/png/cheese-burger.png'
import HamBurger from '../assets/images/png/hamburger.png'
const Business = () => {
    const [name, setname] = useState(false)
    return (
        <div>
            <nav className=' py-2 bg-yellow'>
                <Container>
                    <div className=' d-flex justify-content-between align-items-center'>
                        <img src={Log} alt="" className='w-100 mw-224' />
                        <ul className={`${(name) ? "left_0" : "left_100"} navbar2  `} >
                            <li><a href="#" className='fs-18 fw-semibold ff-poppins  clr  '>Home</a></li>
                            <li><a href="#" className='fs-18 fw-semibold ff-poppins clr  '>About</a></li>
                            <li><a href="#" className='fs-18 fw-semibold ff-poppins clr  '>Tokenomics</a></li>
                            <li><a href="#" className='fs-18 fw-semibold ff-poppins clr  '>Roadmap</a></li>
                            <li><a href="#" className='fs-18 fw-semibold ff-poppins clr '>FAQ</a></li>
                            <li><button className='fs-18 fw-semibold ff-poppins  btn1 text-red text-center '>Connect Wallet</button></li>
                        </ul>

                        <div onClick={() => setname(!name
                        )} className={`${(name) ? 'cross position-relative z_5' : " position-relative z_5"} nav_icon d-lg-none d-flex `}>
                            <div className="span_1"></div>
                            <div className="span2"></div>
                            <div className="span3"></div>
                        </div>

                    </div>
                </Container>
                <div>
                    <img src={Buger1} alt="" className='w-100' />
                </div>
                <div className='text-center'>
                    <h2 className='fs-36 fw-bold ff-poppins text-black pt-4'>WELCOME TO</h2>
                    <div><img src={Solana} alt="" className='w-100 mw-800' /></div>
                </div>
                <div>
                    <img src={Burger} alt="" className='p-ab  position-absolute' />
                    <img src={Burger} alt="" className='position_ab  position-absolute' />
                    <img src={Burger} alt=""  className='position_abb  position-absolute'/>
                    <img src={Burger} alt="" className='position_a  position-absolute' />
                    <img src={HamBurger} alt="" className='p-absoulate  position-absolute'/>
                    <img src={HamBurger} alt=""className='pos-ab  position-absolute' />
                    <img src={HamBurger} alt="" className='pos-absoulate  position-absolute' />
                    <img src={HamBurger} alt="" className='absoulate  position-absolute' />
                </div>
            </nav>
        </div>
    )
}

export default Business
