import React from 'react';
import './Team.scss'
import logo from '../../../img/Rect12.svg'
import rect from '../../../img/Rect-11.svg'
import car from '../../../img/Rect13.svg'
import too from '../../../img/Rect14.svg'
import tool from '../../../img/Rect15.svg'
import study from '../../../img/Rect16.svg'
import {useLanguage} from "../../../components/Lang/LanguageContext";
const Team = () => {
    const {language} =useLanguage()
    const languageCard = {
        en :{
            miss:'Miss.Anushin oont ',
            top:'Our Team',
            mr:'mr.Vishmas s.',
            kadduu :'Miss.Tanisha kaduu ',
            ml:'Mr.KL Rahul',
            one:'Miss.Anushin oont',
            one1:'Mr.Aryan Singh '

        },
        ru :{
            miss :'Мисс.Анушин онт\n',
            top:'Наша команда\n',
            mr:'г-н Вишмас с.\n',
            kadduu: 'Мисс Таниша Кадуу\n',
            ml:'г-н К.Л. Рахул\n',
            one:'Мисс.Анушин онт\n',
            one1:'г-н Ариан Сингх\n'
        }
    }
    return (
        <div id='team'>
            <div className="container">
                <div className="team">
                    <h3>{languageCard[language].top}</h3>
                    <div className='team--title'>
                        <div className='team--title__block'>
                            <img src={rect} alt=""/>
                            <h3>{languageCard[language].miss}</h3>
                            <span>CEO & co-Founder</span>
                        </div>
                        <div className='team--title__block'>
                            <img src={logo} alt=""/>
                            <h3>{languageCard[language].mr}</h3>
                            <span>CEO & co-Founder</span>
                        </div>
                        <div className='team--title__block'>
                            <img src={car} alt=""/>
                            <h3>{languageCard[language].kadduu}</h3>
                            <span>VP Of Technology</span>
                        </div>
                        <div className='team--title__block'>
                            <img src={too} alt=""/>
                            <h3>{languageCard[language].ml}</h3>
                            <span>Head of design</span>
                        </div>
                        <div className='team--title__block'>
                            <img src={tool} alt=""/>
                            <h3>{languageCard[language].one}</h3>
                            <span>vP Of Finance</span>
                        </div>
                        <div className='team--title__block'>
                            <img src={study} alt=""/>
                            <h3>{languageCard[language].one1}</h3>
                            <span>Head of Marketing</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;
