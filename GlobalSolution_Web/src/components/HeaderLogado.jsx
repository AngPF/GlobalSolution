import React from 'react';
import { Link } from 'react-router-dom';
import '../Style/Header.css';
import Logo from "../img/Logo DiaByte Innovations.png"

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <img src={Logo} alt="Diabyte Innovations" />
            </div>
            <nav className="navbar">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/FormPessoal">Form Pessoal</Link></li>
                    <li><Link to="/MenuCadastro">Refeição/Destros</Link></li>
                    <li><Link to="/SobreNos">Sobre Nós</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;