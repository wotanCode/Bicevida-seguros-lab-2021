import React from "react";
import "../../css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";

//Componente del footer
export const Footer = () => {
  return (
    <>
      <footer className="border-top border-primary footer fixed-bottom container">
        <div className="row justify-content-between">
          <div className="col-3">
            <h6>
              Made with love ❤ by{" "}
              <a
                target="_blank"
                href="https://www.linkedin.com/in/pedro-yanez/"
                rel="noreferrer"
              >
                Pedro Yanez
              </a>
            </h6>
          </div>
          <div className="col-2">
            <img
              className="logotipo"
              src="https://cdn.bicevida.cl/wp-content/uploads/2020/01/logo-bicevida.svg"
              alt="logotipo bicevida"
            />
          </div>
        </div>
      </footer>
    </>
  );
};
