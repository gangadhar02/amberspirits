import React from 'react';
import { motion } from 'framer-motion';

import SEO from '../components/SEO';

const Craft = () => {
    const steps = [
        {
            number: '01',
            title: 'Selection',
            desc: 'Only the best ingredients make the cut — quality begins at the source.',
        },
        {
            number: '02',
            title: 'Distillation',
            desc: 'Our distillers blend science and instinct to capture the perfect spirit.',
        },
        {
            number: '03',
            title: 'Maturation',
            desc: 'Every blend is given time to breathe, evolve, and reveal its full character.',
        },
        {
            number: '04',
            title: 'Quality Assurance',
            desc: 'Each bottle undergoes rigorous checks to ensure consistency and excellence.',
        },
    ];

    return (
        <div className="bg-dark min-h-screen pt-10">
            <SEO
                title="Craft & Process"
                description="From grain to glass, witness the meticulous distillation process that defines Amber Spirits."
            />
            {/* Hero */}
            <section className="py-20 container mx-auto px-6 text-center">
                <h1 className="text-4xl md:text-6xl font-serif text-white mb-8">From Grain to Glass — The Art of Amber.</h1>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                    True craftsmanship begins with care — and at Amber Spirits, every step in our process is guided by precision, patience, and pride. From selecting the finest grapes and grains to mastering the balance of flavours, our journey is about transforming the raw into the remarkable.
                </p>
            </section>

            {/* Process Steps */}
            <section className="py-20 bg-dark-surface">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="relative p-8 border-l border-gold/30 hover:border-gold transition-colors"
                            >
                                <div className="text-6xl font-serif text-white/5 absolute top-4 right-4">{step.number}</div>
                                <h3 className="text-2xl font-serif text-gold mb-4 relative z-10">{step.title}</h3>
                                <p className="text-gray-400 relative z-10">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Image/Video Placeholder */}
            <section className="py-20 container mx-auto px-6">
                <div className="w-full bg-dark-elevated rounded-lg overflow-hidden border border-white/5 shadow-2xl shadow-gold/10">
                    <img
                        src="/process.jpeg"
                        alt="Amber Spirits Distillation Process"
                        className="w-full h-auto object-cover"
                    />
                </div>
            </section>
        </div>
    );
};

export default Craft;
