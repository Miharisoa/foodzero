import React, { useState } from 'react';
// import logo from './logo.svg';
// import './App.css';
import './custom.scss';
import Approutes from './AppRoutes';

const TopNav = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary fixed-top rounded">
      <div className="container">
        <a className="navbar-brand text-white font-weight-bolder" href="/">
          {/* <img src="https://getbootstrap.com/docs/4.6/assets/brand/bootstrap-solid.svg" alt="Logo" width="36" height="36" className="vertical-align-middle" /> */}
          <h4 className="">Movies&Me</h4>
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
          className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
          id="navbarsExample09"
        >
          <div className="d-flex justify-content-center justify-content-md-end w-100">
            <a className="nav-link text-white" href="/contact">
              News
            </a>
            <a className="nav-link text-white" href="/login">
              Favorites
            </a>
            <a
              href="/request-demo"
              className="btn btn-sm btn-dark nav-link text-white float-right"
            >
              Sign in
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <button className='btn btn-primary'>Hello</button>
    //   </header>
    //   <div className="container">
    //     <Approutes />
    //   </div>
    // </div>
    <div className="App">
      <TopNav />
      <div className="auth-wrapper pt-5">
        {/* <Menu />  */}
        <div className="container pt-5">
          {/* The project routes  */}
          <Approutes />
          {/* <NumeroField /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
