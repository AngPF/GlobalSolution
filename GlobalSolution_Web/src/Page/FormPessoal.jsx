import React, { useState } from 'react';
import '../Style/FormPessoal.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

function FormPessoal() {

    const navigate = useNavigate();

    const [form, setForm] = useState({
        nome: '',
        dataNascimento: '',
        sobrenome: '',
        relacionamentoCarboidrato: '',
        glucemiaMaximo: '',
        glucemiaMinimo: '',
        glucemiaAjuste: '',
        dosagemAumento: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    }; 

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/Cadastro?${new URLSearchParams(form).toString()}`);
    };

    return (
        <>
            <Header />
            <div className="FormPessoal">
                <h1>Formulário Pessoal</h1>
                <div className='container_form'>
                    <form onSubmit={handleSubmit}>
                        <label>
                            NOME COMPLETO:
                            <br />
                            <input type="text" name="nomeCompleto" onChange={handleChange} required />
                        </label>
                        <label>
                            DATA DE NASCIMENTO:
                            <br />
                            <input type="date" name="dtNascimento" onChange={handleChange} required />
                        </label>
                        <label>
                            QUAL A SUA RELAÇÃO INSULINA CARBOIDRATO? 1 UNIDADE / GRAMAS
                            <br />
                            <input type="text" name="relacaoInsulina" onChange={handleChange} placeholder='Unidade / Gramas' required />
                        </label>
                        <label>
                            Qual o Máximo e o Mínimo valor de Glicemia Considerado Bom dentro do Alvo:
                            <br/>
                            <input type="number" name="valorMaxGlicemia" onChange={handleChange} placeholder='Máximo' required />
                            <input type="number" name="valorMinGlicemia" onChange={handleChange} placeholder='Mínimo' required />
                        </label>
                        <button type="submit">Enviar</button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default FormPessoal;