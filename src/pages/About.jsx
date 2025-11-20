import React from 'react';
import { motion } from 'framer-motion';

import SEO from '../components/SEO';

const About = () => {
    return (
        <div className="bg-dark min-h-screen pt-20">
            <SEO
                title="About Us"
                description="Learn about the legacy of Amber Spirits, our commitment to quality, and the passion that drives our craft."
            />
            {/* Hero */}
            <section className="relative py-32 bg-dark-surface overflow-hidden">
                <div className="absolute inset-0 bg-[url('/amber_spirits_hero_bg.png')] bg-cover bg-center opacity-20"></div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl font-serif text-white mb-6"
                    >
                        More Than Spirits. <br />
                        <span className="text-gold">A Legacy in Every Bottle.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl text-gray-300 max-w-3xl mx-auto"
                    >
                        Born in Hyderabad, Amber Spirits Pvt. Ltd. represents the soul of Indian craftsmanship — distilled through passion, perfected through time.
                    </motion.p>
                </div>
            </section>

            {/* Brand Story */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center gap-16">
                        <div className="w-full md:w-1/2">
                            <div className="relative">
                                <div className="absolute -inset-4 border border-gold/30 rounded-lg transform rotate-3"></div>
                                <img
                                    src="/amber_spirits_hero_bg.png" // Reusing hero for now as placeholder
                                    alt="Amber Spirits Story"
                                    className="relative rounded-lg shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
                                />
                            </div>
                        </div>
                        <div className="w-full md:w-1/2">
                            <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">Crafted with Purpose. Poured with Pride.</h2>
                            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                                <p>
                                    Amber Spirits began with a simple belief — that a great spirit brings people together. What started as a vision to create world-class liquors in the heart of Telangana has become one of the region’s fastest-growing names in fine spirits.
                                </p>
                                <p>
                                    We combine innovation and tradition to craft experiences that celebrate the art of good living. From the warm richness of our brandies to the bold smoothness of our whiskies, each bottle is a reflection of passion, precision, and pride.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Promise */}
            <section className="py-24 bg-dark-surface">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-serif text-white mb-16">Authentic. Artisanal. Amber.</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { title: 'Finest Ingredients', desc: 'We select only premium grapes and grains for our spirits.' },
                            { title: 'Crafted with Care', desc: 'Each batch is refined through meticulous distillation and aging.' },
                            { title: 'Consistent Character', desc: 'The taste of Amber remains unmistakably true, sip after sip.' },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="p-8 border border-white/10 hover:border-gold/50 transition-colors rounded-lg bg-dark"
                            >
                                <h3 className="text-xl font-serif text-gold mb-4">{item.title}</h3>
                                <p className="text-gray-400">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
