import React from 'react';
import LoginForm from '../components/LoginForm';
import { Link } from 'react-router-dom';
import '../App.css';

function LoginPage() {
  return (
    <div className="container">

      <div className="form-container">

        <LoginForm />
        
        <p>
          Não tem uma conta? <Link to="/register">Registrar</Link>
        </p>

      </div>

    </div>
  );
}

export default LoginPage;
