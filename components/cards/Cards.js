import ws from "../imagens/ws.png"
import lojaImg from "../imagens/loja.jpg"

const Cards = () => {
  return (
    <div>
      <div className="card">
	  <img src={lojaImg} alt="loja" id="whats-app-logo"/>
        <div className="card-title"><h2>Loja XXX</h2></div>
        <div>
          <p>Descrição da sua loja aqui, sala, serviços</p>
        </div>
		<div className="card-contact">
		<div>7199999-0000</div>
        <button ><img src={ws}  style={{ height: 50, width: 50 }} alt="whats-app" id="butao"/></button>
		</div>
      </div>
      <style jsx>{`	     
		 .card {
		   border: 1px solid black;
		   border-radius: 3px;
		   height: 20em;
		   width: 20em;
		   text-align: center;
		 }

		 .card img{
			height: 10em;
			width: 20em;
		 }
		 .card-contact{
			 display:flex;
			 justify-content:center;
			 align-items:center;
		 }
		 button{
			background-color: transparent;
			border:0;
			border-radius:50%;
			height:50px;
			width:50px;
		 }

		 button img{
			border-radius:50%;
		 }
	   `}</style>
    </div>
  );
};

export default Cards;
