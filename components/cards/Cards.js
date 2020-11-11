import ws from "../imagens/ws.png";
import lojaImg from "../imagens/loja.jpg";

const Cards = () => {
  return (
    <div>
     
        <div className="card">
          <img src={lojaImg} alt="loja" id="whats-app-logo" />
          <div className="card-title">
            <h2>Loja XXX</h2>
          </div>
          <div>
            <p>Descrição da sua loja aqui, sala, serviços</p>
          </div>
          <div className="card-contact">
            <div>7199999-0000</div>
            <button>
              <img
                src={ws}
                style={{ height: 50, width: 50 }}
                alt="whats-app"
                id="butao"
              />
            </button>
          </div>
      </div>

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

        .card {
          border: 1px solid black;
          border-radius: 3px;
          height: 20em;
          width: 20em;
          text-align: center;

		  margin-left: 3rem;
		  margin-top: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card img {
          height: 10em;
          width: 20em;
        }
        .card-contact {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        button {
          background-color: transparent;
          border: 0;
          border-radius: 50%;
          height: 50px;
          width: 50px;
        }

        button img {
          border-radius: 50%;
        }
      `}</style>
    </div>
  );
};

export default Cards;
