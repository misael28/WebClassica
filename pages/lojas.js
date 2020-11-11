import Cards from "../components/Cards/Cards.js";
import Nave from "../components/Nave/Nave.js";
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
      <style jsx>{`
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
