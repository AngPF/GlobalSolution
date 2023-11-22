import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import "../Style/Login.css"
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div>
      <Header />
      <div>
        <div className='Login-meio'>
          <div className="form-container"> 
            <h1>Login</h1>
            <form>
              <input className='input1' type="email" name="username" placeholder='E-Mail'/>
              <br />
              <input className='input2' type="password" name="password" placeholder='Senha'/>
              <button type="submit">Entrar</button>
            </form>
            <p>Não é cadastrado? <Link to="/Cadastro">Cadastre-se</Link></p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;