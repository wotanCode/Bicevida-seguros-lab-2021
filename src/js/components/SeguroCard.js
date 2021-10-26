import React, { useState, useEffect } from "react";
//css
import "../../css/seguroCard.css";
import "bootstrap/dist/css/bootstrap.min.css"
//URL API
import { URLAPI } from "../config/";

//Componente para la carta del seguro
export const SeguroCard = (props) => {
  //Aqui se guarda el seguro extraido del fetch
  const [seguro, setSeguro] = useState();

  //funcion Connexion al endpoint
  const fetchseguro = async (idseguro) => {
    await fetch(`${URLAPI}${idseguro}`, {
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
  return (
    <>
      {seguro ? (
        <div className="cardSeguro">
          <div className="Cardimagen">
            <img src={seguro.insurance.image} alt='imagen del seguro'/>
            <h4 className="cardLabel">{seguro.insurance.price}</h4>
          </div>
          <div className="cardTextos">
            <h2>{seguro.insurance.name}</h2>
            <p>{seguro.insurance.description}</p>
          </div>
        </div>
      ) : null}
    </>
  );
};
