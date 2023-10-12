import React from 'react';
import './index.scss'
import {useLanguage} from "../Lang/LanguageContext";

const Slider = () => {
    const {language} = useLanguage()
    const languageCard = {
        en :{
            slider:'Video testimonials from our students'
        },
        ru : {
            slider: 'Видеоотзывы наших учеников\n'
        }
    }
    return (
        <div id='Slider'>
            <div className="container">
                <div className='Slider'>
                    <h1>{languageCard[language].slider}</h1>
                    <div className='Slider--block'>

                        <div className='Slider--block--one'>

                            <div className='Slider--block--one--text'>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/QXVzmzhxWWc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                        </div>
                        <div className='Slider--block--one'>

                            <div className='Slider--block--one--text'>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/66aG5P0kQpU"
                                        title="YouTube video player" frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen></iframe>                            </div>
                        </div>
                        <div className='Slider--block--one'>

                            <div className='Slider--block--one--text'>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/fy-bd5AC-Ms"
                                        title="YouTube video player" frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen></iframe>                            </div>
                        </div>
                        <div className='Slider--block--one'>

                            <div className='Slider--block--one--text'>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/MiebCHmiszs"
                                        title="YouTube video player" frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen></iframe>                            </div>
                        </div>
                        <div className='Slider--block--one'>
                            <div className='Slider--block--one--text'>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/bKD-D3pCWrA"
                                        title="YouTube video player" frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen></iframe>                            </div>
                        </div>
                        <div className='Slider--block--one'>
                            <div className='Slider--block--one--text'>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/moHa5xIOZ18"
                                        title="YouTube video player" frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen></iframe>                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;