import React from 'react'
import iphone from '../images/iphone.jpg'
import { Container, Row } from 'react-bootstrap'


export const SlideAsBody = () => {
    return (
        <>
            <Container vh-100>
                <br />
                <Row className="mt-5">
                    <div className="col-sm-6 text-center mt-5 pt-4 ">
                        <div className='mt-5 '>
                            <h1 className="fw-semibold mb-4">Welcome to Manny store</h1>
                            <p className="fs-4">We will give you a good life style</p>
                            <p className="fs-5">Manny store have many modern smart phones</p>
                        </div>
                        <button type="button" className="btn btn-primary mt-3 mb-4 ps-4 pe-4 fs-6 fw-semibold">Buy Now</button>
                    </div>

                    <div className="col-sm-6 text-center mt-0 align-items-end">
                        <img src={iphone} alt="Software Engineering Academy of Phnom Penh" style={{ width: "560px", height: "370px" }} className="img-fluid img-md-fluid m-4 "></img>
                    </div>
                </Row>
            </Container>

        </>
    )
}
export default SlideAsBody
