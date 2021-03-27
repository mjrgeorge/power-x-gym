import React from 'react';
import { Card, CardDeck } from 'react-bootstrap';
import ChooseOne from '../../images/Group 87.png';
import ChooseTwo from '../../images/Group 88.png';
import ChooseThree from '../../images/Group 89.png';

const ChooseUs = () => {
    return (
        <div>
            <h1 className="text-center m-5"><span className="text-warning">WHY</span> CHOOSE US</h1>
            <CardDeck>
                <Card style={{ height: "325px" }} className="p-3 shadow-lg">
                    <Card.Body className="d-flex flex-column align-items-center text-center justify-content-center">
                        <Card.Img variant="top" src={ChooseOne} style={{ width: "100px", height: "100px", margin: "20px" }} />
                        <Card.Title style={{ fontSize: "17px", fontWeight: "bold" }}>FREE FITNESS TRAINING</Card.Title>
                        <Card.Text> Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores animi iusto numquam voluptates incidunt nam modi sunt quas facere? </Card.Text>
                    </Card.Body>
                </Card>
                <Card border="warning" style={{ height: "325px" }} className="p-3 shadow-lg">
                    <Card.Body className="d-flex flex-column align-items-center text-center justify-content-center">
                        <Card.Img variant="top" src={ChooseTwo} style={{ width: "100px", height: "100px", margin: "20px" }} />
                        <Card.Title style={{ fontSize: "17px", fontWeight: "bold" }}>TONS OF CARDIO & STRENGTH</Card.Title>
                        <Card.Text> Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores animi iusto numquam voluptates incidunt nam modi sunt quas facere? </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ height: "325px" }} className="p-3 shadow-lg">
                    <Card.Body className="d-flex flex-column align-items-center text-center justify-content-center">
                        <Card.Img variant="top" src={ChooseThree} style={{ width: "100px", height: "100px", margin: "20px" }} />
                        <Card.Title style={{ fontSize: "17px", fontWeight: "bold" }}>NO COMMITMENT MEMBERSHIP</Card.Title>
                        <Card.Text> Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores animi iusto numquam voluptates incidunt nam modi sunt quas facere? </Card.Text>
                    </Card.Body>
                </Card>
            </CardDeck>
        </div>
    );
};

export default ChooseUs;