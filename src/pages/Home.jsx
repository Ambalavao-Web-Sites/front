import React from 'react';
import usePageTitle from "../hooks/usePageTitle";
import {Link} from 'react-router-dom';
import {ActualitySection, HeroTitle, ServiceSection} from "../components";

const Home = () => {
    usePageTitle('Accueil');

    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <HeroTitle
                title="Bienvenu sur le site officiel de la Commune Urbaine d'Ambalavao"
                description="Découvrez notre histoire, nos projets, et nos richesses culturelles au cœur de la région Haute Matsiatra"
                backgroundImage="../assets/images/background/bg.jpg"
                buttons={[
                    {text: "Présentation", path: "/commune", variant: "primary"},
                    {text: "Actualités", path: "/actualites", variant: "secondary"}
                ]}
            />

            {/* Features Section */}
            <ServiceSection />

            {/* News Section */}
            <ActualitySection />
        </div>
    );
};

export default Home;