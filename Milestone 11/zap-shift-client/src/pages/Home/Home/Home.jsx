import React from 'react';
import Banner from '../Banner/Banner';
import Brands from '../Brands/Brands';
import Reviews from '../Reviews/Reviews';
import Coverage from '../../Coverage/Coverage';

const reviewsPromise = fetch('/reviews.json').then(res => res.json());
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Brands></Brands>
            <Reviews reviewsPromise={reviewsPromise}></Reviews>
            <Coverage></Coverage>
        </div>
    );
};

export default Home;