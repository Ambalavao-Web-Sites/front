import React from 'react';
import usePageTitle from "../hooks/usePageTitle";
import {ElectedOfficialsSection, GeographySection, HeroTitle, StorySection} from "../components";
import backgroundImageHome from "../assets/images/background/bg.jpg";

const Township = () => {
    usePageTitle('Accueil');

    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <HeroTitle
                title="Bienvenue à Ambalavao"
                description="Découvrez l'histoire, la géographie, les élus et le conseil municipal de la commune urbaine d'Ambalavao."
                backgroundImage={backgroundImageHome}
            />

            {/*Story Section*/}
            <StorySection/>

            {/*Geography Section*/}
            <GeographySection />

            {/*Elected Official Section*/}
            <ElectedOfficialsSection />
        </div>
    );
};

export default Township;