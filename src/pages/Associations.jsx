import React from 'react';
import {HeroTitle} from "../components";
import CelebrationIcon from '@mui/icons-material/Celebration';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import PeopleIcon from '@mui/icons-material/People';
import backgroundImageHome from "../assets/images/background/bg.jpg";

const Associations = () => {
    const associationCategories = [
        {
            title: "Associations Culturelles",
            icon: <TheaterComedyIcon className="w-8 h-8 text-white"/>,
            associations: [
                {
                    name: "Vakoka Malagasy",
                    description: "Promotion et préservation du patrimoine culturel betsileo",
                    activities: ["Danses traditionnelles", "Artisanat local", "Festivals culturels"],
                    members: 45,
                    contact: "034 50 123 45",
                    image: "/images/culture-association.jpg"
                },
                {
                    name: "Tranobe Vakoka",
                    description: "Transmission des valeurs traditionnelles aux jeunes générations",
                    activities: ["Contes et légendes", "Musique traditionnelle", "Cérémonies traditionnelles"],
                    members: 30,
                    contact: "034 50 123 46",
                    image: "/images/tradition-association.jpg"
                }
            ]
        },
        {
            title: "Associations Sportives",
            icon: <SportsBasketballIcon className="w-8 h-8 text-white"/>,
            associations: [
                {
                    name: "AS Ambalavao",
                    description: "Club de football local formant les jeunes talents",
                    activities: ["Entraînements", "Compétitions régionales", "Formation des jeunes"],
                    members: 75,
                    contact: "034 50 123 47",
                    image: "/images/football-association.jpg"
                },
                {
                    name: "Club Basket Ambalavao",
                    description: "Promotion du basketball dans la commune",
                    activities: ["Tournois inter-quartiers", "École de basket", "Championnats"],
                    members: 40,
                    contact: "034 50 123 48",
                    image: "/images/basket-association.jpg"
                }
            ]
        },
        {
            title: "Associations Agricoles",
            icon: <AgricultureIcon className="w-8 h-8 text-white"/>,
            associations: [
                {
                    name: "Tantsaha Miray",
                    description: "Coopérative des agriculteurs locaux",
                    activities: ["Formation agricole", "Vente groupée", "Partage de matériel"],
                    members: 120,
                    contact: "034 50 123 49",
                    image: "/images/agriculture-association.jpg"
                }
            ]
        },
        {
            title: "Associations de Quartier",
            icon: <PeopleIcon className="w-8 h-8 text-white"/>,
            associations: [
                {
                    name: "Fikambanana Tsara Fandrosoana",
                    description: "Association pour le développement du quartier Est",
                    activities: ["Projets communautaires", "Entraide sociale", "Activités de quartier"],
                    members: 85,
                    contact: "034 50 123 50",
                    image: "/images/quartier-association.jpg"
                }
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            <HeroTitle
                title="Associations d'Ambalavao"
                description="Découvrez la richesse de notre vie associative et rejoignez une communauté dynamique"
                backgroundImage={backgroundImageHome}
                buttons={[
                    {text: "Créer une association", path: "/creer-association", variant: "primary"},
                    {text: "Agenda des événements", path: "/evenements", variant: "secondary"}
                ]}
            />

            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-slate-900 mb-4">
                            La Vie Associative
                        </h2>
                        <p className="text-lg text-slate-900 max-w-2xl mx-auto">
                            Les associations sont le cœur battant de notre commune,
                            contribuant à son dynamisme social, culturel et économique
                        </p>
                    </div>

                    <div className="space-y-24">
                        {associationCategories.map((category, index) => (
                            <div key={index}>
                                <div className="flex items-center gap-4 mb-12">
                                    <div className="bg-[#228B22] p-4 rounded-full">
                                        {category.icon}
                                    </div>
                                    <h3 className="text-3xl font-bold text-slate-900">
                                        {category.title}
                                    </h3>
                                </div>

                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                                    {category.associations.map((association, aIndex) => (
                                        <div key={aIndex} className="group space-y-6">
                                            <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                                                <img
                                                    src={association.image}
                                                    alt={association.name}
                                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                                                />
                                            </div>
                                            <div>
                                                <h4 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-[#228B22] transition-colors duration-300">
                                                    {association.name}
                                                </h4>
                                                <p className="text-slate-900/80 mb-4">
                                                    {association.description}
                                                </p>
                                                <div className="space-y-4">
                                                    <div>
                                                        <h5 className="font-semibold text-slate-900 mb-2">
                                                            Activités principales
                                                        </h5>
                                                        <ul className="list-none space-y-1">
                                                            {association.activities.map((activity, actIndex) => (
                                                                <li key={actIndex} className="text-slate-900/80">
                                                                    • {activity}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                    <div className="flex items-center justify-between">
                                                        <span className="text-slate-900">
                                                            <strong>{association.members}</strong> membres
                                                        </span>
                                                        <span className="text-[#228B22]">
                                                            {association.contact}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-24">
                        <div className="bg-[#228B22] py-16 px-8">
                            <div className="max-w-3xl mx-auto text-center">
                                <CelebrationIcon className="w-12 h-12 text-white mb-6"/>
                                <h3 className="text-3xl font-bold text-white mb-4">
                                    Envie de créer votre association ?
                                </h3>
                                <p className="text-white/90 mb-8 text-lg">
                                    Nous vous accompagnons dans vos démarches de création
                                    et vous mettons en relation avec d'autres associations.
                                </p>
                                <a
                                    href="/creer-association"
                                    className="inline-flex items-center px-8 py-4 bg-white text-[#228B22] font-bold hover:bg-slate-100 transition-colors duration-300"
                                >
                                    Lancer votre association
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Associations;