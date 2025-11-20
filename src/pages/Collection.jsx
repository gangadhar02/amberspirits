import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { brands } from '../data/brands';

import SEO from '../components/SEO';

const Collection = () => {
    const [selectedBrand, setSelectedBrand] = useState(null);

    return (
        <div className="bg-dark min-h-screen pt-20">
            <SEO
                title="Our Collection"
                description="Explore our exquisite range of spirits, including Grape House, Amber Horse, and Hyderabad Blue."
            />
            <div className="container mx-auto px-6 py-12">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">Our Collection</h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        A portfolio of distinctive spirits — crafted for every celebration, every story, every soul.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {brands.map((brand) => (
                        <motion.div
                            key={brand.id}
                            layoutId={`card-${brand.id}`}
                            onClick={() => setSelectedBrand(brand)}
                            className="bg-dark-surface rounded-lg overflow-hidden cursor-pointer group hover:shadow-2xl hover:shadow-gold/10 transition-all border border-white/5 hover:border-gold/30"
                        >
                            <div className="h-80 bg-dark-elevated flex items-center justify-center p-8 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gold/5 group-hover:bg-gold/10 transition-colors"></div>
                                <motion.img
                                    layoutId={`image-${brand.id}`}
                                    src={brand.image}
                                    alt={brand.name}
                                    className="h-full object-contain drop-shadow-xl group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-8">
                                <h3 className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: brand.color }}>{brand.tagline}</h3>
                                <h2 className="text-2xl font-serif text-white mb-4 group-hover:text-gold transition-colors">{brand.name}</h2>
                                <p className="text-gray-400 text-sm line-clamp-3">{brand.description}</p>
                                <div className="mt-6 text-white font-bold text-sm uppercase tracking-wider group-hover:translate-x-2 transition-transform">
                                    View Details →
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Modal */}
                <AnimatePresence>
                    {selectedBrand && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedBrand(null)}
                                className="absolute inset-0 bg-black/90 backdrop-blur-sm"
                            ></motion.div>

                            <motion.div
                                layoutId={`card-${selectedBrand.id}`}
                                className="bg-dark-surface w-full max-w-6xl max-h-full overflow-y-auto rounded-xl relative z-10 border border-white/10 shadow-2xl"
                            >
                                <button
                                    onClick={() => setSelectedBrand(null)}
                                    className="absolute top-6 right-6 text-white/50 hover:text-white z-20"
                                >
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>

                                <div className="flex flex-col lg:flex-row">
                                    {/* Image Side */}
                                    <div className="w-full lg:w-1/3 bg-dark-elevated p-10 flex items-center justify-center relative">
                                        <motion.img
                                            layoutId={`image-${selectedBrand.id}`}
                                            src={selectedBrand.image}
                                            alt={selectedBrand.name}
                                            className="max-h-[60vh] object-contain drop-shadow-2xl"
                                        />
                                    </div>

                                    {/* Content Side */}
                                    <div className="w-full lg:w-2/3 p-8 md:p-12">
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.2 }}
                                        >
                                            <h3 className="font-bold uppercase tracking-widest mb-2" style={{ color: selectedBrand.color }}>{selectedBrand.tagline}</h3>
                                            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">{selectedBrand.name}</h2>
                                            <h4 className="text-2xl text-gray-300 font-serif mb-8 italic">{selectedBrand.heroHeadline}</h4>

                                            <div className="space-y-6 text-gray-400 text-lg leading-relaxed mb-10">
                                                <p>{selectedBrand.description}</p>
                                                <p>{selectedBrand.subDescription}</p>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                                                <div className="bg-dark p-6 rounded border border-white/5">
                                                    <h5 className="font-serif text-lg mb-4" style={{ color: selectedBrand.color }}>Craft Notes</h5>
                                                    <ul className="space-y-2">
                                                        {selectedBrand.craftNotes.map((note, i) => (
                                                            <li key={i} className="text-gray-400 text-sm flex items-start">
                                                                <span className="mr-2" style={{ color: selectedBrand.color }}>•</span> {note}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                <div className="bg-dark p-6 rounded border border-white/5">
                                                    <h5 className="font-serif text-lg mb-4" style={{ color: selectedBrand.color }}>Ideal Serve</h5>
                                                    <p className="text-gray-400 text-sm">{selectedBrand.idealServe}</p>
                                                </div>
                                            </div>

                                            <button
                                                className="px-8 py-4 text-dark font-bold uppercase tracking-widest hover:bg-white transition-colors w-full md:w-auto"
                                                style={{ backgroundColor: selectedBrand.color }}
                                            >
                                                {selectedBrand.cta}
                                            </button>
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Collection;
