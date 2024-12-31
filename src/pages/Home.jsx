import React from 'react';
import usePageTitle from "../hooks/usePageTitle";
import {ActualitySection, HeroTitle, ServiceSection} from "../components";
import backgroundImageHome from "../assets/images/background/bg.jpg";

const Home = () => {
    usePageTitle('Accueil');

    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <HeroTitle
                title="Bienvenu sur le site officiel de la Commune Urbaine d'Ambalavao"
                description="Découvrez notre histoire, nos projets, et nos richesses culturelles au cœur de la région Haute Matsiatra"
                backgroundImage={backgroundImageHome}
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