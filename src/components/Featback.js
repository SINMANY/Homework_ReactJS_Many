import React from 'react'
import customer from '../images/customer.jpg'

export const Featback = () => {
    return (
        <section data-aos="fade-up" class="featback-bg p-5 set-height-width">
            <h1 data-aos="fade-up" class="text-center mb-5 pt-5">Customers Feedback</h1>
            <div class="container d-flex justify-content-center align-items-center ">
                <div class="row mb-5  " id="tourist-fb">
                    <div data-aos="fade-up" class="col-sm-12 col-md-6 col-xl-4 card-fb">
                        <div class="portrait">
                            <div class="avatar">
                                <img src={customer} alt="" />
                            </div>
                            <div class="title m-3 ">
                                <h5>Marima</h5>
                                <p>From Phnom Penh</p>
                                <p class="style-text">Good product...!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up" class="col-sm-12 col-md-6 col-xl-4 card-fb ">
                        <div class="portrait">
                            <div class="avatar">
                                <img src={customer} alt="" />
                            </div>
                            <div class="title m-3 ">
                                <h5>Marima</h5>
                                <p>From Phnom Penh</p>
                                <p class="style-text">Good product...!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up" class="col-sm-12 col-md-6 col-xl-4 card-fb  ">
                        <div class="portrait">
                            <div class="avatar">
                                <img src={customer} alt="" />
                            </div>
                            <div class="title m-3 ">
                                <h5>Marima</h5>
                                <p>From Phnom Penh</p>
                                <p class="style-text">Good product...!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >

    )
}
