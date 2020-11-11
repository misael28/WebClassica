import Cards from "../components/Cards.js";
import Footer from "../components/Footer.js";
import Nave from "../components/Nave.js";
const Lojas = () => {
  return (
    <div>
      <Nave />
      <div className="global-container">
        <h1>Sua loja aqui</h1>
      </div>
      <div className="wrap">
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
        .global-container {
          min-height: 10em;
          min-width: 30em;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </div>
  );
};

export default Lojas;
