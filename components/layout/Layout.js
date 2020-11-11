import Nave from "../Nave/Nave";
const Layout = (props) => {
  return (
    <div>
      <Nave />
      {props.children}
	  
    </div>
  );
};

export default Layout;
