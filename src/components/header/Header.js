import React from 'react';
import { useContext } from 'react';
import { userContext } from '../../App';
import JoinUs from '../home/JoinUs';
import NavBar from '../navBar/NavBar';

const Header = () => {
    const [pathName, setPathName] = useContext(userContext);
    return (
        <header className="header">
            <NavBar />
            {
                pathName ?
                    <div style={{ height: '65vh' }} className="d-flex justify-content-center align-items-center">
                        <p className="text-white display-4">{pathName}</p>
                    </div>
                    :
                    <JoinUs />
            }
        </header>
    );
};

export default Header;