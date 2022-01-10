import './styles.css';
import { FiSearch } from 'react-icons/fi';
import { useState } from 'react';
import api from './services/api';

function Cep() {
  const [input, setInput] = useState('');
  const [cep, setCep] = useState({});

  async function handleSearch() {
    if (input === '') {
      alert('Preencha o campo CEP');
      return;
    }
    try {
      const response = await api.get(`${input}/json`);
      setCep(response.data);
      setInput('');
    } catch {
      alert('ERROR');
      setInput('');
    }
  }

  return (
    <div className="container">
      <h1 className="title">Busca CEP</h1>
      <div className="containerInput">
        <input
          type="text"
          placeholder="Digite o seu CEP"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="btnSearch" onClick={handleSearch}>
          <FiSearch className="animation" size={25} color="#fff" />
        </button>
      </div>
      {Object.keys(cep).length > 0 && (
        <main className="main">
          <h2>CEP : {cep.cep}</h2>
          <span>{cep.logradouro}</span>
          <span>Complemento : {cep.complemento}</span>
          <span>{cep.bairro}</span>
          <span>
            {cep.localidade} - {cep.uf}
          </span>
        </main>
      )}
    </div>
  );
}
export default Cep;
