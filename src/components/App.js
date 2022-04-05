import Navbar from "./Navbar";

const App = () => {
  return (
    <header>
      <div className="nav-area">
        <a href="/#" className="logo">
          Logo
        </a>
        <Navbar />
      </div>
    </header>
  );
};

export default App;

/*
In the code, we are using the <a> tag for the internal link for simplicity. 
Normally, we would use the Link or NavLink (for menu navigations) from the react-router-dom to link between internal pages.
*/