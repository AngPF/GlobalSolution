import React, { useState } from 'react';
import "../Style/CadastrarRefeicao.css"
import HeaderLogado from '../components/HeaderLogado';
import Footer from '../components/Footer';
import Mais from "../img/+.png"

export default function CadastrarRefeicao() {

    const [alimentoSelecionado, setAlimentoSelecionado] = useState('');
    const [quantidadeGramas, setQuantidadeGramas] = useState('');

    const relacaoInsulina = localStorage.getItem('relacaoInsulina');

    const handleAlimentoChange = (event) => {
        setAlimentoSelecionado(event.target.value);
    };

    const handleGramasChange = (event) => {
        setQuantidadeGramas(event.target.value);
    };

    const addAlimento = () => {

        if(alimentoSelecionado === "arroz"){
            console.log("oi")
        }
        // Aqui você pode usar os valores de alimentoSelecionado e quantidadeGramas
/*         console.log('Alimento Selecionado:', alimentoSelecionado);
        console.log('Quantidade em Gramas:', quantidadeGramas); */

        // Adicione aqui a lógica para cadastrar a refeição usando os valores acima
    };





    return (
        <>
            <HeaderLogado />
            <div className="cadastrar-meio">
                <h1>CADASTRAR REFEIÇÃO</h1>
                <div className='container-refeicao'>
                    <div className='SecaoAlimentos'>
                        <label>
                            ADICIONE ALIMENTO:
                            <br />
                            <select name="alimento" id="alimento" required value={alimentoSelecionado} onChange={handleAlimentoChange}>
                                <option value="arroz" key="Arroz">Arroz Branco</option>    
                                <option value="feijao" key="feijao">Feijão Carioca</option>    
                                <option value="macarrao" key="macarrao">Macarrão</option>    
                                <option value="frango" key="frango">Frango</option>    
                                <option value="carne1" key="carne1">Caren Bovina</option>    
                                <option value="carne2" key="carne2">Carne de Porco</option>    
                                <option value="peixe" key="peixe">Peixe</option>    
                                <option value="ovo" key="ovo">Ovo</option>    
                                <option value="batata" key="batata">Batata</option>    
                                <option value="batata2" key="batata2">Batata Doce</option>    
                            </select>
                        </label>
                        <label>
                            QUANTIDADE EM GRAMAS:
                            <br />
                            <input type="number" name="gramas" id="gramas" placeholder='/GRAMAS' required value={quantidadeGramas} onChange={handleGramasChange}/>
                        </label>
                    </div>
                    <div className='botoes-esquerda'>
                        <button className='botao1' onClick={addAlimento}><img className='iconMais'  src={Mais} /> ADICIONAR ALIMENTO </button>
                        <br />
                        <button className='botao2' >CADASTRAR REFEIÇÃO</button>
                        <br />
                        <button className='botao3'>VER HISTÓRICO DE REFEIÇÕES</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}