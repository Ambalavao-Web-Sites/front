import React from 'react';
import {Link} from 'react-router-dom';

const HeroTitle = ({
                         title,
                         description,
                         buttons = [],
                         backgroundImage,
                         height = "h-[800px]",
                         overlayColor = "bg-black/50",
                         titleColor = "text-white",
                         descriptionColor = "text-gray-200",
                         primaryButtonColor = "bg-[#228B22]",
                         primaryButtonHoverColor = "hover:bg-[#1a6b1a]",
                         secondaryButtonColor = "bg-white",
                         secondaryButtonTextColor = "text-[#228B22]",
                         secondaryButtonHoverColor = "hover:bg-gray-100"
                     }) => {
    return (
        <section className={`relative ${height}`}>
            <div
                className={`absolute inset-0 ${overlayColor}`}
                style={backgroundImage ? {
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                } : {}}
            />
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
                <div className="space-y-6 text-center w-full">
                    {title && (
                        <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-center ${titleColor}`}>
                            {title}
                        </h1>
                    )}
                    {description && (
                        <p className={`text-xl max-w-2xl mx-auto text-center ${descriptionColor}`}>
                            {description}
                        </p>
                    )}
                    {buttons.length > 0 && (
                        <div className="flex flex-wrap gap-4 justify-center">
                            {buttons.map((button, index) => (
                                <Link
                                    key={index}
                                    to={button.path}
                                    className={`px-6 py-3 rounded-lg font-medium transition-colors duration-300 ${
                                        button.variant === 'primary'
                                            ? `${primaryButtonColor} ${primaryButtonHoverColor} text-white`
                                            : `${secondaryButtonColor} ${secondaryButtonTextColor} ${secondaryButtonHoverColor}`
                                    }`}
                                >
                                    {button.text}
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default HeroTitle;