import React from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import About from './About';
import ChooseUs from './ChooseUs';
import WorkOut from './Information';
import TrainingPrograms from './TrainingPrograms';

const Home = () => {
    return (
        <div className="container-fluid">
            <Header />
            <div className="m-5 p-5">
                <WorkOut />
                <About/>
                <TrainingPrograms/>
                <ChooseUs/>
            </div>
            <Footer />
        </div>
    );
};

export default Home;