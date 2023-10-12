import React from 'react';
import img1 from '../../img/img11.png'
import book from '../../img/book.svg'
import book1 from '../../img/img33.svg'
import book4 from '../../img/img44.svg'
import img2 from '../../img/img22.svg'

import './index.scss'
import {useLanguage} from "../../components/Lang/LanguageContext";

const This = () => {
    const {language} = useLanguage()
    const languageCard = {
        en :{
            this: 'This is why we are best from others',
            paragr: 'We provide full support at all stages of preparation, including assistance in filing documents and preparing for an interview. Contact us  and start your journey to higher education abroad!',
            part: '1000+ Partners',
            top1 :'over 1000+ partners worldwide\n' + ' enter the best universities in the world',
            ex: 'Experts',
            we : 'We are experts in our field. help you reach new heights',
            time :'Time',
            will : 'we will help you save your time and nerves when applying to the best university.',
            prices :'AFFORDABLE PRICES',
            for : 'reasonable prices will always please you. sign up for a consultation',
        },
        ru : {
           this: 'Вот почему мы лучшее от других',
            paragr: 'Мы оказываем полную поддержку на всех этапах подготовки, включая помощь в подаче документов и подготовке к собеседованию. Свяжитесь с нами и начните свой путь к высшему образованию за рубежом!',
            part: '1000+ Партнеров',
            top1 :'более 1000+ партнеров по всему миру\n' + 'поступить в лучшие университеты мира',
            ex:'Эксперты',
            we : 'Мы являемся экспертами в своей области. помочь вам достичь новых высот',
            time:'Время',
            will :'мы поможем Вам сэкономить Ваше время и нервы при поступлении в лучший университет.',
            prices: 'ДОСТУПНЫЕ ЦЕНЫ',
            for : 'доступные цены всегда вас порадуют. записаться на консультацию\n'
        }
    }
    return (
        <div id="this">
            <div className="container">
                <div className="this">
                    <div className="this--title">
                      <h1>{languageCard[language].this}</h1>
                        <p>{languageCard[language].paragr}</p>
                        <img src={img1} alt=""/>
                    </div>

                    <div className="this--block">
                        <div className="this--block__power">
                            <div className="this--block__power--pow">
                                <div className="this--block__power--pow__pows">
                                    <img src={book} alt=""/>
                                    <h2>{languageCard[language].part}</h2>
                                    <h3>{languageCard[language].top1}</h3>
                                </div>
                                <div className="this--block__power--pow__pows">
                                    <img src={img2} alt=""/>
                                    <h2>{languageCard[language].ex}</h2>
                                    <h3>{languageCard[language].we}</h3>
                                </div>
                            </div>
                            <div className="this--block__power--pow">
                                <div className="this--block__power--pow__pows">
                                    <img src={book1} alt=""/>
                                    <h2>{languageCard[language].time}</h2>
                                    <h3>{languageCard[language].will}</h3>
                                </div>
                                <div className="this--block__power--pow__pows">
                                    <img src={book4} alt=""/>
                                    <h2>{languageCard[language].prices}</h2>
                                    <h3>{languageCard[language].for}</h3>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default This;