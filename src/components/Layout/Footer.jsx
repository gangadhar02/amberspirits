import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-dark-surface pt-20 pb-10 border-t border-white/10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
                    {/* Brand */}
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-serif text-gold mb-4">AMBER SPIRITS</h3>
                        <p className="text-gray-400 leading-relaxed">
                            Crafted for Celebration. Designed for the Bold.
                            <br />
                            Spread the Happiness. Chug & Cheer.
                        </p>
                    </div>

                    {/* Links */}
                    <div className="text-center">
                        <h4 className="text-lg font-serif text-white mb-6">Quick Links</h4>
                        <ul className="space-y-4">
                            <li><Link to="/about" className="text-gray-400 hover:text-gold transition-colors">About Us</Link></li>
                            <li><Link to="/collection" className="text-gray-400 hover:text-gold transition-colors">Our Collection</Link></li>
                            <li><Link to="/craft" className="text-gray-400 hover:text-gold transition-colors">Craft & Process</Link></li>
                            <li><Link to="/leadership" className="text-gray-400 hover:text-gold transition-colors">Leadership</Link></li>
                            <li><Link to="/news" className="text-gray-400 hover:text-gold transition-colors">News & Media</Link></li>
                            <li><Link to="/contact" className="text-gray-400 hover:text-gold transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="text-center md:text-right">
                        <h4 className="text-lg font-serif text-white mb-6">Contact Us</h4>
                        <p className="text-gray-400 mb-2">Plot No. 95, Kakteeya Hills</p>
                        <p className="text-gray-400 mb-2">Madhapur, Hyderabad</p>
                        <p className="text-gold mt-4">1800 599 2428</p>
                        <p className="text-gold">amberspirits@outlook.com</p>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Amber Spirits Pvt. Ltd. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
