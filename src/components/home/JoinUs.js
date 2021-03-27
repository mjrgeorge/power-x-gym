import React from 'react';
import { Link } from 'react-router-dom';

const JoinUs = () => {
    return (
        <div className="row">
            <div className="col-md-6 text-white p-5">
                <h1 className="display-4">THE BEST FITNESS STUDIO IN TOWN</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit dolorem voluptate numquam inventore aperiam quaerat doloremque minus eius similique debitis autem, voluptates consequuntur nostrum quas at impedit repellat! Distinctio, sapiente.</p>
                <Link to="/" className="joinBtn btn btn-warning">JOIN US</Link>
            </div>
            <div className="col-md-6">
                {/* <video controls src="" width="100%" height="100%"></video> */}
            </div>
        </div>
    );
};

export default JoinUs;