import React from 'react';
import usePageTitle from "../hooks/usePageTitle";
import {
    ElectedOfficialsSection,
    GeographySection,
    HeroTitle,
    MunicipalCouncilSection,
    StorySection
} from "../components";
import backgroundImageHome from "../assets/images/background/bg.jpg";

const Township = () => {
    usePageTitle('Les élus');

    return (
        <main className="relative w-full min-h-screen overflow-x-hidden">
            <div className="flex flex-col w-full">
                {/* Hero Section */}
                <section className="w-full">
                    <HeroTitle
                        title="Bienvenue à Ambalavao"
                        description="Découvrez l'histoire, la géographie, les élus et le conseil municipal de la commune urbaine d'Ambalavao."
                        backgroundImage={backgroundImageHome}
                    />
                </section>

                {/* Story Section */}
                <section className="w-full">
                    <StorySection/>
                </section>

                {/* Geography Section */}
                <section className="w-full">
                    <GeographySection/>
                </section>

                {/* Elected Official Section */}
                <section className="w-full">
                    <ElectedOfficialsSection/>
                </section>

                {/* Municipal Council Section */}
                <section className="w-full">
                    <MunicipalCouncilSection/>
                </section>
            </div>
        </main>
    );
};

export default Township;