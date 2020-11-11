import Layout from "../components/Layout/Layout";

const Home = () => {
  return (
    <div>
      <Layout>
        <div className="global-container">
          <h1>Conheça nossas Lojas</h1>
          <div>Mp consultoria</div>
        </div>
      </Layout>
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

export default Home;
