import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import "../Style/Login.css";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const navigate = useNavigate();

  const [novo, setNovo] = useState({
    email: "",
    senha: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNovo((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  console.log('Antes da chamada da API');

  const fetchDataByRelacao = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost/usuario/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(novo)
      });

      if (res.ok) {
        const data = await res.json();
        console.log(data); 

        localStorage.setItem('pacienteId', data.paciente.id);
        localStorage.setItem('maxGlicemia', data.paciente.valorMaxGlicemia);
        localStorage.setItem('minGlicemia', data.paciente.valorMinGlicemia);  
        localStorage.setItem('relacaoInsulina', data.paciente.relacaoInsulina); 

        navigate('/MenuCadastro');
      } else {
        const data = await res.json();
        toast.error('Email ou senha incorretos!', {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      }
    } catch (error) {
      console.error('Erro ao obter dados da API:', error.message);
    }
  };

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
      <ToastContainer />
      <Header />
      <div className='Login-meio'>
        <div className="form-container">
          <h1>Login</h1>
          <form>
            <input className='input1' type="email" name="email" value={novo.email} onChange={handleChange} placeholder='E-Mail' />
            <br />
            <input className='input2' type="password" value={novo.senha} name="senha" onChange={handleChange} placeholder='Senha' />
            <button type="submit" onClick={fetchDataByRelacao}>Entrar</button>
          </form>
          <p>Não é cadastrado? <Link to="/FormPessoal">Cadastre-se</Link></p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
