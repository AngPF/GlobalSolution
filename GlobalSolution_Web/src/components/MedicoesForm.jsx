import React, { useState } from 'react';
import "../Style/MedicoesForm.css";
import Mais from "../img/+.png";
import { useUserContext } from '../UserContext.jsx'

const MedicoesForm = ({ onSubmit }) => {
    const { userData } = useUserContext();
    const [medicao, setMedicao] = useState('');
    const [medicoes, setMedicoes] = useState([]);
    const [mensagem, setMensagem] = useState('');

    const [novo, setNovo] = useState({
        valorDestro: "",
        paciente: {
            id: "data.id"
        }
    });

    /*     const handleInputChange = (event) => {
            setMedicao(event.target.value);
            setMensagem(''); // Limpa a mensagem de feedback ao começar a digitar
        }; */

    /*     const handleInputChange = (event) => {
            const { name, value } = event.target;
        
            if (name === 'valorDestro') {
                setNovo((prevNovo) => ({
                    ...prevNovo,
                    valorDestro: value
                }));
            } else if (name === 'id') {
                setNovo((prevNovo) => ({
                    ...prevNovo,
                    paciente: {
                        ...prevNovo.paciente,
                        id: value
                    }
                }));
            } else {
                setForm({ ...form, [name]: value });
            }
        }; */

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        if (name === 'medicao') {
            setMedicao(value);
            setMensagem(''); // Limpa a mensagem de feedback ao começar a digitar
        } else {
            setForm({ ...form, [name]: value });
        }
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

    const fetchDataByRelacao = async (e) => {
        e.preventDefault();

        try {
            console.log('entrou no try');
            const res = await fetch("http://localhost/historico", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(novo)
            });

            if (res.ok) {
                const data = await res.json();
                console.log(data); // Faça algo com os dados recebidos, se necessário
                const { updateUserContext } = useUserContext();

                updateUserContext({
                    id: data.id,
                    valorMaxGlicemia: data.valorMaxGlicemia,
                    valorMinGlicemia: data.valorMinGlicemia,
                });
                navigate('/MenuCadastro');
            } else {
                throw new Error('Erro ao obter dados da API');
            }
            console.log('Após a chamada da API');
        } catch (error) {
            console.error('Erro ao obter dados da API:', error.message);
        } finally {
            console.log('chegou np fim')
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
                        name='valorDestro'
                    />
                </label>
                <div className='botao-esquerda'>
                    <button className='BotaoAdicionar' type="submit"><img className='iconMais' src={Mais} />Adicionar Destro</button>
                </div>
                <button className='BotaoFinalizar' onSubmit={fetchDataByRelacao} onClick={handleFinalize}>FINALIZAR</button>
            </form>
            {mensagem && <p>{mensagem}</p>}
        </div>
    );
};

export default MedicoesForm;
