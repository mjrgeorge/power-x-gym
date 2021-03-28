import React from 'react';
import { Card } from 'react-bootstrap';
import Footer from '../footer/Footer';
import Psycho from '../../images/image17.png';
import Self from '../../images/image3.jpg';
import Advance from '../../images/image10.jpg';
import Cardio from '../../images/image1.jpg';
import Strength from '../../images/image11.jpg';
import PsychoExtra from '../../images/image9.jpg';
import NavBar from '../navBar/NavBar';
import { Link } from 'react-router-dom';

const OurClasses = () => {
    return (
        <div className="container-fluid">
            <div className="header">
                <NavBar />
                <div style={{ height: '65vh' }} className="d-flex justify-content-center align-items-center">
                    <p className="text-white display-4 text-uppercase">Our Class</p>
                </div>
            </div>
            <div className="container">
                <div className="row container">
                    <div className="col-md-4 mt-5">
                        <Card style={{ height: "350px", backgroundImage: `url(${Psycho})`, backgroundPosition: "center center", backgroundSize: "cover", color: "white" }}>
                            <Card.Body className="d-flex flex-column justify-content-end align-items-center">
                                <Card.Title>
                                    <Link className="btn btn-warning" to="/schedule/psycho training" style={{ margin: "0 0 -80px 0", padding: "15px 30px" }}><big>PSYCHO TRAINING &rarr;</big></Link>
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4 mt-5">
                        <Card style={{ height: "350px", backgroundImage: `url(${Advance})`, backgroundPosition: "center center", backgroundSize: "cover", color: "white" }}>
                            <Card.Body className="d-flex flex-column justify-content-end align-items-center">
                                <Card.Title>
                                    <Link className="btn btn-warning" to="/schedule/advance gym" style={{ margin: "0 0 -80px 0", padding: "15px 30px" }}><big>ADVANCE GYM &rarr;</big></Link>
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4 mt-5">
                        <Card style={{ height: "350px", backgroundImage: `url(${PsychoExtra})`, backgroundPosition: "center center", backgroundSize: "cover", color: "white" }}>
                            <Card.Body className="d-flex flex-column justify-content-end align-items-center">
                                <Card.Title>
                                    <Link className="btn btn-warning" to="/schedule/psycho training" style={{ margin: "0 0 -80px 0", padding: "15px 30px" }}><big>PSYCHO TRAINING &rarr;</big></Link>
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4 my-5">
                        <Card style={{ height: "350px", backgroundImage: `url(${Strength})`, backgroundPosition: "center center", backgroundSize: "cover", color: "white" }}>
                            <Card.Body className="d-flex flex-column justify-content-end align-items-center">
                                <Card.Title>
                                    <Link className="btn btn-warning" to="/schedule/strength training" style={{ margin: "0 0 -80px 0", padding: "15px 30px" }}><big>STRENGTH TRAINING &rarr;</big></Link>
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4 my-5">
                        <Card style={{ height: "350px", backgroundImage: `url(${Cardio})`, backgroundPosition: "center center", backgroundSize: "cover", color: "white" }}>
                            <Card.Body className="d-flex flex-column justify-content-end align-items-center">
                                <Card.Title>
                                    <Link className="btn btn-warning" to="/schedule/cardio training" style={{ margin: "0 0 -80px 0", padding: "15px 30px" }}><big>CARDIO TRAINING &rarr;</big></Link>
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4 my-5">
                        <Card style={{ height: "350px", backgroundImage: `url(${Self})`, backgroundPosition: "center center", backgroundSize: "cover", color: "white" }}>
                            <Card.Body className="d-flex flex-column justify-content-end align-items-center">
                                <Card.Title>
                                    <Link className="btn btn-warning" to="/schedule/self defence" style={{ margin: "0 0 -80px 0", padding: "15px 30px" }}><big>SELF DEFENCE &rarr;</big></Link>
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default OurClasses;