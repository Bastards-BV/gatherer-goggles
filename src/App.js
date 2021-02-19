import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ConfigProvider } from "antd";
import "antd/dist/antd.css";

import { PageNotFound, Home } from "./views";

export default function App() {
  return (
    <ConfigProvider>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </Router>
    </ConfigProvider>
  );
}
