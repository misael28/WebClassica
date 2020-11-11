const Footer = () => {
  return (
    <div>
      <div className="footer-container">feito por MP | 2020</div>

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
        .footer-container {
          margin-top: 1em;
          display: flex;
          color: white;
          justify-content: center;
          align-items: center;
          background: black;
          height: 5em;
          witdh: 60em;
        }
      `}</style>
    </div>
  );
};

export default Footer;
