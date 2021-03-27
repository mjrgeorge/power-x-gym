import React from 'react';
import { useContext } from 'react';
import { Button, Card, CardDeck } from 'react-bootstrap';
import { useParams } from 'react-router';
import { userContext } from '../../App';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import Psycho from '../../images/image19.jpg';
import Self from '../../images/image3.jpg';
import Advance from '../../images/image10.jpg';
import Cardio from '../../images/image1.jpg';
import Strength from '../../images/image11.jpg';
import PsychoExtra from '../../images/image16.jpg';

const OurClasses = () => {
    const [pathName, setPathName] = useContext(userContext);
    const { ourClass } = useParams();
    setPathName(ourClass);
    return (
        <div className="container-fluid">
            <Header />
            <div className="container">
                <div className="row container">
                    <div className="col-md-4 mt-5">
                        <Card style={{ height: "350px", backgroundImage: `url(${Psycho})`, backgroundPosition: "center center", backgroundSize: "cover", color: "white" }}>
                            <Card.Body className="d-flex flex-column justify-content-end">
                                <Card.Title style={{ fontSize: "45px", marginLeft: "-22px", paddingLeft: "-22px" }}>
                                    <Button variant="warning"><big>PSYCHO TRAINING &rarr;</big></Button>
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4 mt-5">
                        <Card style={{ height: "350px", backgroundImage: `url(${Advance})`, backgroundPosition: "center center", backgroundSize: "cover", color: "white" }}>
                            <Card.Body className="d-flex flex-column justify-content-end">
                                <Card.Title style={{ fontSize: "45px", marginLeft: "-22px", paddingLeft: "-22px" }}>
                                    <Button variant="warning"><big>ADVANCE GYM &rarr;</big></Button>
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4 mt-5">
                        <Card style={{ height: "350px", backgroundImage: `url(${PsychoExtra})`, backgroundPosition: "center center", backgroundSize: "cover", color: "white" }}>
                            <Card.Body className="d-flex flex-column justify-content-end">
                                <Card.Title style={{ fontSize: "45px", marginLeft: "-22px", paddingLeft: "-22px" }}>
                                    <Button variant="warning"><big>PSYCHO TRAINING &rarr;</big></Button>
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4 my-5">
                        <Card style={{ height: "350px", backgroundImage: `url(${Strength})`, backgroundPosition: "center center", backgroundSize: "cover", color: "white" }}>
                            <Card.Body className="d-flex flex-column justify-content-end">
                                <Card.Title style={{ fontSize: "45px", marginLeft: "-22px", paddingLeft: "-22px" }}>
                                    <Button variant="warning"><big>STRENGTH TRAINING &rarr;</big></Button>
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4 my-5">
                        <Card style={{ height: "350px", backgroundImage: `url(${Cardio})`, backgroundPosition: "center center", backgroundSize: "cover", color: "white" }}>
                            <Card.Body className="d-flex flex-column justify-content-end">
                                <Card.Title style={{ fontSize: "45px", marginLeft: "-22px", paddingLeft: "-22px" }}>
                                    <Button variant="warning"><big>CARDIO TRAINING &rarr;</big></Button>
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4 my-5">
                        <Card style={{ height: "350px", backgroundImage: `url(${Self})`, backgroundPosition: "center center", backgroundSize: "cover", color: "white" }}>
                            <Card.Body className="d-flex flex-column justify-content-end">
                                <Card.Title style={{ fontSize: "45px", marginLeft: "-22px", paddingLeft: "-22px" }}>
                                    <Button variant="warning"><big>SELF DEFENCE &rarr;</big></Button>
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