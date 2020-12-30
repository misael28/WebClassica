import Cards from "../components/Cards.js";
import Footer from "../components/Footer.js";
import Nave from "../components/Nave.js";
import ws from "./ws.png";
const Lojas = () => {
  return (
    <div>
      <Nave />
      <div className="global-container-lojas">
        <h1>Conheça nossas lojas</h1>
      </div>
      <div className="contato">
        <p>Entre em Contato agora</p>
        <img src={ws} width="50" height="50" />
      </div>
      <div className="wrap">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
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
        .wrap {
          display: flex;
          flex-wrap: wrap;
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
        @media screen and (max-width: 600px) {
          .global-container-lojas {
            min-height: 10em;
            width: 10em;
            padding: 0 0.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: left;
          }
        }
        @media screen and (min-width: 600px) {
          .global-container-lojas {
            min-height: 10em;
            min-width: 30em;
            padding: 0 0.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
        }
      `}</style>
    </div>
  );
};

export default Lojas;
