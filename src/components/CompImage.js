import React from 'react'
import GroupIphone from '../images/GroupIphone.jpg'
import { Container } from 'react-bootstrap'

export const CompImage = () => {
    return (
        <Container className='p-5 mt-5 mb-3'>
            <br />
            <div class="card">
                <img src={GroupIphone} class="card-img" alt="..." />
                <div class="card-img-overlay">
                    {/*  
                ...
                */}
                </div>
            </div>
        </Container>
    )
}
