import React from 'react';
import { Card, CardDeck } from 'react-bootstrap';
import Progression from '../../images/image9.jpg';
import ProgressionIcon from '../../images/Group 80.png';
import WorkOut from '../../images/image7.jpg';
import WorkOutIcon from '../../images/Group 81.png';
import Nutrition from '../../images/image14.jpg';
import NutritionIcon from '../../images/Group 82.png';

const Information = () => {
    return (
        <CardDeck>
            <Card style={{ height: "275px", backgroundImage: `url(${Progression})`, backgroundPosition: "center center", backgroundSize: "cover", color: "white" }}>
                <Card.Body className="d-flex flex-column align-items-center text-center justify-content-center">
                    <Card.Img variant="top" src={ProgressionIcon} style={{ width: "35px", height: "55px" }} />
                    <Card.Title style={{ fontSize: "45px" }}>Progression</Card.Title>
                    <Card.Text> Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores animi iusto numquam voluptates incidunt nam modi sunt quas facere? </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ height: "275px", backgroundImage: `url(${WorkOut})`, backgroundPosition: "center center", backgroundSize: "cover", color: "white" }}>
                <Card.Body className="d-flex flex-column align-items-center text-center justify-content-center">
                    <Card.Img variant="top" src={WorkOutIcon} style={{ width: "55px", height: "35px" }} />
                    <Card.Title style={{ fontSize: "45px" }} className="text-warning">WorkOut</Card.Title>
                    <Card.Text> Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores animi iusto numquam voluptates incidunt nam modi sunt quas facere? </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ height: "275px", backgroundImage: `url(${Nutrition})`, backgroundPosition: "center center", backgroundSize: "cover", color: "white" }}>
                <Card.Body className="d-flex flex-column align-items-center text-center justify-content-center">
                    <Card.Img variant="top" src={NutritionIcon} style={{ width: "35px", height: "55px" }} />
                    <Card.Title style={{ fontSize: "45px" }}>Nutrition</Card.Title>
                    <Card.Text> Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores animi iusto numquam voluptates incidunt nam modi sunt quas facere? </Card.Text>
                </Card.Body>
            </Card>
        </CardDeck>
    );
};

export default Information;