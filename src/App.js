import { FiSearch } from "react-icons/fi"
import './styles.css'

function App() {
  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>
      <div className="containerInput">
        <input type="text" placeholder="Digite seu cep" />

        <button className="buttonSearch">
          <FiSearch size={25} color="white" />
        </button>
      </div>

      <main className="main">
        <h2>CEP: 79000-784</h2>
        <span>Rua: Teste</span>
        <span>Complemento: algum complemento</span>
        <span>Vila Rosa</span>
        <span>Manaus - AM</span>
      </main>

    </div>
  );
}

export default App;
