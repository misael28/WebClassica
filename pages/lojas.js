import Cards from "../components/Cards/Cards";
import Nave from "../components/Nave/Nave";
const Lojas = () => {
  return (
    <div>
      <Nave />
      <div className="global-container">
        <h1>Sua loja aqui</h1>
      </div>
      <Cards />
	  <Cards />
	  <Cards />
      <style jsx>{`
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
