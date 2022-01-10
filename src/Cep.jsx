import './styles.css';
import { FiSearch } from 'react-icons/fi';
import { useState } from 'react';


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
