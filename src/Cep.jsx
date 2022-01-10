import './styles.css';
import { FiSearch } from 'react-icons/fi';

function Cep() {
  return (
    <div className="container">
      <h1 className="title">Busca CEP</h1>
      <div className="containerInput">
        <input type="text" placeholder="Digite o seu CEP" />
        <button className="btnSearch">
          <FiSearch className="animation" size={25} color="#fff" />
        </button>
        <main className="main">
          <h2>CEP : 12832</h2>
          <span>Rua</span>
          <span>Complemento : </span>
          <span>Bairro</span>
          <span>
            Brasil - SP
          </span>
        </main> 
      </div>
    </div>
  );
}
export default Cep;
