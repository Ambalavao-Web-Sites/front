import React, {useState} from 'react';
import TerrainIcon from '@mui/icons-material/Terrain';
import PlaceIcon from '@mui/icons-material/Place';
import PublicIcon from '@mui/icons-material/Public';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {motion} from 'framer-motion';

const GeographySection = () => {
    const [activeSection, setActiveSection] = useState(null);

    const geographyData = [
        {
            icon: <TerrainIcon className="text-5xl text-[#228B22]"/>,
            title: "Paysages et Reliefs",
            description: "Ambalavao est entourée par le massif de l'Andringitra, offrant des paysages spectaculaires entre montagnes et vallées.",
            details: "Le relief varié crée un microclimat unique, propice à une végétation diverse et à l'agriculture traditionnelle."
        },
        {
            icon: <PlaceIcon className="text-5xl text-[#228B22]"/>,
            title: "Localisation",
            description: "Située dans la région Haute Matsiatra, Ambalavao est un carrefour entre les hauts plateaux et la côte Est de Madagascar.",
            details: "Cette position stratégique en fait un point de passage important pour le commerce et les échanges culturels."
        },
        {
            icon: <PublicIcon className="text-5xl text-[#228B22]"/>,
            title: "Richesses Naturelles",
            description: "La commune est proche de parcs naturels, tels que le parc national d'Andringitra, abritant une biodiversité unique.",
            details: "La région abrite des espèces endémiques et des écosystèmes remarquables qui attirent chercheurs et écotouristes."
        },
    ];

    return (
        <section className="bg-white py-16">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-[#228B22] mb-16">
                    Géographie de la Commune
                </h2>
                <div className="space-y-24">
                    {geographyData.map((item, index) => (
                        <motion.div
                            key={index}
                            className="relative"
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{duration: 0.5}}
                            viewport={{once: true}}
                        >
                            <div className={`flex flex-col md:flex-row items-center gap-8 ${
                                index % 2 === 0 ? '' : 'md:flex-row-reverse'
                            }`}>
                                <div className="w-full md:w-1/3 flex justify-center">
                                    <div className="relative">
                                        <div
                                            className="absolute inset-0 bg-[#228B22]/10 rounded-full blur-xl transform -translate-y-4"></div>
                                        <div className="relative bg-white p-8 rounded-full shadow-lg">
                                            {item.icon}
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full md:w-2/3 space-y-4">
                                    <h3 className="text-3xl font-bold text-gray-800">
                                        {item.title}
                                    </h3>
                                    <p className="text-lg text-gray-600">
                                        {item.description}
                                    </p>
                                    <button
                                        onClick={() => setActiveSection(activeSection === index ? null : index)}
                                        className="flex items-center gap-2 text-[#228B22] hover:text-[#228B22]/80 transition-colors"
                                    >
                                        <KeyboardArrowDownIcon className={`transform transition-transform ${
                                            activeSection === index ? 'rotate-180' : ''
                                        }`}/>
                                        <span>{activeSection === index ? 'Voir moins' : 'En savoir plus'}</span>
                                    </button>
                                    <div className={`overflow-hidden transition-all duration-300 ${
                                        activeSection === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                                    }`}>
                                        <p className="text-gray-500 border-l-4 border-[#228B22] pl-4 mt-4">
                                            {item.details}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {index < geographyData.length - 1 && (
                                <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-12">
                                    <div className="h-16 w-px bg-gradient-to-b from-[#228B22] to-transparent"></div>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GeographySection;