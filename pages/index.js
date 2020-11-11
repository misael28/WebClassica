import Nave from "../components/Nave.js";
import Footer from "../components/Footer.js";
const Home = () => {
  return (
    <div>
      <Nave />
      <div className="global-container">
        <h1>Classica</h1>
        <div>Mp consultoria</div>
		<p></p>
		<img className="principal"/>
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
        .global-container {
          min-height: 10em;
          min-width: 30em;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
		}
		.principal{
			height:22em;
			width:50em;
			background-color: grey;
		}
      `}</style>
    </div>
  );
};

export default Home;
