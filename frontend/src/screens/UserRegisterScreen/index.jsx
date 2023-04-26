import './userRegisterScreen.css';
import Header from '../../components/Header'
import { useState } from 'react';

function UserRegisterScreen() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contador, setContador] = useState(0);

  function incrementar() {
    setContador(contador + 1)
  }

  function handleSubmit(event) {
    event.preventDefault();

    console.log(`Nome: ${name} | Email: ${email}`)
  };

  return (
    <>
      <Header title='Cadastro de usuário' />
      <main>
        <form onSubmit={handleSubmit}>
          <label>Nome</label>
          <input type="text" value={name} onChange={event => setName(event.target.value)} />

          <label>Email</label>
          <input type="email" value={email} onChange={event => setEmail(event.target.value)} />

          <button type="submit">Cadastrar</button>
        </form>
        <section>
          <p>Contador: {contador}</p>
          <button onClick={incrementar}>Incrementa</button>
        </section>
      </main>
    </>
  );
}

export default UserRegisterScreen;