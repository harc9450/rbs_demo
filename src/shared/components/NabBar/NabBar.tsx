import React from "react";

export class NabBar extends React.Component {
  render(): JSX.Element {
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-3">
        <div className="container">
          <a href="#" className="navbar-brand mr-3">
            RBS
          </a>
          <button
            type="button"
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav">
              <a href="/" className="nav-item nav-link">
                Example 1
              </a>
              <a href="/" className="nav-item nav-link">
                Example 2
              </a>
            </div>
            <div className="navbar-nav ml-auto">
              <a href="#" className="nav-item nav-link">
                Register
              </a>
              <a href="#" className="nav-item nav-link">
                Login
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
