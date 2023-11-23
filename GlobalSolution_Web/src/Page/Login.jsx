import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import "../Style/Login.css"
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserProvider } from '../UserContext.jsx'

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
      console.log('entrou no try');
      const res = await fetch("http://localhost/usuario/login", {
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
    <UserProvider>
      <div>
        <Header />
        <div>
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
        </div>
        <Footer />
      </div>
    </UserProvider>
  );
}

export default Login;