import React, { useState } from 'react'
import { Accordion, Container, Row } from 'react-bootstrap'
import logo from '../assets/images/png/logo1.png'
import icon from '../assets/images/png/bi_discord.png'
import icon2 from '../assets/images/png/twitter-fill.png'
const FaqSection = () => {
    return (
        <div>
            <div className='bg-yellow'>
                <Container className='My_Container'>
                    <h2 className='fs-48 fw-bold ff-poppins text-black text-center py-4
                    '>FAQ</h2>
                    <Row>
                        <Accordion defaultActiveKey="0" flush>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Amet vel eget nisi, sed ut massa turpis sodales nunc.</Accordion.Header>
                                <Accordion.Body>
                                    Enim scelerisque quisque egestas velit, eget tempus, arcu pulvinar in. Quis sed at sodales aliquam. Amet fermentum, lectus nulla tincidunt egestas.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Amet vel eget nisi, sed ut massa turpis sodales nunc.</Accordion.Header>
                                <Accordion.Body>
                                    Enim scelerisque quisque egestas velit, eget tempus, arcu pulvinar in. Quis sed at sodales aliquam. Amet fermentum, lectus nulla tincidunt egestas.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Amet vel eget nisi, sed ut massa turpis sodales nunc.</Accordion.Header>
                                <Accordion.Body>
                                    Enim scelerisque quisque egestas velit, eget tempus, arcu pulvinar in. Quis sed at sodales aliquam. Amet fermentum, lectus nulla tincidunt egestas.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>Amet vel eget nisi, sed ut massa turpis sodales nunc.</Accordion.Header>
                                <Accordion.Body>
                                    Enim scelerisque quisque egestas velit, eget tempus, arcu pulvinar in. Quis sed at sodales aliquam. Amet fermentum, lectus nulla tincidunt egestas.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>Amet vel eget nisi, sed ut massa turpis sodales nunc.</Accordion.Header>
                                <Accordion.Body>
                                    Enim scelerisque quisque egestas velit, eget tempus, arcu pulvinar in. Quis sed at sodales aliquam. Amet fermentum, lectus nulla tincidunt egestas.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="5">
                                <Accordion.Header>Amet vel eget nisi, sed ut massa turpis sodales nunc.</Accordion.Header>
                                <Accordion.Body>
                                    Enim scelerisque quisque egestas velit, eget tempus, arcu pulvinar in. Quis sed at sodales aliquam. Amet fermentum, lectus nulla tincidunt egestas.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Row>
                    <div className='text-center pt-5 mt-4'>
                        <img src={logo} alt="" className='w-100 mw-524' />
                        <div className='d-flex  justify-content-center gap-5 pt-4'>
                            <a href='#'><img src={icon} alt="" /></a>
                            <a href="#"><img src={icon2} alt="" /></a>
                        </div>
                    </div>
                </Container>
            </div>

        </div>
    )
}

export default FaqSection
