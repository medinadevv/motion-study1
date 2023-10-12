import React, {useEffect, useState} from 'react';
import logo1 from '../../img/motionLogo.svg'
import {NavLink, useNavigate} from "react-router-dom";
import './index.scss'
import {BiSearch} from "react-icons/bi";
import {RiMenu3Fill} from "react-icons/ri";
import {GrFormClose} from "react-icons/gr"
import {FaTelegramPlane} from "react-icons/fa"
import {AiFillInstagram} from "react-icons/ai"
import {BsTelephoneXFill} from "react-icons/bs"
import {MdEmail} from "react-icons/md"
import {Search} from "./Search/Search";
import {useLanguage} from "../Lang/LanguageContext";


const Header = () => {
    const {language, changeLanguage} = useLanguage()
    const [dashed1, setDashed1] = useState(0)
    const [isBurgerOpen, setIsBurgerOpen] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [activeBurgerMenuItem, setActiveBurgerMenuItem] = useState(null);
    const [redDotPosition, setRedDotPosition] = useState(0);
    const [searchCard, setSearchCard] = useState(false)
    const [searchBlock, setSearchBlock] = useState(false)
    const [value, setValue] = useState('1')
    const [name,setName]=useState("")

    const nav = useNavigate()
    const translate = {
        en : {
           home: 'Home',
            about: 'About Us',
            study: 'Study abroad',
            contact: 'Contact',
        },
        ru : {
           home: 'Дом',
            about: 'O нас',
            study: 'Учеба за границей',
            contact: 'Контакт',
        }

    }

    const filter = Search.filter((item) => item.name.toLowerCase().includes(value) || item.name.toUpperCase().includes(value))
    const handleResize = () => {
        setWindowWidth(window.innerWidth);
        if (window.innerWidth > 768) {
            setIsBurgerOpen(false);
        }
    };
    function getSearch(el) {
        setName(el.name)
        nav(`/${el.name}`) && setValue("")
        setSearchBlock(true)
    }
    function getEmptySearch(e) {
        setSearchBlock(false)
        setValue("")
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    console.log("searchBlock",searchBlock)
    console.log("name",name)

    return (
        <>
            <div id="header">
                <div className="container">
                    <div className="header">
                        <div className="header--title">
                            <img src={logo1} alt=""/>
                        </div>
                        <div style={{display: dashed1 === 1 ? 'block' : 'none'}}
                             className="red"></div>
                        <div style={{display: dashed1 === 2 ? 'block' : 'none'}}
                             className="red1"></div>
                        <div style={{display: dashed1 === 3 ? 'block' : 'none'}}
                             className="red2"></div>
                        <div style={{display: dashed1 === 4 ? 'block' : 'none'}}
                             className="red3"></div>

                        <div className="header--nav1"
                             style={{display: isBurgerOpen ? 'block' : 'none'}}>
                            <div className="header--nav1__navs1"
                                 onClick={() => setIsBurgerOpen(false)}>
                                <NavLink to="/" onClick={() => setRedDotPosition(1)}>
                                    {translate[language].home} {redDotPosition === 1 &&
                                    <div className="red-dot"></div>}
                                </NavLink>
                            </div>
                            <div className="header--nav1__about"
                                 onClick={() => setIsBurgerOpen(false)}>
                                <NavLink to="/aboutUs" onClick={() => setRedDotPosition(2)}>
                                    {translate[language].about} {redDotPosition === 2 &&
                                    <div className="red-dot"></div>}
                                </NavLink>
                            </div>
                            <div className="header--nav1__study"
                                 onClick={() => setIsBurgerOpen(false)}>
                                <NavLink to="/studyAbroad" onClick={() => setRedDotPosition(3)}>
                                    {translate[language].study} {redDotPosition === 3 &&
                                    <div className="red-dot"></div>}
                                </NavLink>
                            </div>
                            <div className="header--nav1__contact"
                                 onClick={() => setIsBurgerOpen(false)}>
                                <a onClick={() => {
                                    setRedDotPosition(4);
                                    window.scroll(0, 3100);
                                }}>
                                    {translate[language].contact} {redDotPosition === 4 &&
                                    window.scroll(0, 3300)
                                }}>
                                   <span> Contacts </span>{redDotPosition === 4 &&
                                    <div className="red-dot"></div>}
                                </a>
                            </div>

                            <div className="header--nav1__language1">
                                <h3>EN</h3>
                                <h3>RU</h3>
                                <h3>KG</h3>
                            </div>

                            <div className="header--nav1__icon">
                                <h3><FaTelegramPlane/></h3>
                                <h3><AiFillInstagram/></h3>
                                <h3><BsTelephoneXFill/></h3>
                                <h3><MdEmail/></h3>
                            </div>
                        </div>

                        {windowWidth <= 768 ? (
                            <div className="header--burger"
                                 onClick={() => setIsBurgerOpen(!isBurgerOpen)}>
                                {isBurgerOpen ? <GrFormClose style={{zIndex: "100"}}/> :
                                    <RiMenu3Fill style={{zIndex: "100"}}/>}
                            </div>
                        ) : (
                            <div className="header--nav">
                                <div className="header--nav__navs">
                                    <NavLink to="/">{translate[language].home}</NavLink></div>
                                <div className="header--nav__about">
                                    <NavLink to="/aboutUs">{translate[language].about}</NavLink></div>
                                <div className="header--nav__study">
                                    <NavLink to="/studyAbroad">{translate[language].study}</NavLink>
                                </div>
                                <div className="header--nav__contact">
                                    {/*<NavLink to="/contacts">Contacts</NavLink>*/}
                                    <NavLink to="/message">{translate[language].contact}</NavLink>
                                </div>
                            </div>
                        )}
                        <div style={{
                            display: isBurgerOpen ? "block" : "none"
                        }} className="header--blur"></div>
                        {
                            isBurgerOpen && (

                                <div className="header--nav1"
                                     style={{display: isBurgerOpen ? 'block' : 'none'}}>
                                    <div
                                        className={`header--nav1__navs1 ${activeBurgerMenuItem === "Home" ? "active" : ""}`}
                                        onClick={() => {
                                            setIsBurgerOpen(false)
                                            setActiveBurgerMenuItem("Home")
                                        }}>
                                        <NavLink to="/">Home</NavLink>
                                    </div>
                                    <div className="header--nav1__about "
                                         onClick={() => setIsBurgerOpen(false)}>
                                        <NavLink to="/aboutUs">AboutUs</NavLink>
                                    </div>
                                    <div className="header--nav1__study"
                                         onClick={() => setIsBurgerOpen(false)}>
                                        <NavLink to="/studyAbroad">Study Abroad</NavLink>
                                    </div>
                                    <div className="header--nav1__contact"
                                         onClick={() => setIsBurgerOpen(false)}>
                                        <a onClick={() => window.scroll(0, 3100)}>Contacts</a>

                                        <NavLink to="/contacts">Contacts</NavLink>
                                    </div>
                                    <div className="header--nav1__language1">
                                        <NavLink to="/contacts">Contacts</NavLink>
                                    </div>
                                    <div className="header--nav1__language1">
                                        <h3>EN</h3>
                                        <h3>RU</h3>
                                        <h3>KG</h3>
                                    </div>

                                    <div className="header--nav1__icon">
                                        <h3><FaTelegramPlane/></h3>
                                        <h3><AiFillInstagram/></h3>
                                        <h3><BsTelephoneXFill/></h3>
                                        <h3><MdEmail/></h3>
                                    </div>

                                    {/*<div className="header--nav1__language1">*/}
                                    {/*<NavLink to="/contacts">Contacts</NavLink>*/}
                                    {/*</div>*/}
                                    <div className="header--nav1__language1">
                                        <h3>EN</h3>
                                        <h3>RU</h3>
                                        <h3>KG</h3>
                                    </div>

                                    <div className="header--nav1__icon">
                                        <h3><FaTelegramPlane/></h3>
                                        <h3><AiFillInstagram/></h3>
                                        <h3><BsTelephoneXFill/></h3>
                                        <h3><MdEmail/></h3>
                                    </div>
                                </div>
                            )
                        }

                        <div onClick={() => setSearchCard(!searchCard)}
                             className="header--input">
                            <BiSearch className="header--input__icon"/>
                            <NavLink to={"/america"}>
                                <input type="text" placeholder="Поиск..."
                                       onChange={event => setValue(event.target.value)} onClick={() => getEmptySearch()}
                                        value={value}

                                />
                            </NavLink>
                        </div>
                        <div className="header--language">
                            <select onChange={(e) => changeLanguage(e.target.value)} value={language}>
                                <option value="en">EN</option>
                                <option value="ru">RU</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div id='search'>
                <div className="container" hidden={searchBlock}>
                    <div className='search' style={{
                        display:  filter
                            ? 'block' : 'none'
                    }}>
                        {
                            value &&
                            filter.map((el) => (
                                <div className='search--top'>
                                    <h4 onClick={() => getSearch(el)}  key={el.id}>{el.name}</h4>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;