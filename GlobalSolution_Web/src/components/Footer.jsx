import React from 'react';
import '../Style/Footer.css';
import Logo from "../img/Logo DiaByte Innovations.png";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-item">
                Direitos reservados a
                <div>Eco, Byte</div>
            </div>
            <div className="footer-item">
                <ul>
                    <li>Maria Fernanda Ribeiro Mello - 98818</li>
                    <li>Nicolas Reis do Espirito Santo - 98819</li>
                    <li>Gabrielle da Silva Stanguini - 98786</li>
                    <li>Alberto R. Peruchi - 99706</li>
                    <li>Angelo Augusto Pelluci Fonseca - 98310</li>
                </ul>
                <div className="logo">
                    <img src={Logo} alt="Diabyte Innovations" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;