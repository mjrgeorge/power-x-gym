import React from 'react';
import { Card, CardDeck } from 'react-bootstrap';
import Footer from '../footer/Footer';
import NavBar from '../navBar/NavBar';
import priceOne from '../../images/image9.jpg';
import priceTwo from '../../images/image7.jpg';
import priceThree from '../../images/image14.jpg';
import { Link } from 'react-router-dom';

const PricePlan = () => {
    const checkIcon = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
    </svg>;

    return (
        <div className="container-fluid">
            <div className="header">
                <NavBar />
                <div style={{ height: '65vh' }} className="d-flex justify-content-center align-items-center">
                    <p className="text-white display-4 text-uppercase">Pricing Plans</p>
                </div>
            </div>
            <div className="container my-5">
                <div className="text-center mb-5">
                    <p className="h1 mb-3"><span className="text-warning">CHOOSE THE OFFER </span>THAT SUITS YOU</p>
                    <p>Sed ut perspiciatis undeomnis iste natus error sit voluptatem accusantium <br></br> doloremque laudantium, totam rem aperiam </p>
                </div>
                <CardDeck>
                    <Card style={{ height: "500px", backgroundImage: `url(${priceOne})`, backgroundPosition: "center center", backgroundSize: "cover", color: "white" }}>
                        <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                            <p className="text-warning h5">BILLED MONTHLY</p>
                            <p className="text-white h2">ADVANCE PLAN</p>
                            <p className="text-warning display-2">$140</p>
                            <ul className="list-unstyled">
                                <li>{checkIcon} Mobile - Optimized</li>
                                <li>{checkIcon} Best Hosting</li>
                                <li>{checkIcon} Free Custom</li>
                                <li>{checkIcon} Outstanding</li>
                                <li>{checkIcon} Happy Customers</li>
                            </ul>
                            <Link to="/membership/advance plan" className="btn btn-warning mt-3"><big>PURCHASE</big></Link>
                        </Card.Body>
                    </Card>
                    <Card style={{ height: "500px", backgroundImage: `url(${priceTwo})`, backgroundPosition: "center center", backgroundSize: "cover", color: "white" }}>
                        <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                            <p className="text-warning h5">BILLED MONTHLY</p>
                            <p className="text-white h2">BASIC PLAN</p>
                            <p className="text-warning display-2">$120</p>
                            <ul className="list-unstyled">
                                <li>{checkIcon} Mobile - Optimized</li>
                                <li>{checkIcon} Best Hosting</li>
                                <li>{checkIcon} Free Custom</li>
                                <li>{checkIcon} Outstanding</li>
                                <li>{checkIcon} Happy Customers</li>
                            </ul>
                            <Link to="/membership/basic plan" className="btn btn-warning mt-3"><big>PURCHASE</big></Link>
                        </Card.Body>
                    </Card>
                    <Card style={{ height: "500px", backgroundImage: `url(${priceThree})`, backgroundPosition: "center center", backgroundSize: "cover", color: "white" }}>
                        <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                            <p className="text-warning h5">BILLED MONTHLY</p>
                            <p className="text-white h2">BEGINNERS PLAN</p>
                            <p className="text-warning display-2">$90</p>
                            <ul className="list-unstyled">
                                <li>{checkIcon} Mobile - Optimized</li>
                                <li>{checkIcon} Best Hosting</li>
                                <li>{checkIcon} Free Custom</li>
                                <li>{checkIcon} Outstanding</li>
                                <li>{checkIcon} Happy Customers</li>
                            </ul>
                            <Link to="/membership/beginners plan" className="btn btn-warning mt-3"><big>PURCHASE</big></Link>
                        </Card.Body>
                    </Card>
                </CardDeck>
            </div>
            <Footer />
        </div>
    );
};

export default PricePlan;