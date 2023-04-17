import React from 'react'
import phoneForCard from '../images/phoneForCard.jpg'

export const Product = () => {
    return (
        <>
            <br /><br /><br /><br /><br />
            <section class="container mt-5">
                <h1 data-aos="fade-up" class="text-center mb-5">Top Product in 2023</h1>
                <div class="row  g-4  ps-5 pe-5 mt-2">
                    <div data-aos="fade-up" class="col-sm-12 col-md-6 col-xl">
                        <div class="card ">
                            <img src={phoneForCard} class="card-img-top shadow-sm p-3 mb-1 bg-body " alt="..." />
                            <div class="card-body">
                                <h5 class="card-title fw">13 pro max</h5>
                                <p>Met Apple Trade In kun je korting krijgen op een nieuwe iPhone als je een in aanmerking...</p>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up" class="col-sm-12 col-md-6 col-xl">
                        <div class="card">
                            <img src={phoneForCard} class="card-img-top shadow-sm p-3 mb-1 bg-body" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title fw">13 pro max</h5>
                                <p>Met Apple Trade In kun je korting krijgen op een nieuwe iPhone als je een in aanmerking...</p>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up" class="col-sm-12 col-md-6 col-xl">
                        <div class="card">
                            <img src={phoneForCard} class="card-img-top shadow-sm p-3 mb-1 bg-body" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title fw">13 pro max</h5>
                                <p>Met Apple Trade In kun je korting krijgen op een nieuwe iPhone als je een in aanmerking...</p>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up" class="col-sm-12 col-md-6 col-xl">
                        <div class="card">
                            <img src={phoneForCard} class="card-img-top shadow-sm p-3 mb-1 bg-body" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title fw">13 pro max</h5>
                                <p>Met Apple Trade In kun je korting krijgen op een nieuwe iPhone als je een in aanmerking...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Product
