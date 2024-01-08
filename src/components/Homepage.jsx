import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Image1 from "../assets/images/png/saintaimg.png"


const Homepage = () => {
    const [name, setname] = useState(false)
    return (
        <div>
            <nav className=' py-3 bg-black'>
                <Container>
                    <div className=' d-flex justify-content-between align-items-center'>
                        <h2 className='fs-36 fw-400 ff-poppins text-white'>Saint<span className='fs-36 fw-700 ff-poppins text-orange'>Shiba</span></h2>
                        <ul className={`${(name) ? "left_0" : "left_100"} nav_bar mb-0 pb-0`} >
                            <li><a href="#" className='fs-18 fw-400 ff-poppins text-white'>Home</a></li>
                            <li><a href="#" className='fs-18 fw-400 ff-poppins text-white'>About</a></li>
                            <li><a href="#" className='fs-18 fw-400 ff-poppins text-white'>Tokenomics</a></li>
                            <li><a href="#" className='fs-18 fw-400 ff-poppins text-white'>How to buy</a></li>
                            <li><a href="#" className='fs-18 fw-400 ff-poppins text-white'>FAQ</a></li>
                            <li><button className='fs-18 fw-600 ff-poppins text-white btn0 text-center  '>Connect Wallet</button></li>
                        </ul>

                        <div onClick={() => setname(!name
                        )} className={`${(name) ? 'cross position-relative z_5' : " position-relative z_5"} nav_icon `}>
                            <div className="span_1"></div>
                            <div className="span2"></div>
                            <div className="span3"></div>
                        </div>

                    </div>
                </Container>

            </nav>
            <div className=' bg_img min-vh-100 position-relative flex-grow-1 d-flex justify-content-center align-items-center flex-column'>
                <Container>
                    <Row>
                        <Col lg={6} className='d-flex justify-content-center align-items-center flex-column'>
                            <div>
                                <h1 className='fs-96 fw-bold  ff-poppins text-white mw-550'>Accumsan ut orci vitae</h1>
                                <p className='fs-22 fw-normal ff-poppins  text-white mw-550'>Velit eget sit nibh fringilla risus ullamcorper malesuada. Morbi nulla suscipit dolor, volutpat quam at urna donec rutrum. In vulputate congue arcu in et.</p>
                                <button className='fs-18 fw-600 ff-poppins text-white btn0 text-center '>Connect Wallet</button></div>
                        </Col>
                        <Col lg={6}>
                            <div className='position-ab'> <img src={Image1} alt="" className='w-100
                            ' /> </div>
                        </Col>
                    </Row>

                </Container>
            </div>
            <div className='bg_color'>
                <Container>

                    <div className='boxx trans'>
                        <h2 className='fs-48 fw-600 ff-poppins text-white'>Cursus ligula habitant sed integer.</h2>
                        <p className='fs-18 fw-normal ff-poppins text-white opacity-70 line-hight-180'>Urna, dictum volutpat augue tortor. Fermentum vulputate convallis viverra facilisis. Aliquam porttitor sem rhoncus rhoncus, quis. Arcu, ut enim eget pellentesque neque. Nibh pellentesque lobortis etiam sed. Cursus donec porttitor fames tellus. At ut donec nec aliquet ipsum leo tellus amet lacus. Varius mi urna blandit id magna tellus imperdiet tortor. Volutpat nec vulputate diam tristique facilisi in turpis vel elit.</p>
                        <p className='fs-18 fw-normal ff-poppins text-white opacity-70 line-hight-180'>Urna, dictum volutpat augue tortor. Fermentum vulputate convallis viverra facilisis. Aliquam porttitor sem rhoncus rhoncus, quis. Arcu, ut enim eget pellentesque neque. Nibh pellentesque lobortis etiam sed. Cursus donec porttitor fames tellus. At ut donec nec aliquet ipsum leo tellus amet lacus. Varius mi urna blandit id magna tellus imperdiet tortor. Volutpat nec vulputate diam tristique facilisi in turpis vel elit.</p>
                    </div>

                        <Row>
                            <Col lg={6}>
                                <h2>Cursus ligula habitant sed integer.</h2>
                            </Col>
                        </Row>
                </Container>
            </div>
            
        </div>

    )
}

export default Homepage
