import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import "../Style/Login.css"
import { Link } from 'react-router-dom';

function Cadastro() {
    return (
        <div>
            <Header />
            <div className="Login">
                <div className='Login-meio'>
                    <div className="form-container">
                        <h1>Cadastro</h1>
                        <form>
                            <input className='input1' type="email" name="username" placeholder='E-Mail' />
                            <br />
                            <input className='input2' type="password" name="password" placeholder='Senha' />
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