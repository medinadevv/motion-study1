import React from 'react';
import './index.scss'
import img from './img/Vector.svg'
import {AiFillInstagram, AiFillYoutube} from "react-icons/ai";
import {BiLogoTelegram} from "react-icons/bi";

const Footer = () => {
    return (
        <div id={"footer"}>
            <div className="container">
                <center>
            <div className="footer text-white ">
                <div className="">
                    <img src={img} alt="alt"/>
                </div>
                <div className="footer__text flex justify-between w-1/3">
                    <h3>Home</h3>
                    <h3>About Us</h3>
                    <h3>Study Abroad</h3>
                    <h3>Contacts</h3>
                </div>
                <div className="flex justify-between w-[110px]">
                    <AiFillYoutube className={"footer__icon"}/>
                    <BiLogoTelegram className={"footer__icon"}/>
                    <AiFillInstagram className={"footer__icon"}/>
                </div>
            </div>
                <hr className={"footer__hr text-white"}/>
                <center>
                    <h4 className={"text-white "}>c 2023 Motion Study LLC</h4>
                </center>
                </center>
            </div>
        </div>
    );
};

export default Footer;