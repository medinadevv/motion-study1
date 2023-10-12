import React from "react";
import "../Flag/index.scss";
import amertica from "../../img/america.png";
import greatBritan from "../../img/griteBriten.png";
import germany from "../../img/germany.png";
import holland from "../../img/holland.png";
import ireland from "../../img/Ireland.png";
import spain from "../../img/Spain.png";
import italy from "../../img/Italy.png";
import canada from "../../img/canada.png";
import cyprus from "../../img/cyprus.png";
import China from "../../img/china.png";
import latvia from "../../img/latvia.png";
import { NavLink } from "react-router-dom";


const Flag = () => {
    return (
        <section id="flag">
            <div className="container">
                <h1>Choose the country</h1>
                <div className="flag">
                    <div className="flag--select">
                        <select>
                            <option value="#">Higher Education</option>
                            <option value="#">Secondary Education</option>
                            <option value="#">Higher Education</option>
                            <option value="#">language courses for youth</option>
                            <option value="#">chilren's language comps</option>
                        </select>
                        <select name="" id="">
                            <option value="#">Specialization</option>
                            <option value="#">IT Technologies</option>
                            <option value="#">Bisiness</option>
                            <option value="#">Medicine</option>
                            <option value="#">International Relationships</option>
                            <option value="#">Tourism</option>
                        </select>
                        <div className="flag--select__options">
                            <select name="" id="">
                                <option value="#">Сountries</option>
                                <option value="#">America</option>
                                <option value="#">Germany</option>
                                <option value="#">INDONESIA</option>
                                <option value="#">South Korea</option>
                            </select>
                        </div>
                    </div>
                    <div className="flag--block">
                        <NavLink to={"/America"}>
                            <div className="flag--block__one">
                                <img src={amertica} alt="img"/>
                                <h2>America</h2>
                            </div>
                        </NavLink>
                        <NavLink to={"/Great%20Britain"}>
                            <div className="flag--block__one">
                                <img src={greatBritan} alt="img"/>
                                <h2>Great Britain</h2>
                            </div>
                        </NavLink>
                        <NavLink to={"/Germany"}>
                            <div className="flag--block__one">
                                <img src={germany} alt="img"/>
                                <h2>Germany</h2>
                            </div>
                        </NavLink>
                        <NavLink to={"/Holland"}>
                            <div className="flag--block__one">
                                <img src={holland} alt="img"/>
                                <h2>Holland</h2>
                            </div>
                        </NavLink>
                        <NavLink to={"/Ireland"}>
                            <div className="flag--block__one">
                                <img src={ireland} alt="img"/>
                                <h2>Ireland</h2>
                            </div>
                        </NavLink>
                        <NavLink to={"/America"}>
                            <div className="flag--block__one">
                                <img src={spain} alt="img"/>
                                <h2>Spain</h2>
                            </div>
                        </NavLink>
                        <NavLink to={"/America"}>
                            <div className="flag--block__one">
                                <img src={italy} alt="img"/>
                                <h2>Italy</h2>
                            </div>
                        </NavLink>
                        <NavLink to={"/America"}>
                            <div className="flag--block__one">
                                <img src={canada} alt="img"/>
                                <h2>Canada</h2>
                            </div>
                        </NavLink>
                        <NavLink to={"/America"}>
                            <div className="flag--block__one">
                                <img src={cyprus} alt="img"/>
                                <h2>Cyprus</h2>
                            </div>
                        </NavLink>
                        <NavLink to={"/China"}>
                            <div className="flag--block__one">
                                <img src={China} alt="img"/>
                                <h2>China</h2>
                            </div>
                        </NavLink>
                        <NavLink to={"/Latvia"}>
                            <div className="flag--block__one">
                                <img src={latvia} alt="img"/>
                                <h2>Latvia</h2>
                            </div>
                        </NavLink>
                        <NavLink to={"/Latvia"}>
                            <div className="flag--block__one">
                                <img src={latvia} alt="img"/>
                                <h2>Latvia</h2>
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Flag;
