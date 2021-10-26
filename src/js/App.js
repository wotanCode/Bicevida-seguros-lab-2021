//React
import React, { useState } from "react";
//css
import "../css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
//Componentes importados
import { SeguroCard } from "./components/SeguroCard";
import { Footer } from "./components/Footer";

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
    <>
      
      <main className="container">
        <h2 className="my-3">Buscar Seguro</h2>
        <form className="my-3">
          <label className="selectLabel">Seleccionar Plan</label>
          <select
            onChange={handleSelectSeguro}
            name="seguro"
            value={seguroIdSelected}
            className="selectstyle"
          >
            {seguroLista.map((seguro, index) => (
              <option
                key={index}
                value={seguro.value}
                disabled={seguro.disabled}
              >
                {seguro.text}
              </option>
            ))}
          </select>
          <button
            className="buttonSeguro"
            type="Submit"
            onClick={(e) => handleButtonSeguro(e)}
          >
            <label className="textButton">Ver</label>
          </button>
        </form>

        {buttonSeguroSelected ? (
          <SeguroCard buttonSeguroSelected={buttonSeguroSelected} />
        ) : null}
      </main>
      <Footer/>
    </>
  );
}

export default App;
