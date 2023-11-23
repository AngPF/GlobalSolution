import React, { useState } from 'react';

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
        <div>
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
                <button type="submit">Adicionar</button>
            </form>
            <button onClick={handleFinalize}>Finalizar</button>
            {mensagem && <p>{mensagem}</p>} {/* Exibe a mensagem, se houver */}
        </div>
    );
};

export default MedicoesForm;
