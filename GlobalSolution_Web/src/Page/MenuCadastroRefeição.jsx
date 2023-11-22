import React from "react";
import "../Style/MenuCadastroRefeiçao.css"
import Header from "../components/Header";
import Footer from "../components/Footer";
import Mais from "../img/+.png"
import { Link } from 'react-router-dom';

export default function MenuCadastro() {
    return (
        <>
            <Header />
            <div className="Menu-Meio">
                <div className="Container-Cadastrar-Refeicao">
                    <h1 className="principal">Cadastrar Refeição</h1>
                    <p>Cadastre suas refeições e receba a quantidade de insulina necessária para a alimentação.</p>
                    <button className="Botao-mais"><img src={Mais}></img></button>
                </div>
                <div className="Container-Cadastrar-Destros">
                    <h1 className="principal">Cadastrar Destros</h1>
                    <p>Cadastre suas medições durante o dia e ao final receba um gráfico com a porcentagem de glicemia dentro e fora do gráfico</p>
                    <button className="Botao-mais"><Link to="/AppGrafico"><img src={Mais}></img></Link></button>
                </div>
            </div>
            <Footer />
        </>
    )
}