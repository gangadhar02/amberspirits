import React from 'react';
import Hero from '../components/Home/Hero';
import Intro from '../components/Home/Intro';
import FeaturedBrands from '../components/Home/FeaturedBrands';
import { Link } from 'react-router-dom';

import SEO from '../components/SEO';

const Home = () => {
    return (
        <div className="bg-dark min-h-screen">
            <SEO
                title="Home"
                description="Welcome to Amber Spirits. Discover our premium collection of artisanal whiskies and brandies, crafted with passion and precision."
            />
            <Hero />
            <Intro />
            <FeaturedBrands />

            {/* CTA Strip */}
            <section className="py-20 bg-gold text-dark text-center">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">Spread the Happiness.</h2>
                    <p className="text-xl md:text-2xl font-medium mb-8">Chug & Cheer.</p>
                    <Link
                        to="/contact"
                        className="inline-block px-10 py-4 bg-dark text-white font-bold uppercase tracking-widest hover:bg-white hover:text-dark transition-colors duration-300"
                    >
                        Get in Touch
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
