import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import {motion} from 'framer-motion';

const MunicipalCouncilSection = () => {
    const councilMembers = [
        {
            name: "Jean Rakotoarisoa",
            role: "Président du Conseil",
            commissions: "Finance, Urbanisme",
            mandat: "2020-2026"
        },
        {
            name: "Marie Razanadrakoto",
            role: "Vice-Présidente",
            commissions: "Education, Culture",
            mandat: "2020-2026"
        },
        {
            name: "Andry Ravelomanana",
            role: "Membre",
            commissions: "Sport, Jeunesse",
            mandat: "2020-2026"
        },
        {
            name: "Clara Rasoarimanana",
            role: "Membre",
            commissions: "Environnement, Santé",
            mandat: "2020-2026"
        },
        {
            name: "Paul Randrianarisoa",
            role: "Secrétaire",
            commissions: "Administration",
            mandat: "2020-2026"
        },
    ];

    return (
        <section className="bg-gradient-to-br from-gray-900 to-gray-800 py-16">
            <div className="max-w-6xl mx-auto px-4">
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.5}}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-[#228B22] mb-4">
                        Conseil Municipal
                    </h2>
                    <p className="text-gray-400">Mandat 2020-2026</p>
                </motion.div>

                <div className="overflow-hidden">
                    <div className="relative">
                        {councilMembers.map((member, index) => (
                            <motion.div
                                key={index}
                                initial={{opacity: 0, x: -50}}
                                whileInView={{opacity: 1, x: 0}}
                                transition={{duration: 0.5, delay: index * 0.1}}
                                className="relative"
                            >
                                <div
                                    className="group flex flex-col md:flex-row items-center gap-6 p-6 hover:bg-white/5 rounded-xl transition-all duration-300">
                                    {/* Numéro et Avatar */}
                                    <div className="flex items-center gap-4">
                                        <div
                                            className="w-8 h-8 flex items-center justify-center rounded-full bg-[#228B22]/20 text-[#228B22] font-semibold">
                                            {index + 1}
                                        </div>
                                        <div
                                            className="w-16 h-16 rounded-full bg-gradient-to-br from-[#228B22] to-[#228B22]/70 flex items-center justify-center shadow-lg">
                                            <PersonIcon className="text-white text-3xl"/>
                                        </div>
                                    </div>

                                    {/* Informations principales */}
                                    <div
                                        className="flex-1 flex flex-col md:flex-row items-center md:items-start gap-4 text-center md:text-left">
                                        <div className="flex-1">
                                            <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                                            <span
                                                className="inline-block bg-[#228B22]/10 text-[#228B22] px-3 py-1 rounded-full text-sm">
                                                {member.role}
                                            </span>
                                        </div>

                                        {/* Informations supplémentaires */}
                                        <div className="flex flex-col md:flex-row gap-6 text-gray-400 text-sm">
                                            <div className="flex items-center gap-2">
                                                <EmailIcon className="text-[#228B22]"/>
                                                <span>Commissions: {member.commissions}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <CalendarMonthIcon className="text-[#228B22]"/>
                                                <span>{member.mandat}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Ligne de séparation */}
                                {index < councilMembers.length - 1 && (
                                    <div
                                        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[95%] h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MunicipalCouncilSection;