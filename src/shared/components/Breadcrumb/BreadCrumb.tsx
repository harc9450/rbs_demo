import React from "react";

export class Breadcrumb extends React.Component {
  render(): JSX.Element {
    return (
      <div className="nav">
        <div className="container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#">RBS</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Examples</a>
            </li>
            <li className="breadcrumb-item active">1</li>
          </ol>
        </div>
      </div>
    );
  }
}
