import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Intro = () => {
    return (
        <section className="py-24 bg-dark-surface relative overflow-hidden">
            <div className="container mx-auto px-6 text-center max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl md:text-5xl font-serif text-gold mb-8">
                        The Spirit of Craftsmanship. <br />
                        The Taste of Celebration.
                    </h2>
                    <p className="text-gray-400 text-lg leading-relaxed mb-10">
                        At Amber Spirits, every bottle is a symphony of passion and precision. We blend the finest ingredients, time-honoured methods, and a relentless pursuit of perfection — creating spirits that don’t just taste remarkable, but <span className="text-white italic">feel unforgettable.</span>
                    </p>
                    <p className="text-gray-400 text-lg leading-relaxed mb-12">
                        Our blends are born from tradition, matured with care, and perfected for those who believe every toast should tell a story.
                    </p>
                    <Link
                        to="/about"
                        className="inline-block border-b border-gold text-gold hover:text-white hover:border-white transition-colors pb-1 text-lg tracking-wide"
                    >
                        Learn More →
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default Intro;
