import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../Style/SobreNos.css'

function SobreNos() {
  return (
    <div>
      <Header />
      <div className='sobrenos-meio'>
        <h1>Sobre Nós</h1>
        <p>O Diabyte Innovations é uma empresa dedicada à oferecer soluções inovadoras para pessoas com diabetes tipo RM.</p>
      </div>
      <Footer />
    </div>
  );
}

export default SobreNos;