import React from 'react';
import {HeroTitle} from "../components";
import HandshakeIcon from '@mui/icons-material/Handshake';
import BusinessIcon from '@mui/icons-material/Business';
import PublicIcon from '@mui/icons-material/Public';
import SchoolIcon from '@mui/icons-material/School';
import backgroundImageHome from "../assets/images/background/bg.jpg";

const Partners = () => {
    const partnerCategories = [
        {
            title: "Partenaires Institutionnels",
            icon: <PublicIcon className="w-8 h-8 text-white"/>,
            partners: [
                {
                    name: "Région Haute Matsiatra",
                    logo: "/images/region-logo.jpg",
                    description: "Collaboration étroite pour le développement régional et la mise en œuvre des projets d'envergure.",
                    website: "https://region-haute-matsiatra.mg"
                },
                {
                    name: "Ministère de la Décentralisation",
                    logo: "/images/ministere-logo.jpg",
                    description: "Appui institutionnel et technique pour le renforcement de la gouvernance locale.",
                    website: "https://decentralisation.gov.mg"
                }
            ]
        },
        {
            title: "Partenaires Techniques et Financiers",
            icon: <HandshakeIcon className="w-8 h-8 text-white"/>,
            partners: [
                {
                    name: "Union Européenne",
                    logo: "/images/eu-logo.jpg",
                    description: "Financement de projets d'infrastructure et de développement durable.",
                    website: "https://european-union.europa.eu"
                },
                {
                    name: "Banque Mondiale",
                    logo: "/images/worldbank-logo.jpg",
                    description: "Soutien aux projets de développement urbain et de réduction de la pauvreté.",
                    website: "https://worldbank.org"
                }
            ]
        },
        {
            title: "ONG et Associations",
            icon: <BusinessIcon className="w-8 h-8 text-white"/>,
            partners: [
                {
                    name: "CARE Madagascar",
                    logo: "/images/care-logo.jpg",
                    description: "Programmes de développement communautaire et d'autonomisation des femmes.",
                    website: "https://care.mg"
                },
                {
                    name: "WWF Madagascar",
                    logo: "/images/wwf-logo.jpg",
                    description: "Protection de l'environnement et promotion du développement durable.",
                    website: "https://wwf.mg"
                }
            ]
        },
        {
            title: "Partenaires Académiques",
            icon: <SchoolIcon className="w-8 h-8 text-white"/>,
            partners: [
                {
                    name: "Université de Fianarantsoa",
                    logo: "/images/univ-fianar-logo.jpg",
                    description: "Collaboration pour la recherche et le développement des compétences locales.",
                    website: "https://univ-fianar.mg"
                }
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            <HeroTitle
                title="Nos Partenaires"
                description="Découvrez les acteurs qui nous accompagnent dans le développement de notre commune"
                backgroundImage={backgroundImageHome}
                buttons={[
                    {text: "Devenir Partenaire", path: "/contact", variant: "primary"},
                    {text: "Voir nos projets", path: "/projets", variant: "secondary"}
                ]}
            />

            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-slate-900 mb-4">
                            Nos Partenaires de Développement
                        </h2>
                        <p className="text-lg text-slate-900 max-w-2xl mx-auto">
                            La commune d'Ambalavao travaille main dans la main avec des partenaires de confiance pour
                            réaliser ses objectifs de développement
                        </p>
                    </div>

                    <div className="space-y-24">
                        {partnerCategories.map((category, index) => (
                            <div key={index} className="relative">
                                <div className="flex items-center gap-4 mb-12">
                                    <div className="bg-[#228B22] p-4 rounded-full">
                                        {category.icon}
                                    </div>
                                    <h3 className="text-3xl font-bold text-slate-900">
                                        {category.title}
                                    </h3>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                                    {category.partners.map((partner, pIndex) => (
                                        <div key={pIndex} className="group">
                                            <div className="flex items-start space-x-8">
                                                <div
                                                    className="w-24 h-24 flex-shrink-0 rounded-full overflow-hidden border-4 border-[#228B22]/10 group-hover:border-[#228B22] transition-colors duration-300">
                                                    <img
                                                        src={partner.logo}
                                                        alt={`Logo ${partner.name}`}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                                <div className="flex-1">
                                                    <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#228B22] transition-colors duration-300">
                                                        {partner.name}
                                                    </h4>
                                                    <p className="text-slate-900/80 mb-4 leading-relaxed">
                                                        {partner.description}
                                                    </p>
                                                    <a
                                                        href={partner.website}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center text-[#228B22] hover:text-[#228B22]/80 font-medium transition-colors duration-300"
                                                    >
                                                        Visiter le site web
                                                        <span className="ml-2">→</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-24 relative">
                        <div className="bg-[#228B22] py-16 px-8 rounded-none">
                            <div className="max-w-3xl mx-auto text-center">
                                <h3 className="text-3xl font-bold text-white mb-4">
                                    Devenez Partenaire
                                </h3>
                                <p className="text-white/90 mb-8 text-lg">
                                    Vous souhaitez contribuer au développement de notre commune ?
                                    Nous sommes ouverts aux nouveaux partenariats.
                                </p>
                                <a
                                    href="/contact"
                                    className="inline-flex items-center px-8 py-4 bg-white text-[#228B22] font-bold rounded-none hover:bg-slate-100 transition-colors duration-300"
                                >
                                    Contactez-nous
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Partners;