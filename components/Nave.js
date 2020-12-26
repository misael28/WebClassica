import Link from "next/link";

const Nave = () => {
  return (
    <div>
      <div className="container">
        <div className="logo">Classica</div>
        <div className="links">
          <Link href="/">
            <a className="index">Sobre</a>
          </Link>
          <Link href="/lojas">
            <a className="lojas">Lojas</a>
          </Link>
        </div>
        <div className="links-cel">
          <ul>
            <li>
              <Link href="/">
                <a className="index">Sobre</a>
              </Link>
            </li>
            <li>
              <Link href="/lojas">
                <a className="lojas">Lojas</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <style jsx>{`
        @media screen and (max-width: 600px) {
          .links {
            display: none;
          }
        }
        @media screen and (min-width: 600px) {
          .links-cel {
            display: none;
          }
        }
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
        .container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: #370003;
          height: 5em;
          witdh: 60em;
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
        .links a {
          color: white;
          text-decoration: none;
          padding: 10px;
          margin-right: 20px;
          border: 1px solid gray;
        }
        .links-cel {
          margin-right: 10px;
        }
        .links-cel a {
          color: white;
          text-decoration: none;
        }
        .links-cel li {
          margin-bottom: 5px;
        }
      `}</style>
    </div>
  );
};

export default Nave;
