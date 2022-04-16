import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import './styles.css';
import logo from '../../assets/Logo.svg';

const Home = () => {
  return (
    <div id="page-home">
      <div className="content">
        <header>
          <img src={logo} alt="ecoleta logo" />
        </header>
    
        <main>
          <div className="text-content">
            <h1>Seu marketplace de coleta de resíduos</h1>
            <p>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente</p>
          </div>
          <Link to="/create-point">
            <span className="search">
              <FiLogIn/>
            </span>
            <strong>Cadastre um ponto de coleta</strong>
          </Link>
        </main>
      </div>
    </div>
  )
}

export default Home;