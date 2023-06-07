import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BaseColaboradores } from "./Components/BaseColaboradores/BaseColaboradores";
import React, { useState } from "react";

function App() {
  const [inputSearch, setInputSearch] = useState("");
  const [inputColab, setInputColab] = useState("");
  const [inputMail, setInputMail] = useState("");
  const [listColaboradores, setListColaboradores] = useState(BaseColaboradores);
  console.log(inputSearch.value);

  const colab = {
    id: listColaboradores.length + 1,
    nombre: inputColab,
    correo: inputMail,
  };

  const agregarColaborador = () => {
    setListColaboradores([...listColaboradores, colab]);
  };
  console.log(inputSearch);
  let result = [];
  if (!inputSearch) {
    result = listColaboradores;
  } else {
    result = listColaboradores.filter((dato) =>
      dato.nombre.includes(inputSearch)
    );
    console.log(result.value);
  }

  return (
    <div>
      <div className="buscador">
        <h4>Buscar Colaborador</h4>
        <input
          id="input1"
          type="text"
          placeholder="Buscar colaborador"
          onChange={(e) => setInputSearch(e.target.value)}
        />
      </div>
      <div className="colaborador">
        <h5>Nombre del Colaborador</h5>
        <input
          className="input2"
          type="text"
          placeholder="Ingresar nombre"
          onChange={(e) => setInputColab(e.target.value)}
        />
      </div>
      <div className="colaborador">
        <h5>Correo del Colaborador</h5>
        <input
          className="input2"
          type="text"
          placeholder="Ingresar E-mail"
          onChange={(e) => setInputMail(e.target.value)}
        />
      </div>
      <div className="button1">
        <button onClick={() => agregarColaborador()}>
          Agregar Colaborador
        </button>
      </div>

      <div className="resultados">
        <ul >
          {result.map((colaborador, i) => {
            return (
              <li  key={i} className="resultados1">
                {colaborador.nombre} <span> - </span>
                {colaborador.correo}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
