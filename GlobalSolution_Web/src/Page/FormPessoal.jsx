import React, { useState } from 'react';
import '../Style/FormPessoal.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

function FormPessoal() {
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
        console.log(form);
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
                            <input type="text" name="nome" onChange={handleChange} required />
                        </label>
                        <label>
                            DATA DE NASCIMENTO:
                            <br />
                            <input type="date" name="dataNascimento" onChange={handleChange} required />
                        </label>
                        <label>
                            QUAL A SUA RELAÇÃO INSULINA CARBOIDRATO? 1 UNIDADE / GRAMAS
                            <br />
                            <input type="text" name="relacionamentoCarboidrato" placeholder='Unidade / Gramas' onChange={handleChange} required />
                        </label>
                        <label>
                            Qual o Máximo e o Mínimo valor de Glicemia Considerado Bom dentro do Alvo:
                            <br/>
                            <input type="number" name="glicemiaMaximo" placeholder='Máximo' onChange={handleChange} required />
                            <input type="number" name="glicemiaMinimo" placeholder='Mínimo' onChange={handleChange} required />
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