import { useState } from 'react';
import axios from 'axios';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/login', { email, password });
      console.log('Login bem-sucedido:', response.data);
      localStorage.setItem('token', response.data.token);
    } catch (error) {
      console.error('Erro no login:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div>
        <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div>
        <label htmlFor="login-email">Email: </label>
        <input 
          className="form-control"
          type="email" 
          id="login-email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
      </div>

      <div>
        <label htmlFor="login-password">Senha: </label>
        <input 
          className="form-control"
          type="password" 
          id="login-password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
      </div>

      <button className="btn btn-primary" type="submit">Entrar</button>

    </form>
    </div>
  );
}

export default LoginForm;
