import React from 'react';
import { Button, Card, CardDeck } from 'react-bootstrap';
import TrainingOne from '../../images/image4.png';
import TrainingTwo from '../../images/image2.jpg';
import Arrow from '../../images/image2.jpg';
import { Link } from 'react-router-dom';

const TrainingPrograms = () => {
    return (
        <div>
            <h1 className="text-center m-5">TRAINING <span className="text-warning">PROGRAMS</span></h1>
            <CardDeck>
                <Card style={{ height: "350px", backgroundImage: `url(${TrainingOne})`, backgroundPosition: "center center", backgroundSize: "cover", color: "white" }}>
                    <Card.Body className="d-flex flex-column justify-content-end">
                        <Card.Title>
                            <Link to="/class" className="joinBtn btn btn-warning" style={{marginLeft:"-22px"}}>YOGA TRAINING SESSION &rarr;</Link>
                        </Card.Title>
                    </Card.Body>
                </Card>
                <Card style={{ height: "350px", backgroundImage: `url(${TrainingTwo})`, backgroundPosition: "center center", backgroundSize: "cover", color: "white" }}>
                <Card.Body className="d-flex flex-column justify-content-end">
                        <Card.Title>
                        <Link to="/class" className="joinBtn btn btn-warning" style={{marginLeft:"-22px"}}>CARDIO TRAINING SESSION &rarr;</Link>
                        </Card.Title>
                    </Card.Body>
                </Card>
            </CardDeck>
        </div>
    );
};

export default TrainingPrograms;