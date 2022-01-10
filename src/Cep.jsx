import './styles.css';
import { FiSearch } from 'react-icons/fi';
import { useState } from 'react';


function Cep() {
  const [input, setInput] = useState('');
  const [cep, setCep] = useState({});

  return (
    <div className="container">
      <h1 className="title">Busca CEP</h1>
      <div className="containerInput">
        <input type="text" placeholder="Digite o seu CEP" />
        <button
          className="btnSearch"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        >
          <FiSearch className="animation" size={25} color="#fff" />
        </button>
      </div>
        <main className="main">
          <h2>CEP : 12832</h2>
          <span>Rua</span>
          <span>Complemento : </span>
          <span>Bairro</span>
          <span>Brasil - SP</span>
        </main>
    </div>
  );
}
export default Cep;
