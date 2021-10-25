//React
import React, { useState } from "react";
//css
import "../css/App.css";
//Componentes importados
import { SeguroCard } from "./components/SeguroCard";

function App() {
  //Lista de seguros disponibles
  const seguroLista = [
    { value: 0, text: "Seleccionar", disabled: true },
    { value: 58, text: "Seguro Vida Activa", disabled: false },
    { value: 59, text: "Seguro Viaje Protegido", disabled: false },
  ];

  //State para el select del seguro, se modificcara cuando se cambie en el select
  const [seguroIdSelected, setSeguroIdSelected] = useState(0);

  //State para el button del seguro, se modifiara cuando se haga click en el button
  const [buttonSeguroSelected, setButtonSeguroSelected] = useState(0);

  //Asignamos al estado del select cuando este cambia
  const handleSelectSeguro = (e) => {
    setSeguroIdSelected(e.target.value);
  };

  //Asignamos al estado del button cuando este cambia
  const handleButtonSeguro = (e) => {
    e.preventDefault();
    setButtonSeguroSelected(seguroIdSelected);
  };

  return (
    <main className="App">
      <h1>bicevida new</h1>
      <form>
      <div>Seleccionar Plan</div>
        <select
          onChange={handleSelectSeguro}
          name="seguro"
          value={seguroIdSelected}
          className="selectstyle"
        >
          {seguroLista.map((seguro, index) => (
            <option key={index} value={seguro.value} disabled={seguro.disabled}>
              {seguro.text}
            </option>
          ))}
        </select>
        <button
          className="buttonSeguro"
          type="Submit"
          onClick={(e) => handleButtonSeguro(e)}
        >
          Ver
        </button>
      </form>
      {buttonSeguroSelected ? (
        <SeguroCard buttonSeguroSelected={buttonSeguroSelected} />
      ) : null}
    </main>
  );
}

export default App;
