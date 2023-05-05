import React from 'react';
import Header from './header';
import Hero from './hero';
import Services from './services';
import Pricing from './pricing';

function Landing() {
  return (
    <div style={{padding: '30px'}}>
        <Header />
        <Hero />
        <Services />
        <Pricing />
    </div>
  );
}

export default Landing;
