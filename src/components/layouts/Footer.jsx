import React from 'react'

/**Icons */
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className='container-fluid my-1'>
            <div className="container">
                <div className="row">
            <div className="col-lg-3 col-md-6 d-flex flex-column">
                <p className="h3 my-2 font-weight-bold">Get in Touch</p>
                <p className='my-1'>123 E Store, Los Angeles, USA</p>
                <p className='my-1'>email@example.com</p>
                <p className='my-1'>+123-456-7890</p>
            </div>
            <div className="col-lg-3 col-md-6 d-flex flex-column">
                <p className="h3 my-2 font-weight-bold">Follow Us</p>
                    <div className="d-flex my-2">
                        <span className="contact-icons mx-1 border border-dark rounded px-2 py-1">
                            <FaFacebookF/>
                        </span>
                        <span className="contact-icons mx-1 border border-dark rounded px-2 py-1">
                            <FaTwitter/>
                        </span>
                        <span className="contact-icons mx-1 border border-dark rounded px-2 py-1">
                            <FaInstagram/>
                        </span>
                        <span className="contact-icons mx-1 border border-dark rounded px-2 py-1">
                            <FaLinkedin/>
                        </span>
                        <span className="contact-icons mx-1 border border-dark rounded px-2 py-1">
                            <FaYoutube/>
                         </span>
                    </div>      
            </div>
            <div className="col-lg-3 col-md-6  d-flex flex-column">
                <p href='/' className='h3 font-weight-bold my-2'>Company Info</p> 
                <a href='/' className='my-1'>About Us</a>
                <a href='/' className='my-1'>Privacy Police</a>
                <a href='/' className='my-1'>Terms & Conditions</a>
            </div>
            <div className="col-lg-3 col-md-6 d-flex flex-column">
                <p className='h3 font-weight-bold my-2'>Purchase Info</p> 
                <a href='/' className='my-2'>Payment Policy</a>
                <a href='/' className='my-1'>Shopping Pollicy</a>
                <a href='/' className='my-1'>Return Policy</a>
            </div>      
            </div>
            </div>
        </footer>
    )
}

export default Footer
