import React from 'react';
import { motion } from 'framer-motion';
import ClosingSection from '../components/Layout/ClosingSection';

import SEO from '../components/SEO';

const News = () => {
    const newsItems = [
        {
            date: 'October 2023',
            title: 'Amber Spirits Wins Gold at International Spirits Challenge',
            excerpt: 'Our signature Grape House Supreme Brandy has been recognized for its exceptional quality and taste on the global stage.',
        },
        {
            date: 'August 2023',
            title: 'Sustainability Initiatives at Amber Distillery',
            excerpt: 'Commitment to the environment is at our core. Read about our new water conservation and renewable energy projects.',
        },
    ];

    return (
        <div className="bg-dark min-h-screen pt-20">
            <SEO
                title="News & Media"
                description="Stay updated with the latest news, awards, and stories from Amber Spirits."
            />
            {/* Hero */}
            <section className="py-20 container mx-auto px-6 text-center">
                <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">In the News</h1>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                    Latest updates, awards, and stories from the world of Amber Spirits.
                </p>
            </section>

            {/* News Grid */}
            <section className="py-20 bg-dark-surface">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {newsItems.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-dark p-8 rounded border border-white/5 hover:border-gold/30 transition-colors group"
                            >
                                <div className="text-gold text-sm font-bold uppercase tracking-widest mb-4">{item.date}</div>
                                <h3 className="text-2xl font-serif text-white mb-4 group-hover:text-gold transition-colors">{item.title}</h3>
                                <p className="text-gray-400 mb-6">{item.excerpt}</p>
                                <button className="text-white text-sm font-bold uppercase tracking-wider hover:text-gold transition-colors">
                                    Read Full Story →
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <ClosingSection />
        </div>
    );
};

export default News;
