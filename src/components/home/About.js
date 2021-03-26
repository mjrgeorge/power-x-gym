import React from 'react';
import AboutPic from '../../images/image20.jpg';

const About = () => {
    return (
        <div className="row my-5 p-3">
            <div className="col-md-6"  style={{backgroundImage: `url(${AboutPic})`, backgroundPosition: "top center", backgroundSize: "cover"}}> </div>
            <div className="col-md-6">
                <div className="pb-5 pl-5 pr-5">
                <h2 className="h1 text-light">ABOUT US</h2>
                <h3 className="text-warning">WE ARE HERE TO DREAM!</h3>
                <h3 className="text-dark">OUR TEAM IS HERE SURV YOU</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit nemo dolorum possimus est eaque? Optio nihil et architecto, nulla expedita iure aliquam cupiditate alias iusto, ipsa, quis hic magni culpa. Ullam accusantium aut aliquam voluptatibus non reprehenderit, cum, quisquam aliquid quibusdam architecto quia dolor illum temporibus ipsum? Voluptatum, quas pariatur.</p>
                </div>
            </div>
        </div>
    );
};

export default About;