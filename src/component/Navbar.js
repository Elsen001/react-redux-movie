import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../img/unnamed.png"

const Navbar = () => {
    return (
        <nav>
            <img className="animate__animated animate__backInLeft" src={logo} alt="" />
            <div className="list ">
                <ul className="animate__animated animate__heartBeat">
                    <li><NavLink activeClassName="red" exact to="/">Home</NavLink></li>
                    <li><NavLink activeClassName="red"  to="/about">About</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
