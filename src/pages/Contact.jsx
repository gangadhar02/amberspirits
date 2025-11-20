import React from 'react';
import { motion } from 'framer-motion';

import SEO from '../components/SEO';

const Contact = () => {
    return (
        <div className="bg-dark min-h-screen pt-20">
            <SEO
                title="Contact Us"
                description="Get in touch with Amber Spirits. We'd love to hear from you."
            />
            <div className="container mx-auto px-6 py-12">
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Info */}
                    <div className="w-full lg:w-1/2">
                        <h1 className="text-4xl md:text-6xl font-serif text-white mb-8">Let’s Raise a Glass Together.</h1>
                        <p className="text-xl text-gray-300 mb-12">
                            For partnerships, distribution, or collaborations, we’re just a message away.
                        </p>

                        <div className="space-y-8">
                            <div>
                                <h3 className="text-gold font-serif text-xl mb-2">Visit Us</h3>
                                <p className="text-gray-400">
                                    Amber Spirits Pvt. Ltd.<br />
                                    Plot No. 95, Kakteeya Hills, Road No. 2,<br />
                                    Madhapur, Hyderabad, Telangana – 500081
                                </p>
                            </div>
                            <div>
                                <h3 className="text-gold font-serif text-xl mb-2">Call Us</h3>
                                <p className="text-gray-400">1800 599 2428</p>
                            </div>
                            <div>
                                <h3 className="text-gold font-serif text-xl mb-2">Email Us</h3>
                                <a href="mailto:amberspirits@outlook.com" className="text-gray-400 hover:text-white transition-colors">
                                    amberspirits@outlook.com
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="w-full lg:w-1/2">
                        <motion.form
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-dark-surface p-8 md:p-12 rounded-lg border border-white/5"
                        >
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-gray-400 text-sm uppercase tracking-wider mb-2">Name</label>
                                    <input
                                        type="text"
                                        className="w-full bg-dark border border-white/10 rounded p-4 text-white focus:border-gold focus:outline-none transition-colors"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-400 text-sm uppercase tracking-wider mb-2">Email</label>
                                    <input
                                        type="email"
                                        className="w-full bg-dark border border-white/10 rounded p-4 text-white focus:border-gold focus:outline-none transition-colors"
                                        placeholder="your@email.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-400 text-sm uppercase tracking-wider mb-2">Message</label>
                                    <textarea
                                        rows="4"
                                        className="w-full bg-dark border border-white/10 rounded p-4 text-white focus:border-gold focus:outline-none transition-colors"
                                        placeholder="How can we help you?"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full py-4 bg-gold text-dark font-bold uppercase tracking-widest hover:bg-white transition-colors"
                                >
                                    Send Message
                                </button>
                            </div>
                        </motion.form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
