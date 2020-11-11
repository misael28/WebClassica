import Nave from "../nav/Nave";
const Layout = (props) => {
  return (
    <div>
      <Nave />
      {props.children}
    </div>
  );
};

export default Layout;
