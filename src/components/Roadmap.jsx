import React, { useState } from 'react'
import { Container , Row , Col } from 'react-bootstrap'
import Image1 from '../assets/images/png/cartoon-icon1.png'
import Image2 from '../assets/images/png/cartoon-icon2.png'
import Image3 from '../assets/images/png/cartoon-icon3.png'
import Image4 from '../assets/images/png/cartoon-icon4.png'

const Roadmap = () => {
    return (
        <div>
            <div className='bg-yellow py-5'>
                <Container>
                    <h2 className='fs-48 fw-bold ff-poppins text-black text-center pb-5'>ROADMAP 1.0</h2>
                    <div class="timeline">
                        <div class="container1 left">
                            <div class="content">
                                <div className='card2'>
                                    <h2 className='fs-48 fw-bold ff-poppins text-black'>Q4  2021</h2>
                                    <p className='fs-24 fw-normal ff-poppins text-black'>1. Launch SFFB <br />
                                        2. SELL OUT <br />
                                        3. Apply for secondary marketplace listings</p>
                                </div>
                            </div>
                        </div>
                        <div class="container1 right">
                            <div class="content">
                                <h2 className='fs-48 fw-bold ff-poppins text-black'>Q1 2022</h2>
                                <p className='fs-24 fw-normal ff-poppins text-black'>1. Charity Giveaway <br />
                                    2. Launch Adopt-A-Penguin Program <br />
                                    3. Secure Partnerships</p>
                            </div>
                        </div>
                        <div class="container1 left">
                            <div class="content">
                                <h2 className='fs-48 fw-bold ff-poppins text-black'>Q2 2022</h2>
                                <p className='fs-24 fw-normal ff-poppins text-black'>1. SFFB Merch Release <br />
                                    2. Stay tune for Roadmap 2.0
                                </p>
                            </div>
                        </div>
                    </div>

                </Container>
            </div>
            <div className='bg_clr3 py-5'>
                <Container>
                    <h2 className='fs-48 fw-bold ff-poppins text-center pb-3'>Team</h2>
                    <Row>
                        <Col lg={3} md={4} sm={6} className='w-full'>
                            <img src={Image1} alt="" className='w-100' />
                           <div className='text-center'><h3 className='fs-24 fw-bold ff-poppins  pt-2'>Jhone Doe</h3>
                            <p className='fs-18 fw-normal ff-poppins'>Manager</p></div>
                        </Col>
                        <Col lg={3} md={4} sm={6} className='w-full'>
                            <img src={Image2} alt="" className='w-100' />
                            <div className='text-center'><h3 className='fs-24 fw-bold ff-poppins  pt-2'>Jhone Doe</h3>
                            <p className='fs-18 fw-normal ff-poppins'>Manager</p></div>
                        </Col>
                        <Col lg={3} md={4} sm={6} className='w-full'>
                            <img src={Image3} alt="" className='w-100' />
                            <div className='text-center'><h3 className='fs-24 fw-bold ff-poppins m pt-2'>Jhone Doe</h3>
                            <p className='fs-18 fw-normal ff-poppins'>Manager</p></div>
                        </Col>
                        <Col lg={3} md={4} sm={6} className='w-full'>
                            <img src={Image4} alt="" className='w-100' />
                            <div className='text-center'><h3 className='fs-24 fw-bold ff-poppins  pt-2'>Jhone Doe</h3>
                            <p className='fs-18 fw-normal ff-poppins'>Manager</p></div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Roadmap
