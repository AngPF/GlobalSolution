import React, { useState } from 'react';
import "../Style/MedicoesForm.css";
import Mais from "../img/+.png";

const MedicoesForm = ({ onSubmit }) => {
    const [medicao, setMedicao] = useState('');
    const [medicoes, setMedicoes] = useState([]);
    const [mensagem, setMensagem] = useState('');

    const handleInputChange = (event) => {
        setMedicao(event.target.value);
        setMensagem(''); // Limpa a mensagem de feedback ao começar a digitar
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (medicao.trim() !== '') {
            if (!isNaN(parseFloat(medicao))) { // Verifica se é um número
                setMedicoes([...medicoes, parseFloat(medicao)]);
                setMedicao('');
                setMensagem('Medição adicionada com sucesso!');
            } else {
                setMensagem('Por favor, insira um número válido.');
            }
        } else {
            setMensagem('Por favor, insira um valor antes de adicionar.');
        }
    };

    const handleFinalize = () => {
        if (medicoes.length > 0) {
            onSubmit(medicoes);
        } else {
            setMensagem('Adicione pelo menos uma medição antes de finalizar.');
        }
    };

    return (
        <div className='Form-Medioes'>
        <form onSubmit={handleSubmit}>
            <label>
                Medições do Dia:
                <input
                    type="number"
                    value={medicao}
                    onChange={handleInputChange}
                    placeholder="Insira a medição"
                />
            </label>
            <div className='botao-esquerda'>
                <button className='BotaoAdicionar'><img className='iconMais' src={Mais} />Adicionar Destro</button>
            </div>
            <button className='BotaoFinalizar' onClick={handleFinalize}>FINALIZAR</button>
        </form>
        {mensagem && <p>{mensagem}</p>}
    </div>
    );
};

export default MedicoesForm;