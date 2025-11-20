import React from 'react';
import { Link } from 'react-router-dom';

const ClosingSection = () => {
    return (
        <section className="py-20 bg-dark-surface border-t border-white/5 text-center">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">
                    Every Spirit Has a Story. <br />
                    <span className="text-gold">Every Story Begins with Amber.</span>
                </h2>
                <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-10">
                    From innovation to tradition, from grain to glass — every Amber spirit is a celebration of craftsmanship, character, and connection. Whether you savour it neat or share it with company, you’re not just raising a glass — you’re raising a legacy.
                </p>
                <div className="flex flex-col md:flex-row justify-center gap-6">
                    <Link
                        to="/collection"
                        className="px-8 py-3 bg-gold text-dark font-bold uppercase tracking-widest hover:bg-white transition-colors"
                    >
                        Explore All Brands
                    </Link>
                    <Link
                        to="/craft"
                        className="px-8 py-3 bg-transparent border border-gold text-gold font-bold uppercase tracking-widest hover:bg-gold hover:text-dark transition-colors"
                    >
                        Learn About Our Craft
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ClosingSection;
