import React from 'react';
import { Button, Card, CardDeck } from 'react-bootstrap';
import TrainingOne from '../../images/image4.png';
import TrainingTwo from '../../images/image2.jpg';
import Arrow from '../../images/image2.jpg';

const TrainingPrograms = () => {
    return (
        <div>
            <h1 className="text-center m-5">TRAINING <span className="text-warning">PROGRAMS</span></h1>
            <CardDeck>
                <Card style={{ height: "350px", backgroundImage: `url(${TrainingOne})`, backgroundPosition: "center center", backgroundSize: "cover", color: "white" }}>
                    <Card.Body className="d-flex flex-column justify-content-end">
                        <Card.Title>
                            <Button variant="warning" style={{marginLeft:"-22px"}}><big>YOGA TRAINING SESSION &rarr;</big></Button>
                        </Card.Title>
                    </Card.Body>
                </Card>
                <Card style={{ height: "350px", backgroundImage: `url(${TrainingTwo})`, backgroundPosition: "center center", backgroundSize: "cover", color: "white" }}>
                <Card.Body className="d-flex flex-column justify-content-end">
                        <Card.Title>
                        <Button variant="warning" style={{marginLeft:"-22px"}}><big>CARDIO TRAINING SESSION &rarr;</big></Button>
                        </Card.Title>
                    </Card.Body>
                </Card>
            </CardDeck>
        </div>
    );
};

export default TrainingPrograms;