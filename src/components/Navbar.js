import React from 'react'
import logo_md from '../images/logo_md.png'

function Navbar() {
    return (
        <header class="p-3 text-bg-dark sticky-top">
            <div class="container ps-5 pe-5">
                <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                        <img style={{ width: '50px', height: '50ppx' }} src={logo_md} alt="logo" />
                    </a>
                    <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 ms-4 ">
                        <li><a href="#" class="nav-link px-3 text-white">Home</a></li>
                        <li><a href="#" class="nav-link px-2 text-white">Top Product</a></li>
                        <li><a href="#" class="nav-link px-3 text-white">New Product</a></li>
                        <li><a href="#" class="nav-link px-2 text-white">All Product</a></li>
                        <li><a href="#" class="nav-link px-3 text-white">About Us</a></li>
                    </ul>
                    <div class="text-end">
                        <button type="button" class="btn btn-outline-primary text-white me-3">Login</button>
                        <button type="button" class="btn btn-primary">Sign-up</button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar;