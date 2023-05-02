import React from 'react'

export const Footer = () => {
    return (
        <footer class="py-3 my-4 " style={{ backgroundColor: '#212529' }}>
            <ul class="nav justify-content-center border-bottom pb-3 mb-3">
                <li class="nav-item"><a href="#" class="nav-link px-2 text-white">Home</a></li>
                <li class="nav-item"><a href="#" class="nav-link px-2 text-white">Top product</a></li>
                <li class="nav-item"><a href="#" class="nav-link px-2 text-white">New product</a></li>
                <li class="nav-item"><a href="#" class="nav-link px-2 text-white">All product</a></li>
                <li class="nav-item"><a href="#" class="nav-link px-2 text-white">About Us</a></li>
            </ul>
            <p class="text-center text-white">© 2022 Company, Inc</p>
        </footer>
    )
}
