import React from 'react';
import './home.css';
import Header from '../../components/header/Header';
import Section from '../../components/section/Section';

function Home() {
    return (
        <div>
           <Header/>
           <h1 className="tagline">Discover our exclusive watches</h1>
           <Section/>
        </div>
    )
} 

export default Home
