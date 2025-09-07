import React, { useState } from 'react';
import { logo } from '../../imports.js';
import './header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <header className="header">
                <div className="logo">
                    <div className="logo-icon"><img className="logo-icon-inner" alt="Beyond" src={logo} /></div>
                    <span>Beyond</span>
                </div>
                <nav className="nav">
                    <a href="#home">Home</a>
                    <a href="#home">About us</a>
                    <a href="#home">Contact</a>
                </nav>
                <button className="download-btn download-btn-header">Download</button>
                <div className="menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    ) : (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 12H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M3 6H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M3 18H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    )}
                </div>
            </header>
            <div className={`mobile-menu-overlay ${isMenuOpen ? 'open' : ''}`} onClick={() => setIsMenuOpen(false)}></div>
            <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
                <a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a>
                <a href="#home" onClick={() => setIsMenuOpen(false)}>About us</a>
                <a href="#home" onClick={() => setIsMenuOpen(false)}>Contact</a>
                <button className="download-btn" style={{ marginTop: '2rem' }}>Download</button>
            </div>
        </>
    )
}

export default Header