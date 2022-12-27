import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useLocation } from "react-router-dom";
import './Nav.css'
import Book from './Book'
import Logo from "./Logo"

function Nav() {
    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");
    return (
    <div>
        <header className='navHeader gradient'>
            <div><Logo/></div>
            <nav className='NavigationBar'>
                <ul className='NavigationList'>
                    <li className={splitLocation[2] === "cc" || splitLocation[2] === "ps" || splitLocation[2] === "hf"? "ac" : "Events"}><NavLink to="/Events/pt"><b>EVENTS</b></NavLink></li>
                    <li className="Merch"><NavLink to="/Merch">MERCH</NavLink></li>
                    <li className='Campaigns'><NavLink to="/Campaigns">CAMPAIGNS</NavLink></li>
                    <li className='Teams'><NavLink to="/Teams">TEAMS</NavLink></li>
                    <li className='Mun'><NavLink to="/MUN"> MUN &emsp;</NavLink></li>
                    <li className='Sponsors'><NavLink to="/Sponsors" style={{
                        marginLeft : '-25px'
                        }}>SPONSORS</NavLink></li>
                    <li className='Contests'><NavLink to="/Contests">CONTESTS</NavLink></li>
                </ul>
            </nav>
            <Link className='image' to="/BookTickets"><Book /></Link>
        </header>
    </div>
    )
}

export default Nav