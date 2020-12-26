import Nave from "../components/Nave.js";
import Footer from "../components/Footer.js";
import ws from "./ws.png";

const Home = () => {
  return (
    <div>
      <Nave />
      <div className="global-container">
        <h2>Centro Comercial Classica</h2>
        <img className="principal" />
        <div>Alugue uma sala comercial para seu empreendimento</div>
        <span>Entre em Contato agora</span>
        <img src={ws} width="50" height="50" />
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
        @media screen and (min-width: 600px) {
          .global-container {
            min-height: 10em;
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
            height: 40vh;
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
            height: 20vh;
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
            height: 15vh;
            min-width: 15em;
            background-color: grey;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
