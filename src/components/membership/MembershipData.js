import React from 'react';
import { useParams } from 'react-router';
import Footer from '../footer/Footer';
import NavBar from '../navBar/NavBar';

const MembershipData = () => {
    const {packageName} = useParams();
    return (
        <div className="container-fluid">
            <div className="header">
                <NavBar />
                <div style={{ height: '65vh' }} className="d-flex justify-content-center align-items-center">
                    <p className="text-white display-4 text-uppercase">{packageName}</p>
                </div>
            </div>
            <div className="container my-5">

            </div>
            <Footer />
        </div>
    );
};

export default MembershipData;