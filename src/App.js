import React from "react";
import { FiSearch } from "react-icons/fi";
import "./styles.css";
import api from "./services/api";

function App() {
  const [cep, setCep] = React.useState("");

  const handleSearch = async (event) => {
    if (!cep) {
      alert("Preencha um CEP");
      return;
    }

    try {
      const response = await api.get(`/${cep}/json`);
      console.log(response);
    } catch (error) {
      alert("Falha ao consultar o CEP");
      throw new Error(error);
    } finally {
      setCep("");
    }
  };

  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>
      <div className="containerInput">
        <input
          type="text"
          placeholder="Digite seu cep"
          value={cep}
          onChange={({ target }) => setCep(target.value)}
        />
        <button className="buttonSearch" onClick={handleSearch}>
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
