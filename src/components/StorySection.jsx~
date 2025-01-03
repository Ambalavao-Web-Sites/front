import React, {useState} from 'react';
import TimelineIcon from '@mui/icons-material/Timeline';
import Diversity2OutlinedIcon from '@mui/icons-material/Diversity2Outlined';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {motion} from 'framer-motion';

const StorySection = () => {
    const [activeItem, setActiveItem] = useState(null);

    const historyData = [
        {
            icon: <TimelineIcon className="text-4xl text-[#228B22]"/>,
            year: "1800s",
            title: "Fondation d'Ambalavao",
            description: "Établissement de la commune au cœur des hautes terres malgaches.",
            details: "Centre névralgique entre les hautes terres et le sud de Madagascar, Ambalavao s'est développée grâce à sa position stratégique."
        },
        {
            icon: <Diversity2OutlinedIcon className="text-4xl text-[#228B22]"/>,
            year: "1900s",
            title: "Développement Artisanal",
            description: "Émergence des ateliers traditionnels de papier Antaimoro.",
            details: "Les artisans locaux ont perfectionné la technique ancestrale de fabrication du papier Antaimoro, utilisant l'écorce du mûrier Avoha."
        },
        {
            icon: <AutoStoriesIcon className="text-4xl text-[#228B22]"/>,
            year: "Aujourd'hui",
            title: "Héritage Vivant",
            description: "Préservation active des traditions et tourisme culturel.",
            details: "La commune maintient son rôle de gardienne des savoirs traditionnels tout en s'adaptant aux enjeux contemporains."
        }
    ];

    return (
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-16">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-[#228B22] mb-16">
                    Notre Histoire
                </h2>
                <div className="relative">
                    {/* Timeline central line */}
                    <div
                        className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#228B22] via-[#228B22]/50 to-transparent"/>

                    <div className="space-y-16">
                        {historyData.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{opacity: 0, y: 20}}
                                whileInView={{opacity: 1, y: 0}}
                                transition={{duration: 0.5}}
                                viewport={{once: true}}
                                className={`relative flex flex-col ${
                                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                } items-start gap-8`}
                            >
                                {/* Timeline dot */}
                                <div
                                    className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-slate-900 border-4 border-[#228B22] transform -translate-x-1/2 z-10">
                                    <div className="absolute inset-0 bg-[#228B22]/20 rounded-full animate-ping"/>
                                </div>

                                {/* Content */}
                                <div className={`w-full md:w-1/2 ${
                                    index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                                } ml-12 md:ml-0`}>
                                    <div
                                        className="bg-slate-800/30 backdrop-blur-sm p-6 rounded-lg border border-slate-700 hover:border-[#228B22]/30 transition-all duration-300">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="bg-slate-900 p-2 rounded-lg">
                                                {item.icon}
                                            </div>
                                            <span
                                                className="bg-[#228B22]/10 text-[#228B22] px-3 py-1 rounded-full text-sm">
                                                {item.year}
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-2">
                                            {item.title}
                                        </h3>
                                        <p className="text-slate-300 mb-4">
                                            {item.description}
                                        </p>
                                        <button
                                            onClick={() => setActiveItem(activeItem === index ? null : index)}
                                            className="flex items-center gap-2 text-[#228B22] hover:text-[#228B22]/80 transition-colors"
                                        >
                                            <KeyboardArrowDownIcon
                                                className={`transform transition-transform duration-300 ${
                                                    activeItem === index ? 'rotate-180' : ''
                                                }`}
                                            />
                                            <span>{activeItem === index ? 'Voir moins' : 'En savoir plus'}</span>
                                        </button>
                                        <div className={`overflow-hidden transition-all duration-300 ${
                                            activeItem === index ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0'
                                        }`}>
                                            <p className="text-slate-400 border-l-2 border-[#228B22]/30 pl-4">
                                                {item.details}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StorySection;