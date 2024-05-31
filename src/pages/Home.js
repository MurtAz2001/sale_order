import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';

const Home = () => {
    return (
        <div>
            <Outlet />
        </div>
    );
};

export default Home;
