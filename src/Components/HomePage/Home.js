import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import FeatureProducts from './FeaturedProduct/FeatureProducts';

const Home = () => {
    return (
        <div>
        <Header/>
        <FeatureProducts></FeatureProducts>
            <Footer></Footer>
        </div>
    );
};

export default Home;