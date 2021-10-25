//React
import React, { useState, useEffect } from "react";
//css
import "../css/App.css";
//URL API
const URLapi = "https://dn8mlk7hdujby.cloudfront.net/interview/insurance/";

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

  //Estas guardan los posibles seguros:
  const [seguro1, setSeguro1] = useState();
  const [seguro2, setSeguro2] = useState();

  //funcion Connexion a la api
  const fetchseguro = async (idseguro) => {
    await fetch(`${URLapi}${idseguro}`, {
      method: "GET",
    })
      .then((response) => {
        // console.log(response.ok); // Será true (verdad) si la respuesta es exitosa.
        // console.log(response.status); // el código de estado = 200 o código = 400 etc.
        return response.json();
      })
      .then((data) => {
        if (idseguro === 58) {
          console.log("Respuesta de la data externa--->", data);
          setSeguro1(data);
          console.log("Fin del useEffect");
        }
        if (idseguro === 59) {
          console.log("Respuesta de la data externa--->", data);
          setSeguro2(data);
          console.log("Fin del useEffect");
        }
      })
      //mostrarnos un error en caso de que lo tuvieramos
      .catch((err) => console.log("muestro error -->", err));
  };

  useEffect(() => {
    //Llamando a la API con useEffect
    fetchseguro(58);
    fetchseguro(59);
  }, []);

  const SeguroCard = (props) => {
    return <div>{seguro1 ? <p>{seguro1.insurance.name}</p> : null}</div>;
  };

  const handleSelectSeguro = (e) => {
    console.log(e.target.value);
    setSeguroIdSelected(e.target.value);
  };

  const handleButtonSeguro = (e) => {
    e.preventDefault();
    setButtonSeguroSelected(seguroIdSelected);
    console.log(buttonSeguroSelected);
  };
  return (
    <div className="App">
      <h1>bicevida new</h1>
      <form>
        <select
          onChange={handleSelectSeguro}
          name="seguro"
          value={seguroIdSelected}
        >
          {seguroLista.map((seguro, index) => (
            <option key={index} value={seguro.value} disabled={seguro.disabled}>
              {seguro.text}
            </option>
          ))}
        </select>
        <button type="Submit" onClick={(e) => handleButtonSeguro(e)}>
          Agregar
        </button>
      </form>
      {buttonSeguroSelected ? (
        <SeguroCard buttonSeguroSelected={buttonSeguroSelected} />
      ) : null}
    </div>
  );
}

export default App;
