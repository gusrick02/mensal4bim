import React from 'react';
import './App.css';

function App() {
  const handleEdit = () => {
    console.log('Editar conta');};
  const handleDelete = () => {
    console.log('Deletar conta');};

  return (
    <div className="login-container">
      <h2>Usuário</h2>
      <form className="login-form">
        <div className="form-group">
          <label htmlFor="username">Nome de Usuário</label>
          <input type="text" id="usuario" placeholder="Coloque o nome de usuário" required/>
        </div>
        <div className="form-group">
          <label htmlFor="password">Senha</label>
          <input type="password" id="Senha" placeholder="Coloque sua senha" required/>
        </div>
        <button type="submit">Login</button>
      </form>

      <div className="action-buttons">
        <button onClick={handleEdit} className="edit-btn">Editar</button>
        <button onClick={handleDelete} className="delete-btn">Deletar</button>
      </div>
    </div>
  );
}

export default App;
