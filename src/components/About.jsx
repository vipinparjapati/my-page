import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Blockchain from '../assets/images/png/image2.png';
import Image1 from '../assets/images/png/cartoon-icon1.png'
import Image2 from '../assets/images/png/cartoon-icon2.png'
import Image3 from '../assets/images/png/cartoon-icon3.png'
import Image4 from '../assets/images/png/cartoon-icon4.png'
import Image5 from '../assets/images/png/cartoon-icon5.png'
import Image6 from '../assets/images/png/cartoon-icon6.png'
import Image7 from '../assets/images/png/cartoon-icon7.png'
import Image8 from '../assets/images/png/cartoon-icon8.png'
import Image9 from '../assets/images/png/cartoon-icon9.png'
import Image10 from '../assets/images/png/cartoon-icon10.png'
import Image14 from '../assets/images/png/cartoon11.png'
import Image11 from '../assets/images/png/image12.png';


const About = () => {
    return (
        <div>
            <div className='bg_clr3 position-relative'>
                <Container className='Custom_Container'>
                    <Row>
                        <Col lg={6} className='d-flex justify-content-center align-items-center '>
                            <div>
                                <h2 className='fs-48 fw-bold ff-poppins text-black pt-5 pb-3'>It was popularised</h2>
                                <p className='fs-18 fw-normal ff-poppins pb-3'>Have you heard? We’re hiring! We have 3,333 working positions to fill on the Solana blockchain. Once all positions are filled it’s crucial to stay on your toes because the corporate penguins are coming! Any penguins caught chilling on the floor when corporate arrives will be immediately fired and swept away! This makes SFFB a deflationary collection until we reach a maximum staff of 1,666 mcnoots in total.</p>
                                <button className='fs-20 fw-medium ff-poppins clr-white bg-red btn4'>DISCOVER MORE</button>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div><img src={Blockchain} alt="" className='w-100 ' /></div>
                        </Col>
                    </Row>
               
                </Container>
            </div>
            <div className='bg-yellow py-5'>
                <Container className='Custom_Container'>
                    <Row>
                        <Col lg={3} md={4} sm={6} className='w-full'>
                            <img src={Image1} alt="" className='w-100 pt-4' />
                        </Col>
                        <Col lg={3} md={4} sm={6} className='w-full'>
                            <img src={Image2} alt="" className='w-100 pt-4' />
                        </Col>
                        <Col lg={3} md={4} sm={6} className='w-full'>
                            <img src={Image3} alt="" className='w-100 pt-4' />
                        </Col>
                        <Col lg={3} md={4} sm={6} className='w-full'>
                            <img src={Image4} alt="" className='w-100 pt-4' />
                        </Col>
                        <Col lg={3} md={4} sm={6} className='w-full'>
                            <img src={Image5} alt="" className='w-100 pt-4' />
                        </Col>
                        <Col lg={3} md={4} sm={6} className='w-full'>
                            <img src={Image6} alt="" className='w-100 pt-4' />
                        </Col>
                        <Col lg={3} md={4} sm={6} className='w-full'>
                            <img src={Image7} alt="" className='w-100 pt-4' />
                        </Col>
                        <Col lg={3} md={4} sm={6} className='w-full'>
                            <img src={Image8} alt="" className='w-100 pt-4' />
                        </Col>
                        <Col lg={3} md={4} sm={6} className='w-full'>
                            <img src={Image9} alt="" className='w-100 pt-4' />
                        </Col>
                        <Col lg={3} md={4} sm={6} className='w-full'>
                            <img src={Image10} alt="" className='w-100 pt-4' />
                        </Col>
                        <Col lg={3} md={4} sm={6} className='w-full'>
                            <img src={Image14} alt="" className='w-100 pt-4' />
                        </Col>
                        <Col lg={3} md={4} sm={6} className='w-full'>
                            <img src={Image11} alt="" className='w-100 pt-4' />
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className='bg-red py-3'>
                <Container>
                    <h2 className='fs-48 fw-bold ff-poppins text-white text-center py-2'>Supplies</h2>
                    <Row >
                    
                        <Col lg={3} md={4} sm={6} className='w-full'>
                            <div className='text-center'>
                            <h2 className='fs-48 fw-bold ff-poppins text-white '>3,313</h2>
                            <p className='fs-18 fw-normal ff-poppins text-white opacity-75'>Public Sale</p>
                            </div>
                        </Col>
                        <Col lg={3} md={4} sm={6} className='w-full'>
                            <div className='text-center'>
                            <h2 className='fs-48 fw-bold ff-poppins text-white '>15</h2>
                            <p className='fs-18 fw-normal ff-poppins text-white opacity-75'>Community Giveaways</p>
                            </div>
                        </Col>
                        <Col lg={3} md={4} sm={6} className='w-full'>
                            <div className='text-center'>
                            <h2 className='fs-48 fw-bold ff-poppins text-white '>5</h2>
                            <p className='fs-18 fw-normal ff-poppins text-white opacity-75'>Marketing / Influencers</p>
                            </div>
                        </Col>
                        <Col lg={3} md={4} sm={6} className='w-full'>
                            <div className='text-center'>
                            <h2 className='fs-48 fw-bold ff-poppins text-white text-center'>15</h2>
                            <p className='fs-18 fw-normal ff-poppins text-white opacity-75'>Maximum Supply </p>
                            </div>
                        </Col>
                       
                    </Row>
                </Container>
            </div>
           
        </div>
    )
}

export default About
