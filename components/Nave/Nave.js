import Link from "next/link";

const Nave = () => {
  return (
    <div>
      <div className="container">
        <div className="logo">Classica</div>
        <div className="links">
          <Link href="/">
            <a className="index">Home</a>
          </Link>
          <Link href="/lojas">
            <a className="lojas">Lojas</a>
          </Link>
        </div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          justify-content: space-around;
          align-items: center;
          background: green;
          height: 5em;
          witdh: 100em;
        }

        .logo {
          text-align: center;
          color: white;
          width: 7em;
          height: 1em;
          padding: 5px;
          font-weight: bold;
          font-size: 3em;
        }
        a {
          color: white;
          text-decoration: none;
          padding: 10px;
          margin-right: 10px;
          border: 1px solid gray;
        }
      `}</style>
    </div>
  );
};

export default Nave;
