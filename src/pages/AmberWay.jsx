import React from 'react';
import { motion } from 'framer-motion';

const AmberWay = () => {
    const pillars = [
        {
            title: 'Craftsmanship with Heart',
            desc: 'Every blend is a labor of love — carefully distilled, matured, and perfected with passion.',
            icon: '❤️'
        },
        {
            title: 'Innovation that Inspires',
            desc: 'We reimagine tradition through modern artistry, crafting spirits that speak to today’s generation.',
            icon: '💡'
        },
        {
            title: 'Sustainability in Spirit',
            desc: 'From eco-conscious sourcing to waste-free distillation, we raise our glass to the planet.',
            icon: '🌱'
        },
        {
            title: 'People & Purpose',
            desc: 'Behind every bottle is a team of dreamers, distillers, and doers who pour pride into every drop.',
            icon: '🤝'
        }
    ];

    return (
        <div className="bg-dark min-h-screen pt-20">
            <SEO
                title="The Amber Way"
                description="Discover the four pillars of Amber Spirits: Authenticity, Mastery, Balance, and Evolution."
            />
            {/* Hero Section */}
            <div className="container mx-auto px-6 py-20">
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <h1 className="text-4xl md:text-6xl font-serif text-white mb-8">The Amber Way</h1>
                    <p className="text-xl text-gold italic mb-8">Where Craft Meets Character.</p>
                    <p className="text-gray-300 text-lg leading-relaxed">
                        Every bottle of Amber Spirits is a story of balance — between art and science, tradition and modernity, patience and precision. Our way isn’t just how we make spirits — it’s how we honour them.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {pillars.map((pillar, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-dark-surface p-10 rounded-lg border border-white/5 hover:border-gold/30 transition-all group"
                        >
                            <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">{pillar.icon}</div>
                            <h3 className="text-2xl font-serif text-white mb-4 group-hover:text-gold transition-colors">{pillar.title}</h3>
                            <p className="text-gray-400 text-lg">{pillar.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AmberWay;
