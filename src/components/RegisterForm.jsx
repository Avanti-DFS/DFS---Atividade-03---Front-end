import { useState } from 'react';
import axios from 'axios';
import '../App.css';

function RegisterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/register', { name, email, password });
      console.log('Registro bem-sucedido:', response.data);
    } catch (error) {
      console.error('Erro no registro:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registrar</h2>

      <div>
        <label htmlFor="name">Nome: </label>
        <input 
          className="form-control"
          type="text" 
          id="name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
      </div>

      <div>
        <label htmlFor="register-email">Email: </label>
        <input 
          className="form-control"
          type="email" 
          id="register-email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
      </div>

      <div>
        <label htmlFor="register-password">Senha: </label>
        <input 
          className="form-control"
          type="password" 
          id="register-password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
      </div>

      <button className="btn btn-primary" type="submit">Registrar</button>

    </form>
  );
}

export default RegisterForm;
