import React, { useState } from "react";
// import logo from './logo.svg';
import './App.css';
import "./custom.scss";
import Approutes from "./AppRoutes";
import BurgerMenu from "./components/BurgerMenu/BurgerMenu";
import Scroll from "./components/SmoothScroll/SmoothScroll";

const TopNav = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav className="navbar navbar-expand-lg bg-primary fixed-top" id="top-nav">
      <div className="container-fluid" style={{paddingLeft: "80px"}}>
        <a className="navbar-brand text-white font-weight-bolder mt-2" href="/">
          {/* <img src="https://getbootstrap.com/docs/4.6/assets/brand/bootstrap-solid.svg" alt="Logo" width="36" height="36" className="vertical-align-middle" /> */}
          <h4 className="">Food.</h4>
        </a>
        <button
          className="custom-toggler navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample09"
          aria-controls="navbarsExample09"
          aria-expanded={!isNavCollapsed ? true : false}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          // className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
          // id="navbarsExample09"
        >
          <div className="d-flex justify-content-center justify-content-md-end w-100">
            
            <a className="nav-link text-white" href="/login">
              +261 34 12 000 00
            </a>
            <a
              href="/request-demo"
              className="btn btn-sm btn-outline-secondary nav-link text-white float-right"
            >
              Réservations
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

function App() {
  return (
    <>
      <BurgerMenu />
      <div className="App">
        <TopNav />
        <Scroll />
        <div className="auth-wrapper">
          <div className="container" style={{paddingTop: "80px"}}>
            {/* The project routes  */}
            <Approutes />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
