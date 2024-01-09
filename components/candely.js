import React, { useEffect } from 'react';
import Head from 'next/head';

const Candely = () => {
    useEffect(() => {
        // Dynamically load the Calendly script
        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        script.onload = () => {
            if (window.Calendly) {
                Calendly.initBadgeWidget({ 
                    url: 'https://calendly.com/fnupriyesh/30min', 
                    text: 'Schedule time with me', 
                    color: 'rgb(20 184 166)', 
                    textColor: 'rgb(31 41 55)', 
                    branding: true ,
                    font: 'Roboto',
                });
            }
        };
        document.body.appendChild(script);
    }, []);

    return (
        <div>
            <Head>
                <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
            </Head>
            {/* Other component content */}
        </div>
    );
}

export default Candely;
