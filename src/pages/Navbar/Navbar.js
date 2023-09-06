import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false) ;

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }
    return (
        <header>
        <div className='navBar' style={{backgroundColor: '#110C01', height: '80px', color:'#EEEEED'}}>   
            <nav className='navContainer'>
                <Link to='/' className='logo'>
                    <h1>AZ</h1>
                </Link>
                <div className='navMenu'>
                    <Link to='/Projects'>Projetos</Link>
                    <Link to='/About'>Sobre</Link>
                    <Link to='/'>Blog</Link>
                    <Link to='/Contact'>Contato</Link>
                </div>  
                <div className='navMobile'>
                    <div className='navBurguer' onClick={toggleMenu}>
                        <img src={'assets/icons/burguer.svg'} alt='burguerIcon'/>
                    </div>
                    <div className={`menuMobile ${menuOpen ? 'menuMobileOpen' : ''} `}>
                        <div className='navClose' onClick={toggleMenu}>
                            <img src={'assets/icons/close.svg'} alt='closeIcon'></img></div>
                        <Link to='/Projects'style={{borderTop: '1px solid'}}>Projetos</Link>
                        <Link to='/About'>Sobre</Link>
                        <Link to='/'>Blog</Link>
                        <Link to='/Contact'>Contato</Link>
                    </div>
                </div>
            </nav>
        </div>
        </header>
    )
};