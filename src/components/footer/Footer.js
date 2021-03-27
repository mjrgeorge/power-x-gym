import React from 'react';
import { Link } from 'react-router-dom';
import YouTube from '../../images/bxl-youtube.png';
import Facebook from '../../images/bxl-facebook.png';
import Instagram from '../../images/bxl-instagram.png';
import Twitter from '../../images/bxl-twitter.png';
import WhatsApp from '../../images/bxl-whatsapp.png';

const Footer = () => {
    return (
        <footer className="footer p-4">
            <div className="row">
                <div className="col-md-4">
                    <Link to="/" className="navbarBrand text-decoration-none"> <p className="text-white text-center">POWER <span className="text-warning">X</span></p></Link>
                </div>
                <div className="col-md-2 d-flex flex-column">
                    <Link to="" className="text-white mb-2">Need Help?</Link>
                    <Link to="" className="text-white mb-2">Help Center</Link>
                    <Link to="" className="text-white mb-2">Email Support</Link>
                    <Link to="" className="text-white mb-2">Live Chat</Link>
                    <Link to="" className="text-white mb-2">Gift Certificates</Link>
                    <Link to="" className="text-white mb-2">Send Us Feedback</Link>
                </div>
                <div className="col-md-2 d-flex flex-column">
                    <Link to="" className="text-white mb-2">Digital Resources</Link>
                    <Link to="" className="text-white mb-2">Articles</Link>
                    <Link to="" className="text-white mb-2">E-books</Link>
                </div>
                <div className="col-md-2 d-flex flex-column">
                    <Link to="" className="text-white mb-2">Connect with Us</Link>
                    <Link to="" className="text-white mb-2">
                        <img className="footer_icon mr-2" src={YouTube} alt="YouTube" />
                        <img className="footer_icon mr-2" src={Facebook} alt="Facebook" />
                        <img className="footer_icon mr-2" src={Instagram} alt="Instagram" />
                        <img className="footer_icon mr-2" src={Twitter} alt="Twitter" />
                        <img className="footer_icon mr-2" src={WhatsApp} alt="WhatsApp" />
                    </Link>
                    <Link to="" className="text-white mb-2">E-books</Link>
                </div>
                <div className="col-md-2">
                    <p>Join Our Newsletter</p>
                    <p>Get exclusive news, features and updates from The Shredder Weight Loss Academy.</p>
                </div>
            </div>
            <p className="text-center pt-4"> &copy; {new Date().getFullYear()} mjrgeorge. All right reserved</p>
        </footer>
    );
};

export default Footer;