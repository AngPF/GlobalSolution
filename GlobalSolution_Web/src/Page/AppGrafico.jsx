import React, { useState } from 'react';
import MedicoesForm from '../components/MedicoesForm';
import GraficoMedicoes from '../components/GraficoMedicoes';
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../Style/AppGrafico.css';
import { UserProvider } from '../UserContext.jsx'

const AppGrafico = () => {
  const [medicoes, setMedicoes] = useState([]);

  const handleMedicoesSubmit = (medicoes) => {
    setMedicoes(medicoes);
  };

  return (
    <UserProvider>
      <div>
        <Header />
        <div>
          <div className="container_graph">
            <h1>Cadastrar Destros</h1>
            <div className="graph-container">
              <MedicoesForm onSubmit={handleMedicoesSubmit} />
              {medicoes.length > 0 && (
                <GraficoMedicoes medicoes={medicoes} />
              )}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </UserProvider>
  );
};

export default AppGrafico;
