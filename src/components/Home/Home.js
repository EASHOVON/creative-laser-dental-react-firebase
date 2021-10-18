import React from 'react';
import Banner from './Banner/Banner';
import Header from './Header/Header';
import './Home.css';
import Services from './Services/Services';

const Home = () =>
{
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Services></Services>
        </div>
    );
};

export default Home; <h2>This is Home Page</h2>