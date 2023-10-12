import React, {useState} from 'react';
import './index.scss'
import des from "../../img/des.svg"
import calendar from "../../img/calendar.svg"
import studies from "../../img/studies.svg"
import {IoEllipse} from "react-icons/io5";
import {IoLogoWhatsapp} from "react-icons/io";
import {AiFillInstagram} from "react-icons/ai";
import {ImTelegram} from "react-icons/im";
import {useSelector} from "react-redux";
import University from "../University/University";
import tabs1 from "../../img/tabs1.svg"
import tabs2 from "../../img/tabs2.svg"
import tabs3 from "../../img/tabs3.svg"
import tabs4 from "../../img/tabs4.svg"
import tabs5 from "../../img/tabs5.svg"
import tabs6 from "../../img/tabs6.svg"


const Tabs = () => {
    const [toggleState, setToggleState] = useState(1);
    const {product} = useSelector(s => s.ProductReducer)

    return (
        <div id="tabs">
            <University/>
            <div className="container">
                <div className="tabs">
                    <div className="tabs--bloc">
                        <div className="tabs--bloc__description"
                             style={{borderBottom: toggleState === 1 ? "2px solid red" : ''}}
                             onClick={() => setToggleState(1)}
                        >Description
                        </div>
                        <div className="tabs--bloc__cost"
                             style={{borderBottom: toggleState === 2 ? "2px solid red" : ''}}
                             onClick={() => setToggleState(2)}
                        >Cost
                        </div>
                        <div className="tabs--bloc__photo"
                             style={{borderBottom: toggleState === 3 ? "2px solid red" : ''}}
                             onClick={() => setToggleState(3)}
                        >Photo
                        </div>
                    </div>
                    <div className="tabs--content">
                        <div className="tabs--content__active" style={{display: toggleState === 1 ? 'block' : 'none'}}>
                            <div className="tabs--content__active">
                                <div className="tabs--content__active--nike">
                                    <div className="tabs--content__active--nike__nomer">
                                        <img src={des} alt=""/>
                                        <div className="tabs--content__active--nike__nomer--a">
                                            <h1>landscape design</h1>
                                            <h2>University of Fashion and Design</h2>
                                        </div>
                                    </div>
                                    <div className="tabs--content__active--nike__duration">
                                        <h1>Nominal duration: </h1>
                                        <h2>
                                            4.5 years(240 ECTS)
                                        </h2>
                                    </div>
                                    <div className="tabs--content__active--nike__awards">
                                        <h1>Awards: <span></span></h1>
                                        <h2><span>B.Sc.</span> (Professional Bachelor’s degree in Business Management,
                                            qualification: Business Manager or E-Business Manager)</h2>
                                    </div>
                                    <div className="tabs--content__active--nike__hover">
                                        <h1>Tuition fee:</h1>
                                        <p>€1,400 <span>per semester</span>
                                            US$1,502.87</p>
                                    </div>
                                    <div className="tabs--content__active--nike__hovers">
                                        <h1>Application fee:</h1>
                                        <p>€120 one-time
                                            US$128.83 <span></span></p>
                                    </div>
                                    <div className="tabs--content__active--nike__love">
                                        <h1>Registration fee: <span></span></h1>
                                        <div className="tabs--content__active--nike__love--loves">
                                            <h6>US$150 one-time </h6>
                                            <p> You need to choose student status: </p>
                                            <p>Base – 150 USD </p>
                                            <p>Standard – 500 USD </p>
                                            <p>VIP – 900 USD</p>
                                        </div>

                                    </div>
                                    <div className="tabs--content__active--nike__fee">
                                        <h1>Tuition fee:</h1>
                                        <div className="tabs--content__active--nike__fee--no">
                                            <h5>High school / secondary education (or higher)</h5>
                                            <p> Completed Secondary Education ( 12 years, in some countries 11
                                                years) <span></span></p>
                                        </div>
                                    </div>
                                    <div className="tabs--content__active--nike__tea">
                                        <h1>Entry qualication: </h1>
                                        <p> The entry qualification documents are accepted in the following languages:
                                            English / Lithuanian.Often you can get a suitable transcript from your
                                            school.
                                            If this is not the case, you will need official translations along with
                                            verified
                                            copies of the original.</p>

                                    </div>
                                </div>
                                <div className="tabs--content__active--nikes">
                                    <div className="tabs--content__active--nikes__not">
                                        <h1>Apply Now!!! <span>Fall semester 2023</span></h1>
                                    </div>
                                    <div className="tabs--content__active--nikes__nots">
                                        <img src={calendar} alt=""/>
                                        <div className="tabs--content__active--nikes__nots--calendar">
                                            <h5> Pre-deadline </h5>
                                            <h6>20 Jun 2023, 23:59:59Eastern European Time </h6>
                                            <p>Please ask your manager in Baltic Center about correct deadline for your
                                                country</p>
                                        </div>

                                    </div>
                                    <div className="tabs--content__active--nikes__cat">
                                        <img src={calendar} alt=""/>
                                        <div className="tabs--content__active--nikes__cat--cast">
                                            <h5>Application deadline</h5>
                                            <h6>31 Aug 2023, 23:59:59Eastern European Time</h6>
                                            <p>Autumn Intake</p>
                                        </div>

                                    </div>
                                    <div className="tabs--content__active--nikes__study">
                                        <img src={studies} alt=""/>
                                        <div className="tabs--content__active--nikes__study--studies">
                                            <h5>Studies commence</h5>
                                            <p>4 Sept 2023</p>
                                        </div>
                                    </div>
                                    <div className="tabs--content__active--nikes__now">
                                        <h1>Apply Now!!! <span>  Spring semester 2023</span></h1>
                                    </div>
                                    <div className="tabs--content__active--nikes__eli">
                                        <div className="tabs--content__active--nikes__eli--tu">
                                            <h1>!</h1>
                                            <IoEllipse style={{fill: '#FF6A6A', fontSize: '24px'}}/>
                                        </div>
                                        <h3>Application period has ended</h3>
                                    </div>
                                    <div className="tabs--content__active--nikes__sr">
                                        <img src={studies} alt=""/>
                                        <div className="tabs--content__active--nikes__sr--srs">
                                            <h5>Studies commence</h5>
                                            <p>6 Feb 2023</p>
                                        </div>
                                    </div>
                                    <div className="tabs--content__active--nikes__list">

                                    </div>
                                    <div className="tabs--content__active--nikes__wat">
                                        <h1>Share on:</h1>
                                        <IoLogoWhatsapp
                                            style={{fontSize: '26px', marginRight: '30px', color: '#0DC143'}}/>
                                        <AiFillInstagram style={{fontSize: '29px', marginRight: '30px', color: 'red'}}/>
                                        <ImTelegram style={{fontSize: '26px', marginRight: '30px', color: '#419FD9'}}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{display: toggleState === 2 ? 'block' : 'none'}}>
                            <div className="tabs--content__actives">
                                <h1><span>The cost of studying </span>at the Istituto Europeo di Design for the
                                    2023-2024 academic year:
                                </h1>
                                <p>– Academic year (training) – from 1,566,000 rubles.</p>
                                <p>– Academic year (accommodation) – from 870,000 rubles.</p>
                            </div>

                        </div>
                        <div style={{display: toggleState === 3 ? 'block' : 'none'}}>


                            <div className="tabs--content__photo">
                                    <img className="tabs--bloc__photo--photo1__xaxa" src={tabs1} alt=""/>
                                    <img className="tabs--bloc__photo--photo1__xaxa" src={tabs2} alt=""/>
                                    <img className="tabs--bloc__photo--photo1__xaxa" src={tabs3} alt=""/>
                                    <img className="tabs--bloc__photo--photo2__xaxa" src={tabs4} alt=""/>
                                    <img className="tabs--bloc__photo--photo2__xaxa" src={tabs5} alt=""/>
                                    <img className="tabs--bloc__photo--photo2__xaxa" src={tabs6} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tabs;
