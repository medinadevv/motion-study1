import React from "react";
import './index.scss'
import {CiLocationOn} from "react-icons/ci";
import irishUniversitiesData from "../FaceBack/ireland";
import {NavLink} from "react-router-dom";
import {getPrREC} from "../stor/reducer/Action/action";
import {useDispatch} from "react-redux";


const Ireland = () => {
    const dispatch = useDispatch()
    return (
        <section id="ireland">
            <div className="container">
                <h1>United Stated</h1>
                <div className="select">
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
                    <div className="select--options">
                        <select name="" id="">
                            <option value="#">Сountries</option>
                            <option value="#">America</option>
                            <option value="#">Germany</option>
                            <option value="#">INDONESIA</option>
                            <option value="#">South Korea</option>
                        </select>
                    </div>
                </div>
                <br/>

                {
                    irishUniversitiesData.map((el) => (
                        <div className="country" onClick={()=> dispatch(getPrREC(el))} >
                            <div className="country__cards">
                                <div className="country__cards--card">
                                    <img src={el.img} alt=""/>
                                    <div className="country__cards--card__one1">
                                        <h4>Name:</h4>
                                        <NavLink to="/tabs"><h3>{el.name}</h3></NavLink>
                                    </div>
                                    <div className="country__cards--card__one2">
                                        <div className="country__cards--card__one2--icon">
                                            <h4>Location</h4><CiLocationOn/>
                                        </div>
                                        <h3>{el.location}</h3>
                                    </div>
                                    <div className="country__cards--card__one3">
                                        <h4>Age:</h4>
                                        <h3>{el.Age}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    );
};

export default Ireland;
