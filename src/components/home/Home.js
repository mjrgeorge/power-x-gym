import React from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import About from './About';
import WorkOut from './Information';
import TrainingPrograms from './TrainingPrograms';

const Home = () => {
    return (
        <div>
            <Header />
            <div className="m-5">
                <WorkOut />
                <About/>
                <TrainingPrograms/>
            </div>
            <Footer />
        </div>
    );
};

export default Home;