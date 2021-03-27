import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Footer from '../footer/Footer';
import NavBar from '../navBar/NavBar';
import ClassImage from '../../images/image10.jpg';

const ClassSchedule = () => {
    const { classSchedule } = useParams();
    const checkedIcon = <svg className="bg-warning text-white" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-square" viewBox="0 0 16 16">
        <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
        <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z" />
    </svg>;
    return (
        <div className="container-fluid">
            <div className="header">
                <NavBar />
                <div style={{ height: '65vh' }} className="d-flex justify-content-center align-items-center">
                    <p className="text-white display-4 text-uppercase">{classSchedule}</p>
                </div>
            </div>
            <div className="container">
                <div className="row my-5">
                    <div className="col-md-7">
                        <img className="img-fluid" src={ClassImage} alt="ClassImage" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime voluptatibus doloribus consequuntur, itaque expedita ea totam atque. Minima eos reprehenderit neque iusto autem pariatur explicabo ex delectus quidem officia? Incidunt, facere aut. Soluta expedita blanditiis iusto omnis tempore ut, corporis quia, dolore hic nobis, quaerat ratione facere dignissimos voluptatibus sunt! Ipsam possimus voluptate cum perspiciatis est quis esse odio animi pariatur amet reprehenderit veritatis sint consequatur vitae saepe voluptatibus dolor, distinctio minus obcaecati officia iure quo sequi unde eligendi. Nemo.</p>
                        <ul className="list-unstyled">
                            <li>{checkedIcon} Having Slimmer Shapely Thighs</li>
                            <li>{checkedIcon} Getting Stronger Body</li>
                            <li>{checkedIcon} Increased Metabolism</li>
                            <li>{checkedIcon} Increased Muscular Endurance</li>
                            <li>{checkedIcon} Maximum Results in Less Time</li>
                            <li>{checkedIcon} Firm Hips and Tummy</li>
                        </ul>
                    </div>
                    <div className="col-md-5 d-flex flex-column justify-content-between">
                        <div>
                            <h2 className="my-4"><span className="text-warning">CLASS</span> SCHEDULE</h2>
                            <div className="row">
                                <div className="col-md-5 border shadow-lg p-3 m-2">
                                    <h4>Monday</h4>
                                    <small className="text-warning">8:00 AM - 9:00 AM</small>
                                </div>
                                <div className="col-md-5 border shadow-lg p-3 m-2">
                                    <h4>Tuesday</h4>
                                    <small className="text-warning">10:00 AM - 11:00 AM</small>
                                </div>
                                <div className="col-md-5 border shadow-lg p-3 m-2">
                                    <h4>Wednesday</h4>
                                    <small className="text-warning">7:00 AM - 8:00 AM</small>
                                </div>
                                <div className="col-md-5 border shadow-lg p-3 m-2">
                                    <h4>Thursday</h4>
                                    <small className="text-warning">5:00 PM - 6:00 PM</small>
                                </div>
                                <div className="col-md-5 border shadow-lg p-3 m-2">
                                    <h4>Friday</h4>
                                    <small className="text-warning">6:00 PM - 7:00 PM</small>
                                </div>
                                <div className="col-md-5 border shadow-lg p-3 m-2">
                                    <h4>Saturday</h4>
                                    <small className="text-warning">7:00 PM - 8:00 PM</small>
                                </div>
                            </div>
                        </div>
                        <div className="text-right">
                            <Link to="/" className="joinBtn btn btn-warning">JOIN US</Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ClassSchedule;