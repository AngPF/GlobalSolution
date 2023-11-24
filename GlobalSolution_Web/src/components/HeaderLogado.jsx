import React from 'react';
import { Link } from 'react-router-dom';
import '../Style/Header.css';
import Logo from "../img/Logo DiaByte Innovations.png"

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <Link to="/"><img src={Logo} alt="Diabyte Innovations" /></Link>
            </div>
            <nav className="navbar">
                <ul>
                    <li><Link to="/HomeLogado">Home</Link></li>
                    <li><Link to="/MenuCadastro">Refeição/Destros</Link></li>
                    <li><Link to="/SobreNosLogado">Sobre Nós</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;