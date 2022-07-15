import React from "react";
import { FiSearch } from "react-icons/fi";
import "./styles.css";
import api from "./services/api";

function App() {
  const [cep, setCep] = React.useState("");
  const [dados, setDados] = React.useState(null);

  const handleSearch = async (event) => {
    if (!cep) {
      alert("Preencha um CEP");
      return;
    }

    try {
      setDados(null);
      const response = await api.get(`/${cep}/json`);
      if (!response.data.erro) {
        setDados(response.data);
      } else {
        throw new Error("Falha na API");
      }
    } catch (error) {
      alert("Falha ao consultar o CEP");
      setDados(null);
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

      {dados && (
        <main className="main">
          <h2>CEP: {dados.cep}</h2>
          <span>Rua: {dados.logradouro}</span>
          <span>Complemento: {dados.complemento}</span>
          <span>{dados.bairro}</span>
          <span>{`${dados.localidade} - ${dados.uf}`}</span>
        </main>
      )}
    </div>
  );
}

export default App;
