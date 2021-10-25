//React
import React, { useState, useEffect, useCallback} from "react";
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


  

  //Componente para la carta del seguro
  const SeguroCard = (props) => {
    //Aqui se guarda el seguro extraido del fetch
    const [seguro, setSeguro] = useState();

    //funcion Connexion al endpoint
    const fetchseguro = async (idseguro) => {
      await fetch(`${URLapi}${idseguro}`, {
        method: "GET",
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setSeguro(data);
        })
        //mostrarnos un error en caso de que lo tuvieramos
        .catch((err) => console.log("Muestro error -->", err));
    };

    //Conectando a la API apenas se inicie el componente
    useEffect(() => {
      fetchseguro(props.buttonSeguroSelected);
    }, [props.buttonSeguroSelected]);

    return <div>{seguro ? (
      <>
        <p>{seguro.insurance.name}</p>
        <p>{seguro.insurance.description}</p>
        <p>{seguro.insurance.price}</p>
        <p>{seguro.insurance.image}</p>
      </>
      ): null}</div>;
  };

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
