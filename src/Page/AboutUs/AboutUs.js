import React from 'react';
import './About.scss'
import logo from './../../img/z--73.svg'
import Team from "./Team/Team";
import {useLanguage} from "../../components/Lang/LanguageContext";

const AboutUs = () => {
    const {language} = useLanguage()
    const languageCard = {
        en :{
            about : 'About Us',
        },
        ru : {
            about:'о нас\n:',
        }
    }
    return (
       <>
           <div id='about'>
               <div className="container">
                   <div className='about'>
                      <div className='about__top'>
                          <div className='about--imgEs'>
                              <div className='about--imgEs__car'>
                                  <img src={logo}  alt=""/>
                              </div>
                          </div>
                      </div>
                       <div className='about--imgEs__car--tool'>
                           <span>{languageCard[language].about}</span>
                           <h2>Best Education <br/> Platfoorm</h2>
                           <h4>Apparently we had reached a great height in <br/>
                               the atmosphere, for the sky was a dead black.</h4>
                           <p>By the same illusion which lifts the horizon of the sea to <br/>
                               the level of the spectator on a hillside, the sable cloud <br/>
                               beneath was dished out, and the car seemed to float in <br/>
                               the middle.</p>
                       </div>
                   </div>
               </div>
           </div>
           <Team/>
       </>
    );
};

export default AboutUs;