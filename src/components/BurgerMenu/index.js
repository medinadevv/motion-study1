import React from 'react'
import { NavLink } from 'react-router-dom'

const BurgerMenu = () => {
  return (
    <section id='burger'>
        <div className="container">
            <div className="burger">
                <div className="burger--menu">
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/aboutUs"}>About Us</NavLink>
                <NavLink to={"/studyAbroad"}>Study Abroad</NavLink>
                <NavLink to={"/contacts"}>Contacts</NavLink>

                </div>
                <div className="burger--language">
                        
                            <h2>EN</h2>
                            <h2>RU</h2>
                            <h2>KGZ</h2>
                        
                    </div>
            </div>
            
        </div>
    </section>
  )
}

export default BurgerMenu