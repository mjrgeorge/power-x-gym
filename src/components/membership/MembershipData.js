import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Footer from '../footer/Footer';
import NavBar from '../navBar/NavBar';

const MembershipData = () => {
    const { packageName } = useParams();
    return (
        <div className="container-fluid">
            <div className="header">
                <NavBar />
                <div style={{ height: '65vh' }} className="d-flex justify-content-center align-items-center">
                    <p className="text-white display-4 text-uppercase">{packageName}</p>
                </div>
            </div>
            <div className="container my-5">
                <form className="row g-3">
                    <div className="col-md-6">
                        <label for="firstName" className="form-label">First Name</label>
                        <input type="text" className="form-control" id="firstName" />
                    </div>
                    <div className="col-md-6">
                        <label for="lastName" className="form-label">Last Name</label>
                        <input type="text" className="form-control" id="lastName" />
                    </div>
                    <div className="col-md-6">
                        <label for="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" />
                    </div>
                    <div className="col-md-6">
                        <label for="phone" className="form-label">Phone</label>
                        <input type="text" className="form-control" id="phone" />
                    </div>
                    <div className="col-md-6">
                        <label for="dateOfBirth" className="form-label">Date of Birth</label>
                        <input type="date" className="form-control" id="dateOfBirth" />
                    </div>
                    <div className="col-md-6">
                        <label for="inputState" className="form-label">Gender</label>
                        <select id="inputState" className="form-select form-control">
                            <option selected>Male</option>
                            <option>Female</option>
                            <option>Trans Gender</option>
                        </select>
                    </div>
                    <div className="col-md-6">
                        <label for="address" className="form-label">Address Line1 :</label>
                        <input type="text" className="form-control" id="address" />
                    </div>
                    <div className="col-md-6">
                        <label for="countryRegion" className="form-label">Country / Region</label>
                        <input type="text" className="form-control" id="countryRegion" />
                    </div>
                    <div className="col-md-6">
                        <label for="city" className="form-label">City</label>
                        <input type="text" className="form-control" id="city" />
                    </div>
                    <div className="col-md-6">
                        <label for="postCode" className="form-label">Post Code</label>
                        <input type="text" className="form-control" id="postCode" />
                    </div>
                </form>
                <div className="text-right mt-2">
                    <Link to="/payment" className="joinBtn btn btn-warning">NEXT</Link>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default MembershipData;