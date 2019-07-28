import * as React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import ExcelFile from "../../../components/ExcelFile/ExcelFile";
import { NotFound } from "../NotFound/NotFound";
import { NabBar } from "../NabBar/NabBar";
import { Breadcrumb } from "../Breadcrumb/BreadCrumb";

class RouteContainer extends React.Component<{}, {}> {
  render(): JSX.Element {
    return (
      <Router>
        <NabBar />
        <Breadcrumb />
        <div className="container">
          <Switch>
            <Route path="/" exact component={ExcelFile} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default RouteContainer;
