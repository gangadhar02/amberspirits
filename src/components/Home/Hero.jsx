import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/amber_spirits_hero_bg.png"
                    alt="Amber Spirits Hero"
                    className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-dark/30 via-dark/50 to-dark"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight"
                >
                    Crafted for Celebration. <br />
                    <span className="text-gold">Designed for the Bold.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
                >
                    From timeless whiskies to iconic brandies, Amber Spirits crafts more than liquor — we create experiences that elevate every moment.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.1 }}
                    className="flex flex-col md:flex-row justify-center gap-6"
                >
                    <Link
                        to="/collection"
                        className="px-8 py-4 bg-gold text-dark font-bold uppercase tracking-widest hover:bg-white transition-colors duration-300"
                    >
                        Explore Our Collection
                    </Link>
                    <Link
                        to="/about"
                        className="px-8 py-4 border border-white text-white font-bold uppercase tracking-widest hover:bg-white hover:text-dark transition-colors duration-300"
                    >
                        Discover Our Story
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
