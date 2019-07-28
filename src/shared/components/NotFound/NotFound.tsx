import * as React from "react";
import "./NotFound.css";

export class NotFound extends React.Component {
  render(): JSX.Element {
    return (
      <div className="error-template">
        <h1>Oops!</h1>
        <h2>404 Not Found</h2>
        <div className="error-details">
          Sorry, an error has occured, Requested page not found!
        </div>
        <div className="error-actions">
          <a href="/" className="btn btn-primary btn-lg">
            Take Me Home
          </a>
          <a href="/" className="btn btn-dark btn-lg">
            Contact Support
          </a>
        </div>
      </div>
    );
  }
}
