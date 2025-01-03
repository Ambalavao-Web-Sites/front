import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PlaceIcon from '@mui/icons-material/Place';
import {motion} from 'framer-motion';
import electedImage from "../assets/images/default/elected.jpg";

const ElectedOfficialsSection = () => {
    const officials = [
        {
            name: "Jean Rakotoarisoa",
            title: "Maire",
            photo: electedImage,
            email: "jean.rakoto@ambalavao.mg",
            bureau: "Hôtel de ville - 1er étage"
        },
        {
            name: "Marie Razanadrakoto",
            title: "Adjoint au Maire",
            photo: electedImage,
            email: "marie.razana@ambalavao.mg",
            bureau: "Hôtel de ville - RDC"
        },
        {
            name: "Andry Ravelomanana",
            title: "Conseiller Municipal",
            photo: electedImage,
            email: "andry.ravelo@ambalavao.mg",
            bureau: "Annexe Municipal"
        },
    ];

    return (
        <section className="bg-gradient-to-br from-gray-900 to-gray-800 py-20">
            <div className="max-w-6xl mx-auto px-4">
                <motion.h2
                    className="text-4xl font-bold text-center text-[#228B22] mb-16"
                    initial={{opacity: 0, y: -20}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.5}}
                >
                    Les Élus de la Commune
                </motion.h2>
                <div className="space-y-16">
                    {officials.map((official, index) => (
                        <motion.div
                            key={index}
                            initial={{opacity: 0, x: index % 2 === 0 ? -50 : 50}}
                            whileInView={{opacity: 1, x: 0}}
                            transition={{duration: 0.5, delay: index * 0.2}}
                            className={`flex flex-col ${
                                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                            } items-center gap-8 relative`}
                        >
                            {/* Photo Section */}
                            <div className="relative w-48 h-48 group">
                                <div
                                    className="absolute inset-0 bg-[#228B22]/20 rounded-full blur-xl transform group-hover:scale-110 transition-transform duration-300"></div>
                                <div
                                    className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-[#228B22] shadow-xl">
                                    {official.photo ? (
                                        <img
                                            src={official.photo}
                                            alt={official.name}
                                            className="w-full h-full object-fill"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                                            <PersonIcon style={{fontSize: '4rem'}} className="text-[#228B22]"/>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Info Section */}
                            <div className={`flex-1 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}`}>
                                <div className="space-y-4">
                                    <div>
                                        <h3 className="text-3xl font-bold text-white mb-2">
                                            {official.name}
                                        </h3>
                                        <span
                                            className="inline-block bg-[#228B22]/10 text-[#228B22] px-4 py-1 rounded-full text-sm">
                                            {official.title}
                                        </span>
                                    </div>
                                    <div className="space-y-2 text-gray-300">
                                        <div className="flex items-center gap-3">
                                            <EmailIcon className="text-[#228B22]"/>
                                            <span>{official.email}</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <PlaceIcon className="text-[#228B22]"/>
                                            <span>{official.bureau}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {index < officials.length - 1 && (
                                <div
                                    className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-8 w-px h-16 bg-gradient-to-b from-[#228B22]/50 to-transparent"></div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ElectedOfficialsSection;