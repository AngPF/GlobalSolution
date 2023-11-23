import React from 'react';
import "../Style/CadastrarRefeicao.css"
import Header from '../components/Header';
import Footer from '../components/Footer';
import Mais from "../img/+.png"

export default function CadastrarRefeicao() {
    return (
        <>
            <Header />
            <div className="cadastrar-meio">
                <h1>CADASTRAR REFEIÇÃO</h1>
                <div className='container-refeicao'>
                    <div className='SecaoAlimentos'>
                        <label>
                            ADICIONE ALIMENTO:
                            <br />
                            <input type="text" name="alimento" id="alimento" required />
                        </label>
                        <label>
                            QUANTIDADE EM GRAMAS:
                            <br />
                            <div className='CaixaGramas'></div>
                        </label>
                    </div>
                    <div className='botoes-esquerda'>
                        <button className='botao1'><img className='iconMais' src={Mais} /> ADICIONAR ALIMENTO </button>
                        <br />
                        <button className='botao2'>CADASTRAR REFEIÇÃO</button>
                        <br />
                        <button className='botao3'>VER HISTÓRICO DE REFEIÇÕES</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}