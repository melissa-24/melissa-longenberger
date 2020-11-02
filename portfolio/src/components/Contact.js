import React from 'react'

const Contact = () => {
    return (
        <div className='contact'>
            <div className='reach'>
                <h2>Contact me</h2>
                <p>Email: <a href='mailto:melissa@melissa-longenberger.com'>melissa@melissa-longenberger.com</a></p>
                <p>Gmail: <a href='mailto:melissalongenberger24@gmail.com'>melissalongenberger24@gmail.com</a></p>
                <p>LinkedIn: <a href='https://www.linkedin.com/in/melissa-longenberger'>My Profile Page</a></p>
                <p>GitHub: <a href='https://github.com/melissa-24'>Personal Profile</a></p>
            </div>
            <div className='places'>
                <h2>Other places to find me</h2>
                <p>GitHub Organization: <a href='https://github.com/beedev-services'>BeeDev Services</a></p>
                <p>GitHub Organization: <a href='https://github.com/BeeDev-IT-Services-Coding-DoJo'>BeeDev DoJo - For lessons that I teach</a></p>
            </div>
        </div>
    )
}

export default Contact