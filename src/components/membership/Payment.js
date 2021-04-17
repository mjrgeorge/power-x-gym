import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../footer/Footer';
import NavBar from '../navBar/NavBar';
import PayPal from './PayPal';

const Payment = () => {
    return (
        <div className="container-fluid">
            <div className="header">
                <NavBar />
                <div style={{ height: '65vh' }} className="d-flex justify-content-center align-items-center">
                    <p className="text-white display-4 text-uppercase">Payment</p>
                </div>
            </div>
            <div className="container my-5 text-center">
                <PayPal />
            </div>
            <Footer />
        </div>
    );
};

export default Payment;