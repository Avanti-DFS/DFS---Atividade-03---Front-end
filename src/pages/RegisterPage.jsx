import React from 'react';
import RegisterForm from '../components/RegisterForm';
import { Link } from 'react-router-dom';

function RegisterPage() {
  return (
    <div className="container">
      <div className="form-container">
        <RegisterForm />
        <p>
          Já tem uma conta? <Link to="/login">Entrar</Link>
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;
