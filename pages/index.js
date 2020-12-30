import Nave from "../components/Nave.js";
import Footer from "../components/Footer.js";
import ws from "./ws.png";
import img1 from "./img1.jpeg";
import img2 from "./img2.jpg";
import { useEffect, useState } from "react";
const arrow_left = require("./arrow_left.svg");
const arrow_right = require("./arrow_right.svg");

const Home = () => {
  const imagens = [img1, img2];
  const [paraFrente, setParaFrente] = useState(1);
  return (
    <div>
      <Nave />
      <div className="global-container">
        <h2>Centro Comercial Classica</h2>
        <div className="imagens-principal">
          <button
            className="arrow-left"
            onClick={() => {
              if (paraFrente <= 1) {
                setParaFrente(imagens.length);
              } else {
                setParaFrente(paraFrente - 1);
              }
            }}
          >
            <img src={arrow_left} alt="esquerda" />
          </button>
          <img className="principal" src={imagens[paraFrente - 1]} />
          <button
            className="arrow-right"
            onClick={() => {
              if (imagens.length === paraFrente) {
                setParaFrente(1);
              } else {
                setParaFrente(paraFrente + 1);
              }
            }}
          >
            <img src={arrow_right} alt="direita" />
          </button>
        </div>
        <div>Alugue uma sala comercial para seu empreendimento</div>
        <div className="contato">
          <p>Entre em Contato agora</p>
          <img src={ws} width="50" height="50" />
        </div>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </p>
        <p>
          Agende uma visita às nossas salas e escritórios, conheça nossas
          instalações.
        </p>
      </div>
      <Footer />
      <style jsx>{`
        body,
        span,
        p,
        form,
        img,
        a,
        ul,
        ol,
        li,
        table,
        tr,
        td,
        div {
          margin: 0;
          padding: 0;
          border: none;
          outline: none;
          list-style-type: none;
        }
        .contato {
          display: flex;
          flex-direction: column;
          position: fixed;
          right: 10px;
          width: 100px;
          background: #370003;
          color: white;
        }
        .contato img {
          border-radius: 100%;
        }
        .imagens-principal {
          display: flex;
          align-items: center;
        }
        .imagens-principal button {
          height: 40px;
        }
        .arrow-left {
          position: relative;
          left: 40px;
        }
        .arrow-right {
          position: relative;
          right: 40px;
        }
        @media screen and (min-width: 600px) {
          .global-container {
            min-height: 30em;
            min-width: 30em;
            padding: 0 0.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          .principal {
            display: flex;
            flex-growth: growth;
            height: 45em;
            min-width: 45em;
            background-color: grey;
          }
        }
        @media screen and (max-width: 600px) {
          .global-container {
            min-height: 10em;
            max-width: 30em;
            padding: 0 0.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          .principal {
            display: flex;
            flex-growth: growth;
            height: 20em;
            min-width: 20em;
            background-color: grey;
          }
        }
        @media screen and (max-width: 300px) {
          .global-container {
            min-height: 10em;
            max-width: 20em;
            padding: 0 0.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          .principal {
            display: flex;
            flex-growth: growth;
            height: 15em;
            min-width: 15em;
            background-color: grey;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
