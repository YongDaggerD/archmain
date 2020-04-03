import React from 'react';
import cs from './Nav.module.css';
import {NavLink} from "react-router-dom"

const Nav = () => {
    return (
        <div className={cs.wrapper}>
                <div className={cs.navlinks}>
                    <div className={cs.box_logo}></div>
                    <div className={cs.plus}></div>
                    <NavLink to="/dashbord"><i class="fas fa-user"></i> </NavLink>
                    <NavLink to="/table"><i class="fas fa-user-friends"></i></NavLink>
                    <NavLink to="/training"><i class="fas fa-yin-yang"></i></NavLink>
                    <NavLink to="/competitions"><i class="fas fa-trophy"></i></NavLink>
                    <NavLink to="/duel"><i class="fas fa-crosshairs"></i></NavLink>
                </div>
            <div className={cs.lower}>
                <i class="fas fa-sign-in-alt"></i>
            </div>
        </div>
    );
}

export default Nav;