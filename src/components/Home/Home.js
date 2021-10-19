import React from 'react';
import About from './About/About';
import Banner from './Banner/Banner';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import './Home.css';
import Services from './Services/Services';
import Specialty from './Specialty/Specialty';

const Home = () =>
{
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <About></About>
            <Specialty></Specialty>
            <Services></Services>
            <Footer></Footer>
        </div>
    );
};

export default Home; <h2>This is Home Page</h2>