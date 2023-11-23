import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// Rotas
import Login from './Page/Login.jsx'
import SobreNos from './Page/SobreNos.jsx'
import Cadastro from './Page/Cadastro.jsx'
import FormPessoal from './Page/FormPessoal.jsx'
import AppGrafico from './Page/AppGrafico.jsx'
import MenuCadastro from './Page/MenuCadastroRefeição.jsx'
import CadastrarRefeicao from './Page/CadastrarRefeicao.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="Login" element={<Login />} />
        <Route path="SobreNos" element={<SobreNos />} />
        <Route path="Cadastro" element={<Cadastro />} />
        <Route path="AppGrafico" element={<AppGrafico />} />
        <Route path="FormPessoal" element={<FormPessoal />} />
        <Route path="MenuCadastro" element={<MenuCadastro />} />
        <Route path="CadastrarRefeicao" element={<CadastrarRefeicao />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
