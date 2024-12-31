import React from 'react';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';

const ServiceCard = ({title, items, icon}) => (
    <div
        className="bg-white p-4 sm:p-6 lg:p-8 rounded-xl shadow hover:shadow-lg transition-all duration-300 border border-gray-100">
        <div className="flex justify-center mb-4 sm:mb-6">
            {icon}
        </div>
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">{title}</h3>
        <ul className="text-sm sm:text-base text-gray-600 space-y-2 sm:space-y-3 mb-4 sm:mb-6">
            {items.map((item, index) => (
                <li key={index} className="flex items-start">
                    <span className="w-2 h-2 mt-2 mr-2 rounded-full bg-green-500 flex-shrink-0"></span>
                    <span>{item}</span>
                </li>
            ))}
        </ul>
        <button
            className="w-full py-2 sm:py-3 px-4 sm:px-6 bg-green-100 text-green-800 rounded-lg hover:bg-green-200 transition-all duration-300 font-medium text-sm sm:text-base">
            En savoir plus
        </button>
    </div>
);

const ServicesSection = () => {
    const services = [
        {
            title: "Services Administratifs",
            icon: <SupportAgentOutlinedIcon className="h-12 w-12 sm:h-16 sm:w-16 text-green-600"/>,
            items: [
                "Délivrance des actes de naissance, mariage, décès",
                "Gestion des livrets de famille",
                "Service de légalisation de documents et certificats divers"
            ]
        },
        {
            title: "Urbanisme et aménagement",
            icon: <SupportAgentOutlinedIcon className="h-12 w-12 sm:h-16 sm:w-16 text-green-600"/>,
            items: [
                "Demande de permis de construire",
                "Régularisation des titres fonciers",
                "Déclarations d'occupation des sols"
            ]
        },
        {
            title: "Autres services",
            icon: <SupportAgentOutlinedIcon className="h-12 w-12 sm:h-16 sm:w-16 text-green-600"/>,
            items: [
                "Certificat de résidence",
                "Déclaration de changement d'adresse"
            ]
        }
    ];

    return (
        <section className="py-8 sm:py-12 lg:py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 lg:mb-8">
                    Nos services pour vous accompagner au quotidien
                </h2>
                <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-8 sm:mb-12 lg:mb-16 max-w-3xl">
                    La Commune Urbaine d'Ambalaevo met à votre disposition une gamme de services adaptés à vos besoins.
                    Que ce soit pour vos démarches administratives, vos projets professionnels, ou votre quotidien, nos
                    équipes sont à votre écoute.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;