import './styles.css';
import { FiSearch } from 'react-icons/fi';

function Cep() {
  return (
    <div className="container">
      <h1 className="title">Busca CEP</h1>
      <div className="containerInput">
        <input type="text" placeholder="Digite o seu CEP" />
        <button className="btnSearch" >
          <FiSearch className="animation" size={25} color="#fff" />
        </button>
      </div>
    </div>
  );
}
export default Cep;
