import React from 'react';
import This from "../../Page/This/This";
import Exams from "../Exams/Exams";
import Slider from "../Slider/Slider";
import Message from "../submit/submit";
import Hero from "../../Page/Hero/Hero";


const HeroPage = () => {
    return (
        <div>
            <Hero/>
            <This/>
            <Exams/>
            <Slider/>
            <Message/>
        </div>
    );
};

export default HeroPage;