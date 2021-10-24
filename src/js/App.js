//React
import React, { useState, useEffect } from "react";
//css
import "../css/App.css";

function App() {
  const URLapi = "https://dn8mlk7hdujby.cloudfront.net/interview/insurance/";
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

  return (
    <div className="App">
      <h1>Bicevida</h1>
      <form>
        {seguro1 && seguro2 ? (
          <select name="select">
            <option value="58">{seguro1.insurance.name}</option>
            <option value="59">{seguro2.insurance.name}</option>
          </select>
        ) : (
          <select name="select"></select>
        )}
      </form>

      <button>Agregar</button>
      <button onClick={() => console.log(seguro1)}>mostrar arreglo</button>
    </div>
  );
}
/*
https://dn8mlk7hdujby.cloudfront.net/interview/insurance/59
*/

export default App;
