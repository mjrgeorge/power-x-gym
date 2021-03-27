import React from 'react';
import { useParams } from 'react-router';
import Footer from '../footer/Footer';
import NavBar from '../navBar/NavBar';

const ClassSchedule = () => {
    const { classSchedule } = useParams();
    return (
        <div className="container-fluid">
            <div className="header">
                <NavBar />
                <div style={{ height: '65vh' }} className="d-flex justify-content-center align-items-center">
                    <p className="text-white display-4 text-uppercase">{classSchedule}</p>
                </div>
            </div>
            <div className="container">
                <div className="row container">
                    <div className="col-md-4 mt-5">

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ClassSchedule;