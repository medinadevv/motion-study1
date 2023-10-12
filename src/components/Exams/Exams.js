import React from "react";
import Rectangle from "../../img/girle.png";
import Frame from "../../img/boy.svg";
import './index.scss'
import {NavLink} from "react-router-dom";
import {useLanguage} from "../Lang/LanguageContext";

function Exams() {
    const {language} = useLanguage()
    const languageCard = {
        en: {
            exam:'Exams',
            br :'Exams are tests that assess a person\'s knowledge, skills, aptitude,\n' +
                '                        or other qualifications in a specific subject or area of study. They\n' +
                '                        are used to evaluate academic performance.',
            engilsh : 'cambrige English exams',
            your : 'Your path to learning English, step by step.',
            you : ' Cambridge English Qualifications are in-depth exams that make\n' +
                '                                    learning English enjoyable, effective and rewarding. Our\n' +
                '                                    qualifications are based on research into effective teaching\n' +
                '                                    and learning.',
            more : 'Discover more',
            aptis :'Aptis',
            chool :'Choose Aptis for your assessment needs',
            ptis :'ptis is a computer basedtest which provides fast' +
                '                                        results reliably marked by our exsaminest.'
        },
        ru : {
            exam: 'Экзамены\n',
            br:'Экзамены – это тесты, которые оценивают знания, навыки, способности,\n' +
                '                        или другие квалификации по конкретному предмету или области обучения. Они\n' +
                '                        используются для оценки успеваемости.',
            engilsh: 'Кембриджские экзамены по английскому языку',
            your :'Ваш путь к изучению английского языка шаг за шагом.\n',
            you: 'Cambridge English Qualifications — это углубленные экзамены, которые позволяют\n' +
                '                                    изучение английского языка приятное, эффективное и полезное. Наш\n' +
                '                                    квалификации основаны на исследованиях эффективного преподавания\n' +
                '                                    и обучение.\n',
            more: "Открой для себя больше\n",
            aptis: 'aptis: ',
            chool:'Выберите Aptis для ваших потребностей в оценке\n',
            ptis: '\n' +
                'ptis — это компьютерный тест, который позволяет быстро' +
                '                                        результаты, достоверно отмеченные нашими экспертами.'
        }
    }
    return (
        <div id="exams">
            <div className="container">
                <div className="exams">
                    <h1>{languageCard[language].exam}</h1>
                    <p>
                        {languageCard[language].br}
                    </p>
                    <div className="exams--big">
                        <div className="exams--big__one">
                            <img src={Rectangle} alt="img"/>
                            <div className="exams--big__one--text">
                                <h2>{languageCard[language].engilsh}</h2>
                                <h3>{languageCard[language].your}</h3>
                                <h5>
                                    {languageCard[language].you}
                                </h5>
                                <NavLink to="/cambridge">
                                    <h4>{languageCard[language].more}</h4>
                                </NavLink>
                            </div>
                        </div>
                        <div className="exams--big__two">
                            <div className="exams--big__two--block">
                                <NavLink to={"/artis"}>
                                    <img src={Frame} alt="img"/>
                                </NavLink>
                                <div className="exams--big__two--block__text">
                                    <div className="exams--big__two--block__text--mini">
                                        <h5>{languageCard[language].aptis}</h5>
                                    </div>
                                    <h3>
                                        {languageCard[language].chool}
                                    </h3>
                                    <h2>
                                        {languageCard[language].ptis}
                                    </h2>
                                </div>
                            </div>
                            <div className="exams--big__two--block">
                                <NavLink to={"/ielts"}>
                                    <img src={Frame} alt="img"/>

                                </NavLink>
                                <div className="exams--big__two--block__text">
                                    <div className="exams--big__two--block__text--mini">
                                        <h5>{languageCard[language].aptis}</h5>
                                    </div>
                                    <h3>
                                        {languageCard[language].chool}
                                    </h3>
                                    <h2>
                                        {languageCard[language].ptis}
                                    </h2>
                                </div>
                            </div>
                            <div className="exams--big__two--block">
                                <NavLink to={"/other"}>
                                    <img src={Frame} alt="img"/>
                                </NavLink>
                                <div className="exams--big__two--block__text">
                                    <div className="exams--big__two--block__text--mini">
                                        <h5>{languageCard[language].aptis}</h5>
                                    </div>
                                    <h3>
                                        {languageCard[language].chool}
                                    </h3>
                                    <h2>
                                        {languageCard[language].ptis}
                                    </h2>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Exams;