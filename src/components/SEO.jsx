import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords }) => {
    const siteTitle = "Amber Spirits";
    const defaultDescription = "Amber Spirits - Crafting premium spirits with a legacy of excellence. Discover our collection of fine whiskies and brandies.";
    const defaultKeywords = "Amber Spirits, Premium Whisky, Brandy, Distillery, Craft Spirits, Luxury Drinks";

    return (
        <Helmet>
            <title>{title ? `${title} | ${siteTitle}` : siteTitle}</title>
            <meta name="description" content={description || defaultDescription} />
            <meta name="keywords" content={keywords || defaultKeywords} />
            <meta property="og:title" content={title ? `${title} | ${siteTitle}` : siteTitle} />
            <meta property="og:description" content={description || defaultDescription} />
            <meta property="og:type" content="website" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title ? `${title} | ${siteTitle}` : siteTitle} />
            <meta name="twitter:description" content={description || defaultDescription} />
        </Helmet>
    );
};

export default SEO;
