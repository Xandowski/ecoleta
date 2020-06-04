import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';
import logo from '../../assets/Logo.svg';

const CreatePoint = () => {
  return (
    <div id="page-create-point">
      <header>
        <img src={logo} alt="ecoleta logo" />

        <Link to="/">
          <FiArrowLeft />
          Voltar para home
        </Link>
      </header>
    </div>
  )
}

export default CreatePoint;