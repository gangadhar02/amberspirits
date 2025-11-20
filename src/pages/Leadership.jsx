import React from 'react';
import { motion } from 'framer-motion';
import ClosingSection from '../components/Layout/ClosingSection';

import SEO from '../components/SEO';

const Leadership = () => {
    const leaders = [
        {
            name: 'Leader Name',
            title: 'Founder & CEO',
            image: '/amber_spirits_bottle_placeholder.png', // Placeholder
            bio: 'A visionary leader with decades of experience in the spirits industry, driving Amber Spirits towards new horizons of excellence and innovation.',
        },
        {
            name: 'Leader Name',
            title: 'Master Blender',
            image: '/amber_spirits_bottle_placeholder.png', // Placeholder
            bio: 'The artist behind our blends, combining science and intuition to craft spirits that define character and quality.',
        },
        {
            name: 'Leader Name',
            title: 'Head of Operations',
            image: '/amber_spirits_bottle_placeholder.png', // Placeholder
            bio: 'Ensuring that every bottle that leaves our distillery meets the highest standards of perfection and consistency.',
        },
    ];

    return (
        <div className="bg-dark min-h-screen pt-20">
            <SEO
                title="Leadership"
                description="Meet the visionaries guiding Amber Spirits towards new horizons of excellence."
            />
            {/* Hero */}
            <section className="py-20 container mx-auto px-6 text-center">
                <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">Visionary Leadership</h1>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                    Guiding our legacy with passion, purpose, and a commitment to excellence.
                </p>
            </section>

            {/* Leaders Grid */}
            <section className="py-20 bg-dark-surface">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {leaders.map((leader, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="text-center group"
                            >
                                <div className="w-64 h-64 mx-auto mb-8 rounded-full overflow-hidden border-4 border-white/5 group-hover:border-gold transition-colors">
                                    <img
                                        src={leader.image}
                                        alt={leader.name}
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                    />
                                </div>
                                <h3 className="text-2xl font-serif text-white mb-2">{leader.name}</h3>
                                <h4 className="text-gold uppercase tracking-widest text-sm mb-4">{leader.title}</h4>
                                <p className="text-gray-400 leading-relaxed">{leader.bio}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <ClosingSection />
        </div>
    );
};

export default Leadership;
