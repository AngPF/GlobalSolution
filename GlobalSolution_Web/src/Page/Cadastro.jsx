import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import "../Style/Login.css"
import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Cadastro() {

    const location = useLocation();
    const navigate = useNavigate();
    const [novo, setNovo] = useState({
        email: '',
        senha: '',
        paciente: {
            nomeCompleto: '',
            dtNascimento: '',
            relacaoInsulina: '',
            valorMaxGlicemia: '',
            valorMinGlicemia: '',
        },
    });

    useEffect(() => {
        // Extrai os dados da URL e atualiza o estado 'novo'
        const searchParams = new URLSearchParams(location.search);
        const dadosFormulario = Object.fromEntries(searchParams.entries());

        setNovo((prevNovo) => ({
            ...prevNovo,
            ...dadosFormulario,
            paciente: {
                ...prevNovo.paciente,
                ...dadosFormulario,
            },
        }));
    }, [location.search]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNovo((prevState) => ({
            ...prevState,
            [name]: value,
            paciente: {
                ...prevState.paciente,
                [name]: value,
            },
        }));
    };

    const fetchDataByRelacao = async (e) => {
        e.preventDefault();

        // Atualiza os dados da URL antes de fazer a chamada API
        const searchParams = new URLSearchParams(location.search);
        const dadosFormulario = Object.fromEntries(searchParams.entries());

        try {
            console.log('entrou no try');
            const res = await fetch("http://localhost/usuario", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...novo,
                    ...dadosFormulario,
                    paciente: {
                        ...novo.paciente,
                        ...dadosFormulario,
                    },
                })
            });

            if (res.ok) {
                const data = await res.json();
                console.log(data); // Faça algo com os dados recebidos, se necessário
                // Você pode redirecionar para a próxima página ou fazer qualquer outra ação aqui
                // Exemplo de redirecionamento:
                navigate('/Login');
            } else {
                throw new Error('Erro ao obter dados da API');
            }
            console.log('Após a chamada da API');
        } catch (error) {
            console.error('Erro ao obter dados da API:', error.message);
        } finally {
            console.log('chegou no fim');
        }
    };



    return (
        <div>
            <Header />
            <div className="Login">
                <div className='Login-meio'>
                    <div className="form-container">
                        <h1>Cadastro</h1>
                        <form onSubmit={fetchDataByRelacao}>
                            <input className='input1' type="email" value={novo.email} onChange={handleChange} name="email" placeholder='E-Mail' />
                            <br />
                            <input className='input2' type="password" value={novo.senha} onChange={handleChange} name="senha" placeholder='Senha' />
                            <button type="submit">Entrar</button>
                        </form>
                        <p>Já é cadastrado? <Link to="/Login">Login</Link></p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Cadastro;